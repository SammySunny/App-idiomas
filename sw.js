/* Service worker de Parla & Sprich.

   Estrategia: RED PRIMERO.
   - Con internet, cada archivo se pide al servidor (GitHub Pages) y se guarda una copia.
     Así la app siempre usa la última versión publicada en el repositorio, sin tocar nada acá.
   - Sin internet, o si la red tarda más de 4 segundos, se usa la copia guardada.
   - Las fuentes y los íconos casi nunca cambian: se sirven desde la caché.

   No hace falta cambiar ninguna versión al actualizar el repositorio. */
const CACHE = 'parla-sprich';
const TIMEOUT = 4000;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/styles.css',
  './js/app.js',
  './js/data-de.js',
  './js/data-it.js',
  './js/data-de-extra.js',
  './js/data-it-extra.js',
  './fonts/lexend.woff2',
  './fonts/fraunces.woff2',
  './icons/favicon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  // Borra cachés de versiones anteriores de la app (parla-sprich-v1.0.0, etc.).
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('parla-sprich') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isStatic = url => /\/(fonts|icons)\//.test(url.pathname);

async function fromCache(req) {
  const cache = await caches.open(CACHE);
  return (await cache.match(req, { ignoreSearch: true })) ||
    (req.mode === 'navigate' ? cache.match('./index.html') : undefined);
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  // 'no-cache' revalida contra el servidor (ETag) en vez de usar la caché HTTP del navegador.
  const network = fetch(req, { cache: 'no-cache' }).then(res => {
    if (res.ok) cache.put(req.mode === 'navigate' ? './index.html' : req, res.clone());
    return res;
  });
  const timeout = new Promise(resolve => setTimeout(resolve, TIMEOUT));
  try {
    // Si la red responde a tiempo, se usa; si tarda, se muestra la copia y la red sigue actualizándola.
    const res = await Promise.race([network, timeout]);
    if (res && res.ok) return res;
    const cached = await fromCache(req);
    if (cached) return cached;
    return await network;
  } catch (e) {
    const cached = await fromCache(req);
    if (cached) return cached;
    throw e;
  }
}

async function cacheFirst(req) {
  const cached = await fromCache(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
  return res;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(isStatic(url) ? cacheFirst(req) : networkFirst(req));
});
