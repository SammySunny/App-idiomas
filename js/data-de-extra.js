/* Ampliación del curso de alemán: unidades nuevas, temas de vocabulario y verbos.
   Se carga después de data-de.js. Las unidades se agregan al final de cada nivel. */
(function () {
  const tbl = (rows, head) =>
    `<div class="table-wrap"><table class="conj${head ? ' grid' : ''}">` +
    rows.map((r, i) => '<tr>' + r.map(c => (head && i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`)).join('') + '</tr>').join('') +
    '</table></div>';
  const c = window.COURSES.de;
  const add = (lv, units) => c.levels.find(x => x.id === lv).units.push(...units);

  /* ============================ UNIDADES NUEVAS ============================ */
  add('a1', [
    {
      id: 'a1-5',
      title: 'Gustos y negación',
      topic: 'gern, nicht y kein',
      grammar: `
<h3>Decir lo que te gusta: <em>gern</em></h3>
<p>Para decir que te gusta hacer algo, agregá <strong>gern</strong> después del verbo: <em>Ich spiele gern Fußball</em> (me gusta jugar al fútbol). Para lo que más te gusta: <em>am liebsten</em>.</p>
<p>Para cosas se usa <em>mögen</em>: <em>Ich mag Musik.</em></p>
<h3><em>nicht</em> o <em>kein</em></h3>
<p><strong>kein</strong> niega un sustantivo con artículo indefinido o sin artículo, y se declina como <em>ein</em>. <strong>nicht</strong> niega todo lo demás: verbos, adjetivos y sustantivos con artículo definido.</p>
${tbl([['Ich habe ein Auto.', 'Ich habe kein Auto.'], ['Ich trinke Kaffee.', 'Ich trinke keinen Kaffee.'], ['Ich schwimme gern.', 'Ich schwimme nicht gern.'], ['Das ist der Bus.', 'Das ist nicht der Bus.']])}
<div class="tip"><em>nicht</em> suele ir al final o justo antes de la palabra que niega: <em>Ich komme heute nicht.</em> / <em>Er ist nicht müde.</em></div>`,
      vocab: [
        ['spielen', 'jugar, tocar (un instrumento)'],
        ['lesen', 'leer'],
        ['hören', 'escuchar'],
        ['schwimmen', 'nadar'],
        ['kochen', 'cocinar'],
        ['tanzen', 'bailar'],
        ['gern', 'con gusto (me gusta…)'],
        ['nicht', 'no (negación)'],
        ['kein', 'ningún, ninguna'],
        ['die Musik', 'la música'],
      ],
      sentences: [
        ['Ich spiele gern Gitarre.', 'Me gusta tocar la guitarra.'],
        ['Wir haben keine Zeit.', 'No tenemos tiempo.'],
        ['Er tanzt nicht gern.', 'A él no le gusta bailar.'],
      ],
      cloze: [
        ['Ich habe ___ Hund.', 'keinen', ['keinen', 'nicht', 'kein']],
        ['Sie kocht ___ gern.', 'nicht', ['nicht', 'kein', 'keine']],
        ['Ich trinke ___ Milch.', 'keine', ['keine', 'nicht', 'keinen']],
      ],
    },
    {
      id: 'a1-6',
      title: 'Planes y obligaciones',
      topic: 'Verbos modales en presente',
      grammar: `
<h3>Los verbos modales</h3>
<p>Expresan posibilidad, obligación o deseo. El modal va en 2.º lugar y el otro verbo, en infinitivo, al final.</p>
${tbl([['', 'können', 'müssen', 'wollen'], ['ich', 'kann', 'muss', 'will'], ['du', 'kannst', 'musst', 'willst'], ['er / sie / es', 'kann', 'muss', 'will'], ['wir', 'können', 'müssen', 'wollen'], ['ihr', 'könnt', 'müsst', 'wollt'], ['sie / Sie', 'können', 'müssen', 'wollen']], true)}
<p class="ex">Ich <b>kann</b> heute nicht <b>kommen</b>.</p>
<div class="tip"><em>ich</em> y <em>er/sie/es</em> tienen la misma forma y no llevan <em>-t</em>: <em>ich kann, er kann</em>.</div>
<p><strong>können</strong> poder, <strong>müssen</strong> tener que, <strong>wollen</strong> querer, <strong>dürfen</strong> tener permiso, <strong>sollen</strong> deber (por encargo de otro).</p>`,
      vocab: [
        ['die Zeit', 'el tiempo'],
        ['das Kino', 'el cine'],
        ['das Konzert', 'el concierto'],
        ['morgen', 'mañana'],
        ['später', 'más tarde'],
        ['zusammen', 'juntos'],
        ['natürlich', 'claro, por supuesto'],
        ['leider', 'lamentablemente'],
        ['vielleicht', 'quizás'],
        ['heute Abend', 'esta noche'],
      ],
      sentences: [
        ['Kannst du heute Abend kommen?', '¿Podés venir esta noche?'],
        ['Ich muss morgen früh arbeiten.', 'Mañana tengo que trabajar temprano.'],
        ['Wir wollen zusammen ins Kino gehen.', 'Queremos ir juntos al cine.'],
      ],
      cloze: [
        ['Du ___ sehr gut kochen.', 'kannst', ['kannst', 'kann', 'könnt']],
        ['Ich ___ jetzt gehen.', 'muss', ['muss', 'musst', 'müssen']],
        ['Wir wollen ins Kino ___.', 'gehen', ['gehen', 'gehst', 'geht']],
      ],
    },
  ]);

  add('a2', [
    {
      id: 'a2-4',
      title: 'Comparar',
      topic: 'Comparativo y superlativo',
      grammar: `
<h3>Comparativo y superlativo</h3>
<p>Comparativo: adjetivo + <strong>-er</strong>, y se compara con <strong>als</strong>. Superlativo: <strong>am</strong> + adjetivo + <strong>-sten</strong>.</p>
${tbl([['billig', 'billiger', 'am billigsten'], ['schnell', 'schneller', 'am schnellsten'], ['alt', 'älter', 'am ältesten'], ['jung', 'jünger', 'am jüngsten']])}
<h3>Irregulares</h3>
${tbl([['gut', 'besser', 'am besten'], ['viel', 'mehr', 'am meisten'], ['gern', 'lieber', 'am liebsten'], ['hoch', 'höher', 'am höchsten']])}
<p class="ex">Der Zug ist schneller <b>als</b> der Bus.</p>
<p class="ex">Anna ist so alt <b>wie</b> ich.</p>
<div class="tip">Para la igualdad: <em>so</em> + adjetivo + <em>wie</em>. Muchos adjetivos cortos agregan diéresis: <em>alt → älter</em>, <em>groß → größer</em>.</div>`,
      vocab: [
        ['billig', 'barato'],
        ['teuer', 'caro'],
        ['schnell', 'rápido'],
        ['langsam', 'lento'],
        ['jung', 'joven'],
        ['besser', 'mejor'],
        ['am besten', 'lo mejor'],
        ['lieber', 'preferentemente (preferir)'],
        ['mehr', 'más'],
        ['weniger', 'menos'],
      ],
      sentences: [
        ['Der Zug ist schneller als der Bus.', 'El tren es más rápido que el colectivo.'],
        ['Ich trinke lieber Tee.', 'Prefiero tomar té.'],
        ['Dieses Handy ist am teuersten.', 'Este celular es el más caro.'],
      ],
      cloze: [
        ['Berlin ist größer ___ München.', 'als', ['als', 'wie', 'dann']],
        ['Das Essen hier ist ___ als dort.', 'besser', ['besser', 'guter', 'am besten']],
        ['Sie ist so alt ___ ich.', 'wie', ['wie', 'als', 'so']],
      ],
    },
    {
      id: 'a2-5',
      title: 'Las tareas de la casa',
      topic: 'El imperativo',
      grammar: `
<h3>El imperativo</h3>
<p>Sirve para dar órdenes, hacer pedidos y dar consejos. Tiene tres formas:</p>
${tbl([['du', 'Räum dein Zimmer auf!', 'sin -st y sin pronombre'], ['ihr', 'Räumt euer Zimmer auf!', 'como el presente, sin pronombre'], ['Sie', 'Räumen Sie bitte auf!', 'verbo + Sie']])}
<div class="tip">Los verbos que cambian <em>e → i</em> lo mantienen con <em>du</em>: <em>Nimm!</em>, <em>Iss!</em>, <em>Gib!</em> Los que cambian <em>a → ä</em>, no: <em>Fahr!</em>, <em>Schlaf!</em></div>
<p>Irregular: <em>sein → Sei ruhig! / Seid ruhig! / Seien Sie ruhig!</em></p>
<p>Con <em>bitte</em> y <em>mal</em> suena más amable: <em>Hilf mir bitte mal!</em></p>`,
      vocab: [
        ['aufräumen', 'ordenar'],
        ['putzen', 'limpiar'],
        ['abwaschen', 'lavar los platos'],
        ['die Küche', 'la cocina'],
        ['das Bad', 'el baño'],
        ['das Zimmer', 'la habitación'],
        ['das Geschirr', 'la vajilla'],
        ['die Wäsche', 'la ropa para lavar'],
        ['vergessen', 'olvidar'],
        ['sofort', 'enseguida'],
      ],
      sentences: [
        ['Räum bitte dein Zimmer auf!', '¡Ordená tu habitación, por favor!'],
        ['Vergiss den Schlüssel nicht!', '¡No te olvides la llave!'],
        ['Putzen Sie bitte das Bad!', '¡Limpie el baño, por favor!'],
      ],
      cloze: [
        ['___ mir bitte!', 'Hilf', ['Hilf', 'Helf', 'Hilfst']],
        ['Kinder, ___ leise!', 'seid', ['seid', 'sind', 'sei']],
        ['Frau Meier, ___ Sie bitte Platz!', 'nehmen', ['nehmen', 'nimm', 'nehmt']],
      ],
    },
  ]);

  add('b1', [
    {
      id: 'b1-4',
      title: 'Planes y futuro',
      topic: 'Futur I con werden',
      grammar: `
<h3>Futur I: werden + infinitivo</h3>
${tbl([['ich', 'werde'], ['du', 'wirst'], ['er / sie / es', 'wird'], ['wir', 'werden'], ['ihr', 'werdet'], ['sie / Sie', 'werden']])}
<p class="ex">Nächstes Jahr <b>werde</b> ich in Wien <b>studieren</b>.</p>
<div class="tip">En la conversación, el futuro suele decirse con presente + una expresión de tiempo: <em>Morgen fahre ich nach Hamburg.</em> El Futur I se usa sobre todo para promesas, predicciones y suposiciones: <em>Er wird wohl krank sein</em> (debe estar enfermo).</div>
<h3>Expresiones de tiempo</h3>
<p><em>bald</em> (pronto), <em>nächste Woche</em> (la semana que viene), <em>in zwei Jahren</em> (dentro de dos años), <em>eines Tages</em> (algún día).</p>`,
      vocab: [
        ['der Plan', 'el plan'],
        ['die Zukunft', 'el futuro'],
        ['nächstes Jahr', 'el año que viene'],
        ['bald', 'pronto'],
        ['hoffentlich', 'ojalá'],
        ['sparen', 'ahorrar'],
        ['das Ziel', 'la meta'],
        ['erreichen', 'alcanzar, lograr'],
        ['der Traum', 'el sueño'],
        ['sich vorstellen', 'imaginarse'],
      ],
      sentences: [
        ['Nächstes Jahr werde ich in Wien studieren.', 'El año que viene voy a estudiar en Viena.'],
        ['Hoffentlich erreichst du dein Ziel.', 'Ojalá alcances tu meta.'],
        ['Ich spare für eine lange Reise.', 'Ahorro para un viaje largo.'],
      ],
      cloze: [
        ['Morgen ___ es regnen.', 'wird', ['wird', 'werdet', 'wirst']],
        ['Du ___ das schaffen!', 'wirst', ['wirst', 'wird', 'werde']],
        ['Wir werden bald ___.', 'umziehen', ['umziehen', 'umgezogen', 'ziehen um']],
      ],
    },
    {
      id: 'b1-5',
      title: 'Dónde está cada cosa',
      topic: 'Preposiciones de dos casos',
      grammar: `
<h3>Wechselpräpositionen</h3>
<p><strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong> llevan <strong>dativo</strong> si indican ubicación (<em>wo?</em>) y <strong>acusativo</strong> si indican movimiento hacia un lugar (<em>wohin?</em>).</p>
${tbl([['wo? (dativo)', 'wohin? (acusativo)'], ['Das Buch liegt auf dem Tisch.', 'Ich lege das Buch auf den Tisch.'], ['Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.']], true)}
<h3>Verbos en pareja</h3>
${tbl([['stellen → stehen', 'poner de pie → estar de pie'], ['legen → liegen', 'apoyar acostado → estar acostado'], ['setzen → sitzen', 'sentar → estar sentado'], ['hängen → hängen', 'colgar → estar colgado']])}
<div class="tip">Los verbos de movimiento (<em>stellen, legen, setzen</em>) piden acusativo; los de estado (<em>stehen, liegen, sitzen</em>), dativo.</div>`,
      vocab: [
        ['stellen', 'poner (de pie)'],
        ['stehen', 'estar (de pie)'],
        ['legen', 'poner (acostado)'],
        ['liegen', 'estar (acostado)'],
        ['hängen', 'colgar'],
        ['sitzen', 'estar sentado'],
        ['die Wand', 'la pared'],
        ['der Boden', 'el piso'],
        ['die Ecke', 'la esquina, el rincón'],
        ['zwischen', 'entre'],
      ],
      sentences: [
        ['Die Lampe steht neben dem Sofa.', 'La lámpara está al lado del sillón.'],
        ['Ich lege die Schlüssel auf den Tisch.', 'Dejo las llaves sobre la mesa.'],
        ['Die Katze sitzt unter dem Stuhl.', 'El gato está sentado debajo de la silla.'],
      ],
      cloze: [
        ['Ich stelle die Flasche in ___ Kühlschrank.', 'den', ['den', 'dem', 'der']],
        ['Das Bild hängt an ___ Wand.', 'der', ['der', 'die', 'den']],
        ['Das Handy liegt auf ___ Bett.', 'dem', ['dem', 'das', 'den']],
      ],
    },
  ]);

  add('b2', [
    {
      id: 'b2-4',
      title: 'Argumentar',
      topic: 'Conectores, um … zu y damit',
      grammar: `
<h3>Finalidad: <em>um … zu</em> y <em>damit</em></h3>
<p><strong>um … zu</strong> + infinitivo cuando el sujeto es el mismo; <strong>damit</strong> + subordinada cuando cambia.</p>
<p class="ex">Ich lerne Deutsch, <b>um</b> in Wien <b>zu</b> arbeiten.</p>
<p class="ex">Ich erkläre es langsam, <b>damit</b> du es verstehst.</p>
<h3>Conectores de dos partes</h3>
${tbl([['sowohl … als auch', 'tanto… como'], ['weder … noch', 'ni… ni'], ['entweder … oder', 'o… o'], ['nicht nur … sondern auch', 'no solo… sino también'], ['je … desto', 'cuanto más… más']])}
<p class="ex">Je mehr man liest, desto besser schreibt man.</p>
<div class="tip"><em>deshalb, trotzdem, außerdem, jedoch</em> son adverbios: ocupan la posición 1 y el verbo va enseguida. <em>Es regnet, deshalb <b>bleiben</b> wir zu Hause.</em></div>`,
      vocab: [
        ['deshalb', 'por eso'],
        ['außerdem', 'además'],
        ['jedoch', 'sin embargo'],
        ['folglich', 'por consiguiente'],
        ['dennoch', 'no obstante'],
        ['sowohl … als auch', 'tanto… como'],
        ['weder … noch', 'ni… ni'],
        ['je … desto', 'cuanto más… más'],
        ['damit', 'para que'],
        ['im Gegensatz zu', 'a diferencia de'],
      ],
      sentences: [
        ['Ich lerne Deutsch, um in Wien zu arbeiten.', 'Estudio alemán para trabajar en Viena.'],
        ['Je mehr man liest, desto besser schreibt man.', 'Cuanto más se lee, mejor se escribe.'],
        ['Er spricht sowohl Englisch als auch Italienisch.', 'Habla tanto inglés como italiano.'],
      ],
      cloze: [
        ['Ich spare Geld, ___ ein Auto zu kaufen.', 'um', ['um', 'damit', 'weil']],
        ['Sie spricht langsam, ___ alle sie verstehen.', 'damit', ['damit', 'um', 'dass']],
        ['Er trinkt weder Kaffee ___ Tee.', 'noch', ['noch', 'oder', 'und']],
      ],
    },
  ]);

  add('c1', [
    {
      id: 'c1-4',
      title: 'Expresión formal',
      topic: 'Verbos con preposición y Nomen-Verb',
      grammar: `
<h3>Nomen-Verb-Verbindungen</h3>
<p>En el registro formal, un verbo simple se reemplaza por sustantivo + verbo «vacío». El significado lo lleva el sustantivo.</p>
${tbl([['entscheiden', 'eine Entscheidung treffen'], ['fragen', 'eine Frage stellen'], ['kritisieren', 'Kritik üben'], ['berücksichtigen', 'in Betracht ziehen']])}
<h3>Verbos con preposición fija</h3>
<p>Muchos verbos rigen una preposición que se aprende junto con ellos: <em>sich auseinandersetzen mit</em>, <em>abhängen von</em>, <em>sich beziehen auf</em>, <em>bestehen aus</em>.</p>
<p>Para retomar una cosa se usa <strong>da-</strong> + preposición, y para preguntar, <strong>wo-</strong> + preposición, con <em>-r-</em> delante de vocal:</p>
<p class="ex">Worauf bezieht sich der Text? — Er bezieht sich darauf, dass …</p>
<div class="tip">Con personas se usa preposición + pronombre: <em>An wen denkst du? — An ihn.</em> Con cosas: <em>Woran denkst du? — Daran.</em></div>`,
      vocab: [
        ['eine Entscheidung treffen', 'tomar una decisión'],
        ['zur Verfügung stehen', 'estar a disposición'],
        ['in Frage kommen', 'entrar en consideración'],
        ['Kritik üben', 'criticar'],
        ['in Kauf nehmen', 'aceptar (algo negativo)'],
        ['sich auseinandersetzen mit', 'ocuparse a fondo de'],
        ['abhängen von', 'depender de'],
        ['sich beziehen auf', 'referirse a'],
        ['zur Sprache bringen', 'plantear (un tema)'],
        ['Bezug nehmen auf', 'hacer referencia a'],
      ],
      sentences: [
        ['Wir müssen bis Freitag eine Entscheidung treffen.', 'Tenemos que tomar una decisión antes del viernes.'],
        ['Das hängt vom Wetter ab.', 'Eso depende del clima.'],
        ['Worauf bezieht sich diese Aussage?', '¿A qué se refiere esta declaración?'],
      ],
      cloze: [
        ['Das hängt ___ dir ab.', 'von', ['von', 'auf', 'mit']],
        ['Ich bin nicht ___ einverstanden.', 'damit', ['damit', 'dafür', 'womit']],
        ['___ denkst du gerade?', 'Woran', ['Woran', 'Worauf', 'Wovon']],
      ],
    },
  ]);

  /* ============================ VERBOS ============================
     [infinitivo, traducción, [ich, du, er/sie/es, wir, ihr, sie/Sie], Partizip II, auxiliar] */
  c.pron = ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'];
  c.perfName = 'Perfekt';
  c.aux = { haben: 'habe', sein: 'bin' };
  c.verbs = [
    ['sein', 'ser, estar', ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], 'gewesen', 'sein'],
    ['haben', 'tener', ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], 'gehabt', 'haben'],
    ['werden', 'volverse, llegar a ser', ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], 'geworden', 'sein'],
    ['können', 'poder', ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'], 'gekonnt', 'haben'],
    ['müssen', 'tener que', ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'], 'gemusst', 'haben'],
    ['wollen', 'querer', ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'], 'gewollt', 'haben'],
    ['mögen', 'gustar', ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'], 'gemocht', 'haben'],
    ['dürfen', 'tener permiso', ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'], 'gedurft', 'haben'],
    ['wissen', 'saber', ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'], 'gewusst', 'haben'],
    ['gehen', 'ir (a pie)', ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'], 'gegangen', 'sein'],
    ['kommen', 'venir', ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'], 'gekommen', 'sein'],
    ['fahren', 'ir (en vehículo), manejar', ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'], 'gefahren', 'sein'],
    ['bleiben', 'quedarse', ['bleibe', 'bleibst', 'bleibt', 'bleiben', 'bleibt', 'bleiben'], 'geblieben', 'sein'],
    ['laufen', 'correr, caminar', ['laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'], 'gelaufen', 'sein'],
    ['machen', 'hacer', ['mache', 'machst', 'macht', 'machen', 'macht', 'machen'], 'gemacht', 'haben'],
    ['sprechen', 'hablar', ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'], 'gesprochen', 'haben'],
    ['essen', 'comer', ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'], 'gegessen', 'haben'],
    ['trinken', 'beber', ['trinke', 'trinkst', 'trinkt', 'trinken', 'trinkt', 'trinken'], 'getrunken', 'haben'],
    ['nehmen', 'tomar', ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'], 'genommen', 'haben'],
    ['geben', 'dar', ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben'], 'gegeben', 'haben'],
    ['sehen', 'ver', ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'], 'gesehen', 'haben'],
    ['lesen', 'leer', ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'], 'gelesen', 'haben'],
    ['schlafen', 'dormir', ['schlafe', 'schläfst', 'schläft', 'schlafen', 'schlaft', 'schlafen'], 'geschlafen', 'haben'],
    ['helfen', 'ayudar', ['helfe', 'hilfst', 'hilft', 'helfen', 'helft', 'helfen'], 'geholfen', 'haben'],
    ['finden', 'encontrar', ['finde', 'findest', 'findet', 'finden', 'findet', 'finden'], 'gefunden', 'haben'],
    ['arbeiten', 'trabajar', ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten'], 'gearbeitet', 'haben'],
    ['lernen', 'aprender, estudiar', ['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen'], 'gelernt', 'haben'],
    ['wohnen', 'vivir (residir)', ['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen'], 'gewohnt', 'haben'],
    ['heißen', 'llamarse', ['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen'], 'geheißen', 'haben'],
    ['kaufen', 'comprar', ['kaufe', 'kaufst', 'kauft', 'kaufen', 'kauft', 'kaufen'], 'gekauft', 'haben'],
  ];

  /* ============================ TEMAS ============================ */
  c.topics = [
    {
      id: 't-colores', title: 'Colores', level: 'a1',
      note: 'Los colores son adjetivos: van en minúscula. Delante de un sustantivo se declinan: <em>ein rotes Auto</em>.',
      vocab: [['rot', 'rojo'], ['blau', 'azul'], ['grün', 'verde'], ['gelb', 'amarillo'], ['schwarz', 'negro'], ['weiß', 'blanco'], ['grau', 'gris'], ['braun', 'marrón'], ['orange', 'naranja (color)'], ['rosa', 'rosa (color)'], ['lila', 'violeta'], ['hellblau', 'celeste'], ['bunt', 'colorido'], ['die Farbe', 'el color']],
      sentences: [['Mein Auto ist rot.', 'Mi auto es rojo.'], ['Welche Farbe hat dein Pullover?', '¿De qué color es tu pulóver?'], ['Der Himmel ist heute grau.', 'Hoy el cielo está gris.']],
    },
    {
      id: 't-calendario', title: 'Días y estaciones', level: 'a1',
      note: 'Los días, meses y estaciones son masculinos. Se usa <em>am</em> con los días (<em>am Montag</em>) e <em>im</em> con meses y estaciones (<em>im Mai, im Winter</em>).',
      vocab: [['der Montag', 'lunes'], ['der Dienstag', 'martes'], ['der Mittwoch', 'miércoles'], ['der Donnerstag', 'jueves'], ['der Freitag', 'viernes'], ['der Samstag', 'sábado'], ['der Sonntag', 'domingo'], ['der Monat', 'el mes'], ['das Jahr', 'el año'], ['der Frühling', 'la primavera'], ['der Sommer', 'el verano'], ['der Herbst', 'el otoño'], ['der Winter', 'el invierno'], ['das Wochenende', 'el fin de semana']],
      sentences: [['Am Montag arbeite ich.', 'El lunes trabajo.'], ['Im Sommer fahren wir ans Meer.', 'En verano vamos al mar.'], ['Mein Geburtstag ist im Mai.', 'Mi cumpleaños es en mayo.']],
    },
    {
      id: 't-ropa', title: 'La ropa', level: 'a1',
      vocab: [['das Hemd', 'la camisa'], ['die Hose', 'el pantalón'], ['der Rock', 'la pollera'], ['das Kleid', 'el vestido'], ['die Jacke', 'la campera'], ['der Mantel', 'el abrigo'], ['der Pullover', 'el pulóver'], ['die Schuhe', 'los zapatos'], ['die Socken', 'las medias'], ['der Hut', 'el sombrero'], ['die Mütze', 'el gorro'], ['das T-Shirt', 'la remera'], ['der Gürtel', 'el cinturón'], ['tragen', 'llevar puesto']],
      sentences: [['Ich trage heute eine Jacke.', 'Hoy llevo una campera.'], ['Die Schuhe sind zu klein.', 'Los zapatos son demasiado chicos.'], ['Wie viel kostet das Kleid?', '¿Cuánto cuesta el vestido?']],
    },
    {
      id: 't-cuerpo', title: 'El cuerpo', level: 'a1',
      vocab: [['die Hand', 'la mano'], ['der Fuß', 'el pie'], ['das Auge', 'el ojo'], ['das Ohr', 'la oreja'], ['der Mund', 'la boca'], ['die Nase', 'la nariz'], ['der Arm', 'el brazo'], ['das Bein', 'la pierna'], ['das Haar', 'el pelo'], ['der Zahn', 'el diente'], ['das Herz', 'el corazón'], ['der Finger', 'el dedo'], ['das Gesicht', 'la cara'], ['der Hals', 'el cuello']],
      sentences: [['Ich wasche mir die Hände.', 'Me lavo las manos.'], ['Sie hat blaue Augen.', 'Ella tiene ojos azules.'], ['Mein Fuß tut weh.', 'Me duele el pie.']],
    },
    {
      id: 't-casa', title: 'La casa', level: 'a1',
      vocab: [['der Tisch', 'la mesa'], ['der Stuhl', 'la silla'], ['das Bett', 'la cama'], ['der Schrank', 'el armario'], ['das Fenster', 'la ventana'], ['die Tür', 'la puerta'], ['die Lampe', 'la lámpara'], ['das Sofa', 'el sillón'], ['das Regal', 'el estante'], ['die Treppe', 'la escalera'], ['der Garten', 'el jardín'], ['der Spiegel', 'el espejo'], ['die Wohnung', 'el departamento'], ['der Kühlschrank', 'la heladera']],
      sentences: [['Das Buch liegt auf dem Tisch.', 'El libro está sobre la mesa.'], ['Mach bitte das Fenster zu!', '¡Cerrá la ventana, por favor!'], ['Unsere Wohnung hat drei Zimmer.', 'Nuestro departamento tiene tres ambientes.']],
    },
    {
      id: 't-animales', title: 'Animales', level: 'a1',
      vocab: [['der Hund', 'el perro'], ['die Katze', 'el gato'], ['das Pferd', 'el caballo'], ['die Kuh', 'la vaca'], ['das Schwein', 'el cerdo'], ['der Vogel', 'el pájaro'], ['der Fisch', 'el pez'], ['die Maus', 'el ratón'], ['das Kaninchen', 'el conejo'], ['das Schaf', 'la oveja'], ['der Bär', 'el oso'], ['der Löwe', 'el león'], ['das Huhn', 'la gallina'], ['das Tier', 'el animal']],
      sentences: [['Wir haben einen Hund und zwei Katzen.', 'Tenemos un perro y dos gatos.'], ['Der Vogel singt im Garten.', 'El pájaro canta en el jardín.'], ['Welches Tier magst du am liebsten?', '¿Qué animal te gusta más?']],
    },
    {
      id: 't-frutas', title: 'Frutas y verduras', level: 'a1',
      vocab: [['die Banane', 'la banana'], ['die Orange', 'la naranja'], ['die Erdbeere', 'la frutilla'], ['die Birne', 'la pera'], ['die Zitrone', 'el limón'], ['die Traube', 'la uva'], ['die Kartoffel', 'la papa'], ['die Tomate', 'el tomate'], ['die Zwiebel', 'la cebolla'], ['die Karotte', 'la zanahoria'], ['der Salat', 'la lechuga'], ['die Gurke', 'el pepino'], ['das Obst', 'la fruta'], ['das Gemüse', 'la verdura']],
      sentences: [['Ich esse jeden Tag Obst.', 'Como fruta todos los días.'], ['Die Erdbeeren sind sehr süß.', 'Las frutillas están muy dulces.'], ['Wir brauchen Kartoffeln und Zwiebeln.', 'Necesitamos papas y cebollas.']],
    },
    {
      id: 't-adjetivos', title: 'Adjetivos opuestos', level: 'a1',
      vocab: [['groß', 'grande'], ['klein', 'chico'], ['lang', 'largo'], ['kurz', 'corto'], ['neu', 'nuevo'], ['hell', 'claro, luminoso'], ['dunkel', 'oscuro'], ['leicht', 'liviano, fácil'], ['schwer', 'pesado, difícil'], ['warm', 'cálido'], ['kalt', 'frío'], ['voll', 'lleno'], ['leer', 'vacío'], ['schön', 'lindo']],
      sentences: [['Das Zimmer ist klein, aber hell.', 'La habitación es chica pero luminosa.'], ['Der Koffer ist sehr schwer.', 'La valija es muy pesada.'], ['Die Flasche ist leer.', 'La botella está vacía.']],
    },
    {
      id: 't-preguntas', title: 'Preguntas y palabras útiles', level: 'a1',
      note: 'En las preguntas con estas palabras, el verbo va en 2.º lugar: <em>Wo <b>wohnst</b> du?</em>',
      vocab: [['wer', 'quién'], ['was', 'qué'], ['wo', 'dónde'], ['woher', 'de dónde'], ['wohin', 'adónde'], ['wann', 'cuándo'], ['warum', 'por qué'], ['wie', 'cómo'], ['wie viel', 'cuánto'], ['welcher', 'cuál'], ['und', 'y'], ['aber', 'pero'], ['oder', 'o'], ['auch', 'también']],
      sentences: [['Wo wohnst du?', '¿Dónde vivís?'], ['Warum lernst du Deutsch?', '¿Por qué estudiás alemán?'], ['Wann beginnt der Film?', '¿Cuándo empieza la película?']],
    },
    {
      id: 't-clima', title: 'El clima', level: 'a2',
      note: 'Para el clima se usa <em>es</em> como sujeto: <em>Es regnet</em> (llueve), <em>es schneit</em> (nieva), <em>es ist kalt</em> (hace frío).',
      vocab: [['das Wetter', 'el tiempo (clima)'], ['die Sonne', 'el sol'], ['der Regen', 'la lluvia'], ['der Schnee', 'la nieve'], ['der Wind', 'el viento'], ['die Wolke', 'la nube'], ['das Gewitter', 'la tormenta'], ['der Nebel', 'la niebla'], ['die Temperatur', 'la temperatura'], ['regnen', 'llover'], ['schneien', 'nevar'], ['sonnig', 'soleado'], ['bewölkt', 'nublado'], ['der Grad', 'el grado']],
      sentences: [['Wie ist das Wetter heute?', '¿Cómo está el tiempo hoy?'], ['Es regnet seit drei Tagen.', 'Llueve desde hace tres días.'], ['Morgen wird es sonnig.', 'Mañana va a estar soleado.']],
    },
    {
      id: 't-profesiones', title: 'Profesiones', level: 'a2',
      note: 'La forma femenina suele terminar en <em>-in</em>: <em>der Lehrer → die Lehrerin</em>. Al decir la profesión no se usa artículo: <em>Ich bin Ärztin.</em>',
      vocab: [['der Arzt', 'el médico'], ['die Ärztin', 'la médica'], ['der Lehrer', 'el maestro'], ['die Lehrerin', 'la maestra'], ['der Koch', 'el cocinero'], ['der Kellner', 'el mozo'], ['der Verkäufer', 'el vendedor'], ['der Ingenieur', 'el ingeniero'], ['der Anwalt', 'el abogado'], ['der Polizist', 'el policía'], ['die Krankenpflegerin', 'la enfermera'], ['der Apotheker', 'el farmacéutico'], ['der Programmierer', 'el programador'], ['der Architekt', 'el arquitecto']],
      sentences: [['Was sind Sie von Beruf?', '¿A qué se dedica usted?'], ['Meine Schwester ist Ärztin.', 'Mi hermana es médica.'], ['Er arbeitet als Kellner in einem Café.', 'Trabaja de mozo en un café.']],
    },
    {
      id: 't-transporte', title: 'Transporte', level: 'a2',
      vocab: [['das Auto', 'el auto'], ['der Zug', 'el tren'], ['das Fahrrad', 'la bicicleta'], ['die U-Bahn', 'el subte'], ['das Flugzeug', 'el avión'], ['das Schiff', 'el barco'], ['das Taxi', 'el taxi'], ['die Straßenbahn', 'el tranvía'], ['das Motorrad', 'la moto'], ['die Ampel', 'el semáforo'], ['die Kreuzung', 'el cruce'], ['der Parkplatz', 'el estacionamiento'], ['zu Fuß', 'a pie'], ['umsteigen', 'hacer transbordo']],
      sentences: [['Ich fahre mit dem Fahrrad zur Arbeit.', 'Voy al trabajo en bicicleta.'], ['Wo muss ich umsteigen?', '¿Dónde tengo que hacer transbordo?'], ['Das Flugzeug landet um acht Uhr.', 'El avión aterriza a las ocho.']],
    },
    {
      id: 't-compras', title: 'Compras y dinero', level: 'a2',
      vocab: [['das Geld', 'la plata'], ['der Preis', 'el precio'], ['die Kasse', 'la caja'], ['das Geschäft', 'el negocio'], ['der Supermarkt', 'el supermercado'], ['kaufen', 'comprar'], ['verkaufen', 'vender'], ['bezahlen', 'pagar'], ['kosten', 'costar'], ['günstig', 'conveniente, barato'], ['das Angebot', 'la oferta'], ['die Quittung', 'el ticket'], ['bar', 'en efectivo'], ['die Karte', 'la tarjeta']],
      sentences: [['Kann ich mit Karte bezahlen?', '¿Puedo pagar con tarjeta?'], ['Das ist im Angebot.', 'Eso está en oferta.'], ['Wie viel kostet das?', '¿Cuánto cuesta eso?']],
    },
    {
      id: 't-ocio', title: 'Tiempo libre y deportes', level: 'a2',
      vocab: [['der Fußball', 'el fútbol'], ['das Schwimmbad', 'la pileta'], ['der Sport', 'el deporte'], ['das Spiel', 'el partido, el juego'], ['die Mannschaft', 'el equipo'], ['joggen', 'salir a correr'], ['wandern', 'hacer senderismo'], ['das Museum', 'el museo'], ['das Theater', 'el teatro'], ['das Hobby', 'el pasatiempo'], ['der Ausflug', 'la excursión'], ['fotografieren', 'sacar fotos'], ['malen', 'pintar'], ['die Freizeit', 'el tiempo libre']],
      sentences: [['In meiner Freizeit gehe ich wandern.', 'En mi tiempo libre hago senderismo.'], ['Welche Mannschaft hat gewonnen?', '¿Qué equipo ganó?'], ['Am Sonntag machen wir einen Ausflug.', 'El domingo hacemos una excursión.']],
    },
    {
      id: 't-emociones', title: 'Emociones y carácter', level: 'b1',
      note: 'Muchas emociones van con preposición fija: <em>stolz auf</em> (orgulloso de), <em>Angst vor</em> (miedo a), <em>sich freuen auf</em> (alegrarse por algo que viene).',
      vocab: [['glücklich', 'feliz'], ['traurig', 'triste'], ['wütend', 'enojado'], ['müde', 'cansado'], ['nervös', 'nervioso'], ['stolz', 'orgulloso'], ['überrascht', 'sorprendido'], ['enttäuscht', 'decepcionado'], ['die Angst', 'el miedo'], ['die Freude', 'la alegría'], ['freundlich', 'amable'], ['ehrlich', 'honesto'], ['geduldig', 'paciente'], ['schüchtern', 'tímido']],
      sentences: [['Ich bin stolz auf dich.', 'Estoy orgulloso de vos.'], ['Hast du Angst vor Hunden?', '¿Te dan miedo los perros?'], ['Sie war sehr enttäuscht.', 'Ella estaba muy decepcionada.']],
    },
    {
      id: 't-naturaleza', title: 'Naturaleza', level: 'b1',
      vocab: [['der Berg', 'la montaña'], ['der See', 'el lago'], ['das Meer', 'el mar'], ['der Fluss', 'el río'], ['der Wald', 'el bosque'], ['der Strand', 'la playa'], ['die Insel', 'la isla'], ['der Baum', 'el árbol'], ['die Blume', 'la flor'], ['das Feld', 'el campo'], ['der Himmel', 'el cielo'], ['der Stern', 'la estrella'], ['die Landschaft', 'el paisaje'], ['die Wüste', 'el desierto']],
      sentences: [['Wir wandern gern in den Bergen.', 'Nos gusta hacer senderismo en la montaña.'], ['Der See ist im Sommer warm.', 'El lago es cálido en verano.'], ['Nachts sieht man viele Sterne.', 'De noche se ven muchas estrellas.']],
    },
    {
      id: 't-tecnologia', title: 'Tecnología', level: 'b1',
      vocab: [['das Handy', 'el celular'], ['der Computer', 'la computadora'], ['das Passwort', 'la contraseña'], ['die Datei', 'el archivo'], ['herunterladen', 'descargar'], ['hochladen', 'subir (un archivo)'], ['speichern', 'guardar'], ['löschen', 'borrar'], ['der Bildschirm', 'la pantalla'], ['die Tastatur', 'el teclado'], ['das Netzwerk', 'la red'], ['die E-Mail', 'el correo electrónico'], ['das Ladegerät', 'el cargador'], ['die App', 'la aplicación']],
      sentences: [['Ich habe mein Passwort vergessen.', 'Me olvidé la contraseña.'], ['Hast du die Datei gespeichert?', '¿Guardaste el archivo?'], ['Mein Akku ist leer.', 'Se me terminó la batería.']],
    },
  ];
})();
