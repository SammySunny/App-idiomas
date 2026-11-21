/* Ampliación del curso de italiano: unidades nuevas, temas de vocabulario y verbos.
   Se carga después de data-it.js. Las unidades se agregan al final de cada nivel. */
(function () {
  const tbl = (rows, head) =>
    `<div class="table-wrap"><table class="conj${head ? ' grid' : ''}">` +
    rows.map((r, i) => '<tr>' + r.map(c => (head && i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`)).join('') + '</tr>').join('') +
    '</table></div>';
  const c = window.COURSES.it;
  const add = (lv, units) => c.levels.find(x => x.id === lv).units.push(...units);

  /* ============================ UNIDADES NUEVAS ============================ */
  add('a1', [
    {
      id: 'a1-5',
      title: 'Gustos y negación',
      topic: 'Mi piace y la negación con non',
      grammar: `
<h3><em>Mi piace</em> y <em>mi piacciono</em></h3>
<p>Funciona como «me gusta» en español: el verbo concuerda con lo que gusta.</p>
${tbl([['mi piace', 'la musica, leggere'], ['mi piacciono', 'i film, le lingue'], ['ti piace', '¿te gusta?'], ['gli / le piace', 'le gusta (a él / a ella)'], ['ci piace', 'nos gusta']])}
<h3>La negación</h3>
<p>Se pone <strong>non</strong> delante del verbo: <em>Non mi piace il caffè.</em> Con <em>mai, niente, nessuno</em> el <em>non</em> se mantiene, como en español: <em>Non bevo mai vino.</em></p>
<div class="tip"><em>anche</em> es «también» y <em>neanche</em> es «tampoco»: <em>Neanche a me piace.</em></div>`,
      vocab: [
        ['giocare', 'jugar'],
        ['leggere', 'leer'],
        ['ascoltare', 'escuchar'],
        ['nuotare', 'nadar'],
        ['cucinare', 'cocinar'],
        ['ballare', 'bailar'],
        ['la musica', 'la música'],
        ['il film', 'la película'],
        ['mi piace', 'me gusta'],
        ['neanche', 'tampoco'],
      ],
      sentences: [
        ['Mi piace ascoltare la musica.', 'Me gusta escuchar música.'],
        ["Non mi piacciono i film dell'orrore.", 'No me gustan las películas de terror.'],
        ['Lui non balla mai.', 'Él nunca baila.'],
      ],
      cloze: [
        ['Mi ___ i gatti.', 'piacciono', ['piacciono', 'piace', 'piaci']],
        ['___ mi piace il caffè.', 'Non', ['Non', 'No', 'Niente']],
        ['Ti ___ leggere?', 'piace', ['piace', 'piacciono', 'piaci']],
      ],
    },
    {
      id: 'a1-6',
      title: 'Planes y obligaciones',
      topic: 'potere, dovere y volere',
      grammar: `
<h3>Los verbos modales</h3>
${tbl([['', 'potere', 'dovere', 'volere'], ['io', 'posso', 'devo', 'voglio'], ['tu', 'puoi', 'devi', 'vuoi'], ['lui / lei', 'può', 'deve', 'vuole'], ['noi', 'possiamo', 'dobbiamo', 'vogliamo'], ['voi', 'potete', 'dovete', 'volete'], ['loro', 'possono', 'devono', 'vogliono']], true)}
<p>Van seguidos de un infinitivo: <em>Posso venire stasera?</em></p>
<div class="tip">Con los modales, los pronombres pueden ir antes o pegados al infinitivo: <em>Ti posso aiutare?</em> = <em>Posso aiutarti?</em></div>`,
      vocab: [
        ['il concerto', 'el concierto'],
        ['il cinema', 'el cine'],
        ['domani', 'mañana'],
        ['dopo', 'después'],
        ['insieme', 'juntos'],
        ['certo', 'claro'],
        ['purtroppo', 'lamentablemente'],
        ['forse', 'quizás'],
        ['subito', 'enseguida'],
        ['stasera', 'esta noche'],
      ],
      sentences: [
        ['Puoi venire stasera?', '¿Podés venir esta noche?'],
        ['Domani devo lavorare presto.', 'Mañana tengo que trabajar temprano.'],
        ['Vogliamo andare al cinema insieme.', 'Queremos ir juntos al cine.'],
      ],
      cloze: [
        ['Loro ___ partire domani.', 'devono', ['devono', 'deve', 'dobbiamo']],
        ['Io non ___ venire, purtroppo.', 'posso', ['posso', 'puoi', 'può']],
        ['Che cosa ___ fare voi?', 'volete', ['volete', 'vogliono', 'vuoi']],
      ],
    },
  ]);

  add('a2', [
    {
      id: 'a2-4',
      title: 'Comparar',
      topic: 'Comparativos y superlativos',
      grammar: `
<h3>Comparativos</h3>
<p><strong>più</strong> (más) o <strong>meno</strong> (menos) + adjetivo + <strong>di</strong>: <em>Roma è più grande di Firenze.</em> Si se comparan verbos, adjetivos o cantidades, se usa <strong>che</strong>: <em>È più facile parlare che scrivere.</em></p>
<p>Igualdad: <em>(così) … come</em> o <em>(tanto) … quanto</em>: <em>Marco è alto come me.</em></p>
<h3>Superlativo</h3>
<p>Relativo: <em>il più / il meno</em> + adjetivo: <em>il ristorante più caro della città</em>. Absoluto: <strong>-issimo</strong>: <em>buonissimo, carissimo</em>.</p>
${tbl([['buono', 'migliore', 'il migliore'], ['cattivo', 'peggiore', 'il peggiore'], ['grande', 'maggiore', 'il maggiore'], ['piccolo', 'minore', 'il minore']])}
<div class="tip"><em>migliore</em> es adjetivo (mejor que algo); <em>meglio</em> es adverbio (hacer algo mejor): <em>Parli meglio di me.</em></div>`,
      vocab: [
        ['caro', 'caro'],
        ['veloce', 'rápido'],
        ['lento', 'lento'],
        ['giovane', 'joven'],
        ['vecchio', 'viejo'],
        ['migliore', 'mejor'],
        ['peggiore', 'peor'],
        ['più', 'más'],
        ['meno', 'menos'],
        ['il migliore', 'el mejor'],
      ],
      sentences: [
        ["Il treno è più veloce dell'autobus.", 'El tren es más rápido que el colectivo.'],
        ['Questa pizza è buonissima!', '¡Esta pizza está riquísima!'],
        ['È il ristorante più caro della città.', 'Es el restaurante más caro de la ciudad.'],
      ],
      cloze: [
        ['Roma è più grande ___ Firenze.', 'di', ['di', 'che', 'come']],
        ['È più facile parlare ___ scrivere.', 'che', ['che', 'di', 'come']],
        ['Questo vino è ___ di quello.', 'migliore', ['migliore', 'meglio', 'bene']],
      ],
    },
    {
      id: 'a2-5',
      title: 'Las tareas de la casa',
      topic: 'El imperativo',
      grammar: `
<h3>El imperativo</h3>
${tbl([['', 'parlare', 'prendere', 'sentire'], ['tu', 'parla!', 'prendi!', 'senti!'], ['noi', 'parliamo!', 'prendiamo!', 'sentiamo!'], ['voi', 'parlate!', 'prendete!', 'sentite!'], ['Lei', 'parli!', 'prenda!', 'senta!']], true)}
<div class="tip">Negativo con <em>tu</em>: <strong>non</strong> + infinitivo: <em>Non dimenticare!</em> Con las demás personas, <em>non</em> + imperativo: <em>Non dimenticate!</em></div>
<p>Irregulares con <em>tu</em>: <em>fa', va', da', sta', di'</em>. Los pronombres se pegan al final: <em>Aiutami! Dimmi!</em></p>`,
      vocab: [
        ['pulire', 'limpiar'],
        ['riordinare', 'ordenar'],
        ['lavare i piatti', 'lavar los platos'],
        ['la cucina', 'la cocina'],
        ['il bagno', 'el baño'],
        ['la camera', 'la habitación'],
        ['i piatti', 'los platos'],
        ['il bucato', 'la ropa para lavar'],
        ['dimenticare', 'olvidar'],
        ['adesso', 'ahora'],
      ],
      sentences: [
        ['Riordina la tua camera, per favore!', '¡Ordená tu habitación, por favor!'],
        ['Non dimenticare le chiavi!', '¡No te olvides las llaves!'],
        ['Pulisca il bagno, per favore!', '¡Limpie el baño, por favor!'],
      ],
      cloze: [
        ['Marco, non ___ la porta aperta!', 'lasciare', ['lasciare', 'lasci', 'lascia']],
        ['Ragazzi, ___ silenzio!', 'fate', ['fate', 'fanno', 'fai']],
        ['Signora, ___ pure!', 'entri', ['entri', 'entra', 'entrate']],
      ],
    },
  ]);

  add('b1', [
    {
      id: 'b1-4',
      title: 'Regalos y favores',
      topic: 'Pronombres directos e indirectos',
      grammar: `
<h3>Pronombres de objeto</h3>
${tbl([['', 'directo', 'indirecto'], ['io', 'mi', 'mi'], ['tu', 'ti', 'ti'], ['lui', 'lo', 'gli'], ['lei / Lei', 'la / La', 'le / Le'], ['noi', 'ci', 'ci'], ['voi', 'vi', 'vi'], ['loro', 'li (m.) / le (f.)', 'gli']], true)}
<p>Van delante del verbo conjugado: <em>Lo compro. Gli telefono.</em></p>
<div class="tip">En el passato prossimo, el participio concuerda con <em>lo, la, li, le</em>: <em>Le chiavi? Le ho prese io.</em></div>
<p>Atención a los verbos que no coinciden con el español: <em>telefonare a qualcuno</em> es indirecto (<em>gli telefono</em>) y <em>aiutare qualcuno</em> es directo (<em>lo aiuto</em>).</p>`,
      vocab: [
        ['il regalo', 'el regalo'],
        ['regalare', 'regalar'],
        ['prestare', 'prestar'],
        ['chiedere', 'pedir, preguntar'],
        ['rispondere', 'responder'],
        ['telefonare', 'llamar por teléfono'],
        ['invitare', 'invitar'],
        ['ringraziare', 'agradecer'],
        ['il compleanno', 'el cumpleaños'],
        ['la festa', 'la fiesta'],
      ],
      sentences: [
        ['Le ho regalato un libro.', 'Le regalé un libro.'],
        ['Domani ti telefono.', 'Mañana te llamo.'],
        ['Li inviterò alla mia festa.', 'Los voy a invitar a mi fiesta.'],
      ],
      cloze: [
        ['Conosci Anna? Sì, ___ conosco bene.', 'la', ['la', 'le', 'gli']],
        ['Telefoni a Luca? Sì, ___ telefono stasera.', 'gli', ['gli', 'lo', 'le']],
        ['Le chiavi? Le ho ___ io.', 'prese', ['prese', 'preso', 'presi']],
      ],
    },
    {
      id: 'b1-5',
      title: 'Proyectos',
      topic: 'stare + gerundio y stare per',
      grammar: `
<h3><em>stare</em> + gerundio</h3>
<p>Una acción en desarrollo, como «estar + -ndo»: <em>Sto lavorando.</em></p>
${tbl([['-are', '-ando', 'parlare → parlando'], ['-ere', '-endo', 'leggere → leggendo'], ['-ire', '-endo', 'dormire → dormendo']])}
<div class="tip">Gerundios irregulares: <em>fare → facendo, dire → dicendo, bere → bevendo</em>.</div>
<h3><em>stare per</em> + infinitivo</h3>
<p>Algo que está a punto de pasar: <em>Il treno sta per partire</em> (el tren está por salir).</p>
<p>Para planes también se usa el presente con una expresión de tiempo, o <em>avere intenzione di</em>: <em>Ho intenzione di cambiare lavoro.</em></p>`,
      vocab: [
        ['il progetto', 'el proyecto'],
        ['il futuro', 'el futuro'],
        ["l'anno prossimo", 'el año que viene'],
        ['presto', 'pronto'],
        ['sperare', 'esperar (tener esperanza)'],
        ['risparmiare', 'ahorrar'],
        ["l'obiettivo", 'la meta'],
        ['raggiungere', 'alcanzar'],
        ['il sogno', 'el sueño'],
        ['immaginare', 'imaginar'],
      ],
      sentences: [
        ["Sto studiando per l'esame.", 'Estoy estudiando para el examen.'],
        ['Il treno sta per partire.', 'El tren está por salir.'],
        ['Spero di raggiungere il mio obiettivo.', 'Espero alcanzar mi meta.'],
      ],
      cloze: [
        ['Cosa stai ___?', 'facendo', ['facendo', 'fando', 'fatto']],
        ['Il film sta ___ cominciare.', 'per', ['per', 'a', 'di']],
        ['I bambini stanno ___.', 'dormendo', ['dormendo', 'dormando', 'dormito']],
      ],
    },
  ]);

  add('b2', [
    {
      id: 'b2-4',
      title: 'Argumentar',
      topic: 'Conectores y congiuntivo',
      grammar: `
<h3>Conectores frecuentes</h3>
${tbl([['quindi, perciò', 'por eso, entonces'], ['inoltre', 'además'], ['tuttavia', 'sin embargo'], ['invece di + infinitivo', 'en lugar de'], ['sia … che', 'tanto… como'], ['né … né', 'ni… ni']])}
<h3>Conectores que piden congiuntivo</h3>
<p><strong>purché</strong> (siempre que), <strong>a meno che (non)</strong> (a menos que), <strong>nonostante</strong> (a pesar de que) y <strong>affinché</strong> (para que) exigen congiuntivo.</p>
<p class="ex">Vengo, purché tu mi aspetti.</p>
<p class="ex">Esco, a meno che non piova.</p>
<div class="tip">Con <em>né … né</em> delante del verbo no hace falta <em>non</em>: <em>Né Marco né Luca sono venuti.</em> Si va después, sí: <em>Non bevo né caffè né tè.</em></div>`,
      vocab: [
        ['quindi', 'entonces, por lo tanto'],
        ['inoltre', 'además'],
        ['tuttavia', 'sin embargo'],
        ['perciò', 'por eso'],
        ['invece di', 'en lugar de'],
        ['sia … che', 'tanto… como'],
        ['né … né', 'ni… ni'],
        ['nonostante', 'a pesar de (que)'],
        ['purché', 'siempre que'],
        ['a meno che', 'a menos que'],
      ],
      sentences: [
        ['Parla sia inglese che tedesco.', 'Habla tanto inglés como alemán.'],
        ['Esco, a meno che non piova.', 'Salgo, a menos que llueva.'],
        ['Nonostante sia tardi, continuo a lavorare.', 'A pesar de que es tarde, sigo trabajando.'],
      ],
      cloze: [
        ['Ti presto la macchina, purché me la ___ domani.', 'restituisca', ['restituisca', 'restituisci', 'restituirai']],
        ['Non bevo né caffè ___ tè.', 'né', ['né', 'o', 'e']],
        ['Era stanco, ___ è andato a dormire.', 'quindi', ['quindi', 'tuttavia', 'purché']],
      ],
    },
  ]);

  add('c1', [
    {
      id: 'c1-4',
      title: 'Narrar el pasado',
      topic: 'El passato remoto',
      grammar: `
<h3>El passato remoto</h3>
<p>Es el pasado de la narración escrita, la historia y la literatura. En el habla del norte de Italia casi no se usa; en el sur es común también en la conversación.</p>
${tbl([['', 'parlare', 'credere', 'partire'], ['io', 'parlai', 'credei', 'partii'], ['tu', 'parlasti', 'credesti', 'partisti'], ['lui / lei', 'parlò', 'credé', 'partì'], ['noi', 'parlammo', 'credemmo', 'partimmo'], ['voi', 'parlaste', 'credeste', 'partiste'], ['loro', 'parlarono', 'crederono', 'partirono']], true)}
<h3>Irregulares muy usados</h3>
${tbl([['essere', 'fui, fosti, fu, fummo, foste, furono'], ['avere', 'ebbi, avesti, ebbe, avemmo, aveste, ebbero'], ['fare', 'feci, facesti, fece, facemmo, faceste, fecero'], ['nascere', 'nacqui, nascesti, nacque…'], ['scrivere', 'scrissi, scrivesti, scrisse…'], ['vivere', 'vissi, vivesti, visse…']])}
<div class="tip">Muchos irregulares siguen el patrón 1-3-3: son irregulares en <em>io</em>, <em>lui/lei</em> y <em>loro</em> (<em>scrissi, scrisse, scrissero</em>) y regulares en el resto.</div>`,
      vocab: [
        ['fu', 'fue, estuvo'],
        ['ebbe', 'tuvo'],
        ['nacque', 'nació'],
        ['morì', 'murió'],
        ['visse', 'vivió'],
        ['scrisse', 'escribió'],
        ['fece', 'hizo'],
        ['venne', 'vino'],
        ['disse', 'dijo'],
        ['andò', 'fue (de ir)'],
      ],
      sentences: [
        ['Dante nacque a Firenze nel 1265.', 'Dante nació en Florencia en 1265.'],
        ['Scrisse la Divina Commedia.', 'Escribió la Divina Comedia.'],
        ['Visse in esilio per molti anni.', 'Vivió en el exilio durante muchos años.'],
      ],
      cloze: [
        ['Garibaldi ___ nel 1807.', 'nacque', ['nacque', 'nascé', 'è nascito']],
        ['Leonardo ___ la Gioconda.', 'dipinse', ['dipinse', 'dipingé', 'dipinto']],
        ['I Romani ___ molte strade.', 'costruirono', ['costruirono', 'costruirò', 'costruiscono']],
      ],
    },
  ]);

  /* ============================ VERBOS ============================
     [infinitivo, traducción, [io, tu, lui/lei, noi, voi, loro], participio, auxiliar] */
  c.pron = ['io', 'tu', 'lui / lei', 'noi', 'voi', 'loro'];
  c.perfName = 'passato prossimo';
  c.aux = { avere: 'ho', essere: 'sono' };
  c.verbs = [
    ['essere', 'ser, estar', ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'], 'stato', 'essere'],
    ['avere', 'tener', ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'], 'avuto', 'avere'],
    ['fare', 'hacer', ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'], 'fatto', 'avere'],
    ['andare', 'ir', ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'], 'andato', 'essere'],
    ['venire', 'venir', ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'], 'venuto', 'essere'],
    ['stare', 'estar, quedarse', ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'], 'stato', 'essere'],
    ['dire', 'decir', ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'], 'detto', 'avere'],
    ['dare', 'dar', ['do', 'dai', 'dà', 'diamo', 'date', 'danno'], 'dato', 'avere'],
    ['potere', 'poder', ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'], 'potuto', 'avere'],
    ['volere', 'querer', ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'], 'voluto', 'avere'],
    ['dovere', 'deber, tener que', ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'], 'dovuto', 'avere'],
    ['sapere', 'saber', ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'], 'saputo', 'avere'],
    ['uscire', 'salir', ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'], 'uscito', 'essere'],
    ['partire', 'partir', ['parto', 'parti', 'parte', 'partiamo', 'partite', 'partono'], 'partito', 'essere'],
    ['bere', 'beber', ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'], 'bevuto', 'avere'],
    ['parlare', 'hablar', ['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'], 'parlato', 'avere'],
    ['mangiare', 'comer', ['mangio', 'mangi', 'mangia', 'mangiamo', 'mangiate', 'mangiano'], 'mangiato', 'avere'],
    ['lavorare', 'trabajar', ['lavoro', 'lavori', 'lavora', 'lavoriamo', 'lavorate', 'lavorano'], 'lavorato', 'avere'],
    ['abitare', 'vivir (residir)', ['abito', 'abiti', 'abita', 'abitiamo', 'abitate', 'abitano'], 'abitato', 'avere'],
    ['cercare', 'buscar', ['cerco', 'cerchi', 'cerca', 'cerchiamo', 'cercate', 'cercano'], 'cercato', 'avere'],
    ['pagare', 'pagar', ['pago', 'paghi', 'paga', 'paghiamo', 'pagate', 'pagano'], 'pagato', 'avere'],
    ['prendere', 'tomar', ['prendo', 'prendi', 'prende', 'prendiamo', 'prendete', 'prendono'], 'preso', 'avere'],
    ['vedere', 'ver', ['vedo', 'vedi', 'vede', 'vediamo', 'vedete', 'vedono'], 'visto', 'avere'],
    ['leggere', 'leer', ['leggo', 'leggi', 'legge', 'leggiamo', 'leggete', 'leggono'], 'letto', 'avere'],
    ['scrivere', 'escribir', ['scrivo', 'scrivi', 'scrive', 'scriviamo', 'scrivete', 'scrivono'], 'scritto', 'avere'],
    ['mettere', 'poner', ['metto', 'metti', 'mette', 'mettiamo', 'mettete', 'mettono'], 'messo', 'avere'],
    ['conoscere', 'conocer', ['conosco', 'conosci', 'conosce', 'conosciamo', 'conoscete', 'conoscono'], 'conosciuto', 'avere'],
    ['dormire', 'dormir', ['dormo', 'dormi', 'dorme', 'dormiamo', 'dormite', 'dormono'], 'dormito', 'avere'],
    ['finire', 'terminar', ['finisco', 'finisci', 'finisce', 'finiamo', 'finite', 'finiscono'], 'finito', 'avere'],
    ['capire', 'entender', ['capisco', 'capisci', 'capisce', 'capiamo', 'capite', 'capiscono'], 'capito', 'avere'],
  ];

  /* ============================ TEMAS ============================ */
  c.topics = [
    {
      id: 't-colores', title: 'Colores', level: 'a1',
      note: 'Los colores concuerdan con el sustantivo: <em>una macchina rossa, due macchine rosse</em>. Algunos no cambian nunca: <em>blu, rosa, viola</em>.',
      vocab: [['rosso', 'rojo'], ['blu', 'azul'], ['verde', 'verde'], ['giallo', 'amarillo'], ['nero', 'negro'], ['bianco', 'blanco'], ['grigio', 'gris'], ['marrone', 'marrón'], ['arancione', 'naranja (color)'], ['rosa', 'rosa (color)'], ['viola', 'violeta'], ['azzurro', 'celeste'], ['colorato', 'colorido'], ['il colore', 'el color']],
      sentences: [['La mia macchina è rossa.', 'Mi auto es rojo.'], ['Di che colore è il tuo maglione?', '¿De qué color es tu pulóver?'], ['Oggi il cielo è grigio.', 'Hoy el cielo está gris.']],
    },
    {
      id: 't-calendario', title: 'Días y estaciones', level: 'a1',
      note: 'Los días y los meses van en minúscula. Con artículo, el día indica costumbre: <em>il lunedì</em> = los lunes.',
      vocab: [['lunedì', 'lunes'], ['martedì', 'martes'], ['mercoledì', 'miércoles'], ['giovedì', 'jueves'], ['venerdì', 'viernes'], ['sabato', 'sábado'], ['domenica', 'domingo'], ['il mese', 'el mes'], ["l'anno", 'el año'], ['la primavera', 'la primavera'], ["l'estate", 'el verano'], ["l'autunno", 'el otoño'], ["l'inverno", 'el invierno'], ['il fine settimana', 'el fin de semana']],
      sentences: [['Il lunedì lavoro.', 'Los lunes trabajo.'], ["D'estate andiamo al mare.", 'En verano vamos al mar.'], ['Il mio compleanno è a maggio.', 'Mi cumpleaños es en mayo.']],
    },
    {
      id: 't-ropa', title: 'La ropa', level: 'a1',
      vocab: [['la camicia', 'la camisa'], ['i pantaloni', 'el pantalón'], ['la gonna', 'la pollera'], ['il vestito', 'el vestido'], ['la giacca', 'la campera'], ['il cappotto', 'el abrigo'], ['il maglione', 'el pulóver'], ['le scarpe', 'los zapatos'], ['i calzini', 'las medias'], ['il cappello', 'el sombrero'], ['il berretto', 'el gorro'], ['la maglietta', 'la remera'], ['la cintura', 'el cinturón'], ['indossare', 'llevar puesto']],
      sentences: [['Oggi indosso una giacca.', 'Hoy llevo una campera.'], ['Le scarpe sono troppo piccole.', 'Los zapatos son demasiado chicos.'], ['Quanto costa il vestito?', '¿Cuánto cuesta el vestido?']],
    },
    {
      id: 't-cuerpo', title: 'El cuerpo', level: 'a1',
      note: 'Algunos plurales son irregulares: <em>la mano → le mani</em>, <em>il braccio → le braccia</em>, <em>il dito → le dita</em>.',
      vocab: [['la mano', 'la mano'], ['il piede', 'el pie'], ["l'occhio", 'el ojo'], ["l'orecchio", 'la oreja'], ['la bocca', 'la boca'], ['il naso', 'la nariz'], ['il braccio', 'el brazo'], ['la gamba', 'la pierna'], ['i capelli', 'el pelo'], ['il dente', 'el diente'], ['il cuore', 'el corazón'], ['il dito', 'el dedo'], ['la faccia', 'la cara'], ['il collo', 'el cuello']],
      sentences: [['Mi lavo le mani.', 'Me lavo las manos.'], ['Ha gli occhi azzurri.', 'Tiene ojos celestes.'], ['Mi fa male il piede.', 'Me duele el pie.']],
    },
    {
      id: 't-casa', title: 'La casa', level: 'a1',
      vocab: [['il tavolo', 'la mesa'], ['la sedia', 'la silla'], ['il letto', 'la cama'], ["l'armadio", 'el armario'], ['la finestra', 'la ventana'], ['la porta', 'la puerta'], ['la lampada', 'la lámpara'], ['il divano', 'el sillón'], ['lo scaffale', 'el estante'], ['la scala', 'la escalera'], ['il giardino', 'el jardín'], ['lo specchio', 'el espejo'], ["l'appartamento", 'el departamento'], ['il frigorifero', 'la heladera']],
      sentences: [['Il libro è sul tavolo.', 'El libro está sobre la mesa.'], ['Chiudi la finestra, per favore!', '¡Cerrá la ventana, por favor!'], ['Il nostro appartamento ha tre stanze.', 'Nuestro departamento tiene tres ambientes.']],
    },
    {
      id: 't-animales', title: 'Animales', level: 'a1',
      vocab: [['il cane', 'el perro'], ['il gatto', 'el gato'], ['il cavallo', 'el caballo'], ['la mucca', 'la vaca'], ['il maiale', 'el cerdo'], ["l'uccello", 'el pájaro'], ['il pesce', 'el pez'], ['il topo', 'el ratón'], ['il coniglio', 'el conejo'], ['la pecora', 'la oveja'], ["l'orso", 'el oso'], ['il leone', 'el león'], ['la gallina', 'la gallina'], ["l'animale", 'el animal']],
      sentences: [['Abbiamo un cane e due gatti.', 'Tenemos un perro y dos gatos.'], ["L'uccello canta in giardino.", 'El pájaro canta en el jardín.'], ['Qual è il tuo animale preferito?', '¿Cuál es tu animal preferido?']],
    },
    {
      id: 't-frutas', title: 'Frutas y verduras', level: 'a1',
      vocab: [['la banana', 'la banana'], ["l'arancia", 'la naranja'], ['la fragola', 'la frutilla'], ['la pera', 'la pera'], ['il limone', 'el limón'], ["l'uva", 'la uva'], ['la patata', 'la papa'], ['il pomodoro', 'el tomate'], ['la cipolla', 'la cebolla'], ['la carota', 'la zanahoria'], ["l'insalata", 'la lechuga'], ['il cetriolo', 'el pepino'], ['la frutta', 'la fruta'], ['la verdura', 'la verdura']],
      sentences: [['Mangio frutta ogni giorno.', 'Como fruta todos los días.'], ['Le fragole sono molto dolci.', 'Las frutillas están muy dulces.'], ['Ci servono patate e cipolle.', 'Necesitamos papas y cebollas.']],
    },
    {
      id: 't-adjetivos', title: 'Adjetivos opuestos', level: 'a1',
      note: 'Los adjetivos en <em>-o</em> tienen cuatro formas (<em>piccolo, piccola, piccoli, piccole</em>); los terminados en <em>-e</em>, dos (<em>grande, grandi</em>).',
      vocab: [['grande', 'grande'], ['piccolo', 'chico'], ['lungo', 'largo'], ['corto', 'corto'], ['nuovo', 'nuevo'], ['chiaro', 'claro'], ['scuro', 'oscuro'], ['leggero', 'liviano'], ['pesante', 'pesado'], ['caldo', 'caliente, cálido'], ['freddo', 'frío'], ['pieno', 'lleno'], ['vuoto', 'vacío'], ['bello', 'lindo']],
      sentences: [['La stanza è piccola ma luminosa.', 'La habitación es chica pero luminosa.'], ['La valigia è molto pesante.', 'La valija es muy pesada.'], ['La bottiglia è vuota.', 'La botella está vacía.']],
    },
    {
      id: 't-preguntas', title: 'Preguntas y palabras útiles', level: 'a1',
      vocab: [['chi', 'quién'], ['che cosa', 'qué'], ['dove', 'dónde'], ['da dove', 'de dónde'], ['quando', 'cuándo'], ['perché', 'por qué, porque'], ['come', 'cómo'], ['quanto', 'cuánto'], ['quale', 'cuál'], ['e', 'y'], ['ma', 'pero'], ['o', 'o'], ['anche', 'también'], ['allora', 'entonces']],
      sentences: [['Dove abiti?', '¿Dónde vivís?'], ["Perché studi l'italiano?", '¿Por qué estudiás italiano?'], ['Quando comincia il film?', '¿Cuándo empieza la película?']],
    },
    {
      id: 't-clima', title: 'El clima', level: 'a2',
      note: 'Para hablar del clima se usa <em>fare</em>: <em>Fa caldo, fa freddo, fa bel tempo</em>. Y para fenómenos, verbos sin sujeto: <em>piove, nevica</em>.',
      vocab: [['il tempo', 'el tiempo (clima)'], ['il sole', 'el sol'], ['la pioggia', 'la lluvia'], ['la neve', 'la nieve'], ['il vento', 'el viento'], ['la nuvola', 'la nube'], ['il temporale', 'la tormenta'], ['la nebbia', 'la niebla'], ['la temperatura', 'la temperatura'], ['piovere', 'llover'], ['nevicare', 'nevar'], ['soleggiato', 'soleado'], ['nuvoloso', 'nublado'], ['il grado', 'el grado']],
      sentences: [['Che tempo fa oggi?', '¿Qué tiempo hace hoy?'], ['Piove da tre giorni.', 'Llueve desde hace tres días.'], ['Domani ci sarà il sole.', 'Mañana va a haber sol.']],
    },
    {
      id: 't-profesiones', title: 'Profesiones', level: 'a2',
      note: 'Para decir la profesión se usa <em>fare</em> + artículo o <em>essere</em> sin artículo: <em>Faccio l\'ingegnere</em> = <em>Sono ingegnere</em>.',
      vocab: [['il medico', 'el médico'], ['la dottoressa', 'la médica'], ["l'insegnante", 'el docente'], ['il cuoco', 'el cocinero'], ['il cameriere', 'el mozo'], ['il commesso', 'el vendedor'], ["l'ingegnere", 'el ingeniero'], ["l'avvocato", 'el abogado'], ['il poliziotto', 'el policía'], ["l'infermiera", 'la enfermera'], ['il farmacista', 'el farmacéutico'], ['il programmatore', 'el programador'], ["l'idraulico", 'el plomero'], ["l'architetto", 'el arquitecto']],
      sentences: [['Che lavoro fa?', '¿A qué se dedica?'], ['Mia sorella fa la dottoressa.', 'Mi hermana es médica.'], ['Lavora come cameriere in un bar.', 'Trabaja de mozo en un bar.']],
    },
    {
      id: 't-transporte', title: 'Transporte', level: 'a2',
      vocab: [['la macchina', 'el auto'], ['il treno', 'el tren'], ['la bicicletta', 'la bicicleta'], ['la metropolitana', 'el subte'], ["l'aereo", 'el avión'], ['la nave', 'el barco'], ['il taxi', 'el taxi'], ['il tram', 'el tranvía'], ['la moto', 'la moto'], ['il semaforo', 'el semáforo'], ["l'incrocio", 'el cruce'], ['il parcheggio', 'el estacionamiento'], ['a piedi', 'a pie'], ['cambiare treno', 'hacer transbordo']],
      sentences: [['Vado al lavoro in bicicletta.', 'Voy al trabajo en bicicleta.'], ['Dove devo cambiare treno?', '¿Dónde tengo que hacer transbordo?'], ["L'aereo atterra alle otto.", 'El avión aterriza a las ocho.']],
    },
    {
      id: 't-compras', title: 'Compras y dinero', level: 'a2',
      vocab: [['i soldi', 'la plata'], ['il prezzo', 'el precio'], ['la cassa', 'la caja'], ['il negozio', 'el negocio'], ['il supermercato', 'el supermercado'], ['comprare', 'comprar'], ['vendere', 'vender'], ['pagare', 'pagar'], ['costare', 'costar'], ['lo sconto', 'el descuento'], ["l'offerta", 'la oferta'], ['lo scontrino', 'el ticket'], ['in contanti', 'en efectivo'], ['la carta', 'la tarjeta']],
      sentences: [['Posso pagare con la carta?', '¿Puedo pagar con tarjeta?'], ['È in offerta.', 'Está en oferta.'], ['Quanto costa?', '¿Cuánto cuesta?']],
    },
    {
      id: 't-ocio', title: 'Tiempo libre y deportes', level: 'a2',
      vocab: [['il calcio', 'el fútbol'], ['la piscina', 'la pileta'], ['lo sport', 'el deporte'], ['la partita', 'el partido'], ['la squadra', 'el equipo'], ['correre', 'correr'], ['fare escursioni', 'hacer senderismo'], ['il museo', 'el museo'], ['il teatro', 'el teatro'], ["l'hobby", 'el pasatiempo'], ['la gita', 'la excursión'], ['fare foto', 'sacar fotos'], ['dipingere', 'pintar'], ['il tempo libero', 'el tiempo libre']],
      sentences: [['Nel tempo libero faccio escursioni.', 'En mi tiempo libre hago senderismo.'], ['Quale squadra ha vinto?', '¿Qué equipo ganó?'], ['Domenica facciamo una gita.', 'El domingo hacemos una excursión.']],
    },
    {
      id: 't-emociones', title: 'Emociones y carácter', level: 'b1',
      vocab: [['felice', 'feliz'], ['triste', 'triste'], ['arrabbiato', 'enojado'], ['stanco', 'cansado'], ['nervoso', 'nervioso'], ['orgoglioso', 'orgulloso'], ['sorpreso', 'sorprendido'], ['deluso', 'decepcionado'], ['la paura', 'el miedo'], ['la gioia', 'la alegría'], ['gentile', 'amable'], ['onesto', 'honesto'], ['paziente', 'paciente'], ['timido', 'tímido']],
      sentences: [['Sono orgoglioso di te.', 'Estoy orgulloso de vos.'], ['Hai paura dei cani?', '¿Te dan miedo los perros?'], ['Era molto delusa.', 'Estaba muy decepcionada.']],
    },
    {
      id: 't-naturaleza', title: 'Naturaleza', level: 'b1',
      vocab: [['la montagna', 'la montaña'], ['il lago', 'el lago'], ['il mare', 'el mar'], ['il fiume', 'el río'], ['il bosco', 'el bosque'], ['la spiaggia', 'la playa'], ["l'isola", 'la isla'], ["l'albero", 'el árbol'], ['il fiore', 'la flor'], ['il campo', 'el campo'], ['il cielo', 'el cielo'], ['la stella', 'la estrella'], ['il paesaggio', 'el paisaje'], ['il deserto', 'el desierto']],
      sentences: [['Ci piace camminare in montagna.', 'Nos gusta caminar por la montaña.'], ["D'estate il lago è caldo.", 'En verano el lago está cálido.'], ['Di notte si vedono molte stelle.', 'De noche se ven muchas estrellas.']],
    },
    {
      id: 't-tecnologia', title: 'Tecnología', level: 'b1',
      vocab: [['il cellulare', 'el celular'], ['il computer', 'la computadora'], ['la password', 'la contraseña'], ['il file', 'el archivo'], ['scaricare', 'descargar'], ['caricare', 'subir (un archivo)'], ['salvare', 'guardar'], ['cancellare', 'borrar'], ['lo schermo', 'la pantalla'], ['la tastiera', 'el teclado'], ['la rete', 'la red'], ["l'email", 'el correo electrónico'], ['il caricabatterie', 'el cargador'], ["l'app", 'la aplicación']],
      sentences: [['Ho dimenticato la password.', 'Me olvidé la contraseña.'], ['Hai salvato il file?', '¿Guardaste el archivo?'], ['Ho la batteria scarica.', 'Se me terminó la batería.']],
    },
  ];
})();
