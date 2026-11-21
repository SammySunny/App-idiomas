# Parla & Sprich

App web para aprender **alemán** e **italiano** en español, desde nivel principiante (A1) hasta avanzado (C1). Se instala en el celular como una app y funciona **sin conexión**.

Es HTML, CSS y JavaScript puro: no tiene dependencias ni paso de compilación, así que se publica tal cual en GitHub Pages.

## Qué incluye

**Camino de gramática.** 24 unidades por idioma en cinco niveles (A1, A2, B1, B2 y C1). Cada una trae una explicación con tablas, 10 palabras y frases de ejemplo. Las unidades se desbloquean en orden; se aprueban con 70 %.

**Temas de vocabulario.** 17 categorías por idioma, de libre acceso: colores, días y estaciones, ropa, cuerpo, casa, animales, frutas y verduras, adjetivos, preguntas, clima, profesiones, transporte, compras, tiempo libre, emociones, naturaleza y tecnología.

**Practicar.**
- Repaso del día con repetición espaciada (sistema Leitner de 5 cajas: 1, 3, 7, 16 y 35 días).
- Práctica mixta con todo lo que ya completaste.
- Tus errores: las palabras que fallás se juntan en una lista y salen al acertarlas.
- Verbos: 30 verbos esenciales con tablas, audio y práctica del presente y del Perfekt / passato prossimo.
- Diccionario con búsqueda en los dos sentidos: 478 palabras más los verbos.

**Quince tipos de ejercicio**, mezclados en cada lección:

| Vocabulario | Frases | Gramática |
| --- | --- | --- |
| Elegir el significado | Ordenar palabras | Completar la frase |
| Elegir la palabra | Escuchar y ordenar | Elegir el artículo (der/die/das, il/lo/la…) |
| Escuchar y elegir | Elegir la traducción de una frase | Conjugar (opción múltiple) |
| Escribir la palabra | | Conjugar (escribiendo) |
| Dictado | | Pasado compuesto (opción y escritura) |
| Verdadero o falso | | |
| Unir pares | | |

Los ejercicios de audio aparecen cuando el dispositivo tiene voz para el idioma. Los errores vuelven al final de la lección. La corrección escrita tolera acentos y errores de tipeo, salvo en las conjugaciones, donde una letra cambia la forma.

**Además:** artículos alemanes con color (der celeste, die rosa, das verde, plural amarillo), pronunciación con las voces del sistema, racha y objetivo diario, exportar e importar el progreso, tema oscuro con pasteles y tipografías incluidas para que todo funcione sin internet.

## Publicar en GitHub Pages

```bash
cd parla-sprich
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin git@github.com:TU_USUARIO/App-idiomas.git
git push -u origin main
```

Después, en GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, elegí `main` y la carpeta `/ (root)`. En uno o dos minutos la app queda en `https://TU_USUARIO.github.io/parla-sprich/`.

Todas las rutas son relativas, así que funciona en cualquier subcarpeta sin tocar nada.

## Instalar en el celular

- **Android (Chrome)**: abrí la URL, menú ⋮ → **Instalar app**. También aparece un botón en *Ajustes* dentro de la app.
- **iPhone / iPad (Safari)**: botón **Compartir** → **Agregar a inicio**.

La primera visita necesita internet; después la app queda guardada y abre sin conexión.

### Voces sin conexión

La pronunciación usa las voces instaladas en el teléfono. Para que funcione offline:

- **Android**: Ajustes → Sistema → Idiomas → Salida de texto a voz → Motor de Google → Instalar datos de voz → Alemán e Italiano.
- **iOS**: Ajustes → Accesibilidad → Contenido leído → Voces → Alemán / Italiano.

En *Ajustes* la app muestra si encontró cada voz.

## Probar en tu compu

El service worker necesita `http://`, no `file://`:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Actualizar la app

La app se actualiza sola. Cada vez que subís cambios al repositorio:

1. GitHub Pages publica la versión nueva en uno o dos minutos.
2. La próxima vez que alguien abre la app con internet, el service worker descarga los archivos nuevos y los guarda para usarlos sin conexión.

No hay que cambiar ningún número de versión. Si alguna vez la app queda trabada en una versión vieja, en **Ajustes → App → Borrar caché** se vuelven a descargar todos los archivos sin perder el progreso. El service worker usa la estrategia **red primero**: con conexión siempre pide la última versión al servidor; sin conexión, o si la red tarda más de 4 segundos, usa la copia guardada.

Si agregás archivos nuevos (por ejemplo, otro archivo de datos), sumalos a la lista `ASSETS` de `sw.js` para que estén disponibles offline desde la primera visita.

## Agregar o editar contenido

El contenido está en `js/data-de.js` y `js/data-it.js` (unidades originales) y en `js/data-de-extra.js` y `js/data-it-extra.js` (unidades nuevas, temas y verbos).

Una **unidad** tiene esta forma:

```js
{
  id: 'a1-1',                        // único dentro del idioma
  title: 'Saludos y presentaciones',
  topic: 'El verbo sein y el trato du o Sie',
  grammar: `<h3>…</h3><p>…</p>`,     // HTML; tbl([...]) arma tablas
  vocab: [['Hallo', 'hola'], …],     // [palabra, traducción], ideal 10
  sentences: [['Ich bin Anna.', 'Soy Anna.'], …],
  cloze: [['Ich ___ müde.', 'bin', ['bin', 'bist', 'ist']], …],
}
```

Para sumar unidades a un nivel desde un archivo extra: `add('b1', [ {…} ])`.

Un **tema** es igual pero sin gramática ni ejercicios de completar, con un nivel orientativo y una nota opcional:

```js
{ id: 't-colores', title: 'Colores', level: 'a1', note: '…', vocab: [...], sentences: [...] }
```

Un **verbo**: `['gehen', 'ir (a pie)', ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'], 'gegangen', 'sein']`.

Los ejercicios se generan solos a partir de estos datos. Los sustantivos con artículo (`der Hund`, `il cane`, `l'acqua`) entran automáticamente en el ejercicio de género. Para un sustantivo alemán en plural, escribí la traducción con «los» o «las» y el artículo se pinta como plural.

Para sumar otro idioma: copiá los archivos de datos, cambiá `code`, `name`, `tts` (por ejemplo `fr-FR`), `color`, `pron`, `aux` y `perfName`, cargalos en `index.html`, agregá el código a `LANGS` en `js/app.js` y sumá los archivos a `ASSETS` en `sw.js`.

## Estructura

```
├── index.html
├── manifest.webmanifest   # datos para instalar la app
├── sw.js                  # caché offline
├── css/styles.css
├── js/
│   ├── app.js             # lógica, ejercicios, repaso, progreso
│   ├── data-de.js         # curso de alemán: unidades originales
│   ├── data-de-extra.js   # alemán: unidades nuevas, temas y verbos
│   ├── data-it.js         # curso de italiano: unidades originales
│   └── data-it-extra.js   # italiano: unidades nuevas, temas y verbos
├── fonts/                 # Lexend y Fraunces (licencia SIL OFL 1.1)
└── icons/
```

## Créditos

Tipografías [Lexend](https://www.lexend.com) y [Fraunces](https://github.com/undercasetype/Fraunces), ambas bajo SIL Open Font License 1.1.
