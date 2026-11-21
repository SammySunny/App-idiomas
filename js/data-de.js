/* Curso de alemán — contenido didáctico (A1 → C1).
   Formato de cada unidad:
   - vocab:     [palabra, traducción]
   - sentences: [frase, traducción]          → ejercicios de ordenar
   - cloze:     [frase con ___, respuesta, [opciones]] → ejercicios de completar */
(function () {
  const tbl = (rows, head) =>
    `<div class="table-wrap"><table class="conj${head ? ' grid' : ''}">` +
    rows.map((r, i) => '<tr>' + r.map(c => (head && i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`)).join('') + '</tr>').join('') +
    '</table></div>';

  window.COURSES = window.COURSES || {};
  window.COURSES.de = {
    code: 'de',
    name: 'Alemán',
    native: 'Deutsch',
    hello: 'Hallo',
    tts: 'de-DE',
    color: 'peach',
    chars: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
    levels: [
      /* ============================ A1 ============================ */
      {
        id: 'a1',
        units: [
          {
            id: 'a1-1',
            title: 'Saludos y presentaciones',
            topic: 'El verbo sein y el trato du o Sie',
            grammar: `
<h3>El verbo <em>sein</em> (ser / estar)</h3>
<p>En alemán un solo verbo, <strong>sein</strong>, cubre «ser» y «estar».</p>
${tbl([['ich', 'bin', 'yo soy'], ['du', 'bist', 'vos sos'], ['er / sie / es', 'ist', 'él / ella es'], ['wir', 'sind', 'nosotros somos'], ['ihr', 'seid', 'ustedes son (informal)'], ['sie / Sie', 'sind', 'ellos son / usted es']])}
<div class="tip"><b>du</b> es informal, como «vos». <b>Sie</b>, siempre con mayúscula, es formal, como «usted», y se conjuga igual que la 3.ª persona del plural.</div>
<h3>Los sustantivos llevan mayúscula</h3>
<p>Todos los sustantivos se escriben con mayúscula inicial, estén donde estén: <em>der Tag, die Frau, das Haus</em>.</p>
<h3>Pronunciación básica</h3>
${tbl([['ei', 'suena «ai»', 'mein, nein'], ['ie', '«i» larga', 'Sie, viel'], ['eu / äu', 'suena «oi»', 'heute, Häuser'], ['sch', 'suena «sh»', 'Schule'], ['w', 'suena «v»', 'Wasser'], ['z', 'suena «ts»', 'zehn'], ['ß', 'suena «ss»', 'heißen']])}`,
            vocab: [
              ['Hallo', 'hola'],
              ['Guten Morgen', 'buenos días'],
              ['Guten Tag', 'buen día (formal)'],
              ['Guten Abend', 'buenas noches (al llegar)'],
              ['Tschüss', 'chau'],
              ['Auf Wiedersehen', 'adiós (formal)'],
              ['Danke', 'gracias'],
              ['Bitte', 'por favor / de nada'],
              ['Entschuldigung', 'perdón / disculpe'],
              ['Ja', 'sí'],
            ],
            sentences: [
              ['Ich bin Anna.', 'Soy Anna.'],
              ['Wie heißt du?', '¿Cómo te llamás?'],
              ['Ich komme aus Argentinien.', 'Soy de Argentina.'],
            ],
            cloze: [
              ['Ich ___ müde.', 'bin', ['bin', 'bist', 'ist']],
              ['Du ___ mein Freund.', 'bist', ['bist', 'bin', 'sind']],
              ['Wir ___ in Berlin.', 'sind', ['sind', 'seid', 'ist']],
            ],
          },
          {
            id: 'a1-2',
            title: 'La familia',
            topic: 'Artículos der, die, das y el verbo haben',
            grammar: `
<h3>Los tres géneros</h3>
<p>Cada sustantivo tiene género: <strong>der</strong> (masculino), <strong>die</strong> (femenino) y <strong>das</strong> (neutro). En plural siempre es <strong>die</strong>. El género no siempre coincide con el español: <em>das Mädchen</em> (la chica) es neutro.</p>
<div class="tip">Aprendé cada sustantivo junto con su artículo. En esta app los artículos tienen color: <span class="art g-m">der</span>, <span class="art g-f">die</span>, <span class="art g-n">das</span> y <span class="art g-pl">die</span> plural.</div>
${tbl([['', 'definido', 'indefinido'], ['masculino', 'der Vater', 'ein Vater'], ['femenino', 'die Mutter', 'eine Mutter'], ['neutro', 'das Kind', 'ein Kind'], ['plural', 'die Eltern', '—']], true)}
<h3>El verbo <em>haben</em> (tener)</h3>
${tbl([['ich', 'habe'], ['du', 'hast'], ['er / sie / es', 'hat'], ['wir', 'haben'], ['ihr', 'habt'], ['sie / Sie', 'haben']])}
<h3>Posesivos</h3>
<p><em>mein</em> (mi) va con masculino y neutro; <em>meine</em> con femenino y plural: <em>mein Vater, meine Mutter, meine Eltern</em>. Igual funcionan <em>dein</em> (tu), <em>sein</em> (su, de él) e <em>ihr</em> (su, de ella).</p>
<p class="ex">Ich habe einen Bruder. — con <em>haben</em>, el masculino pasa a <em>einen</em> (acusativo, lo ves en la unidad 4).</p>`,
            vocab: [
              ['die Mutter', 'la madre'],
              ['der Vater', 'el padre'],
              ['die Schwester', 'la hermana'],
              ['der Bruder', 'el hermano'],
              ['das Kind', 'el niño / la niña'],
              ['die Eltern', 'los padres'],
              ['die Familie', 'la familia'],
              ['der Freund', 'el amigo'],
              ['die Freundin', 'la amiga'],
              ['das Haus', 'la casa'],
            ],
            sentences: [
              ['Ich habe einen Bruder.', 'Tengo un hermano.'],
              ['Meine Mutter heißt Maria.', 'Mi madre se llama María.'],
              ['Das ist mein Vater.', 'Este es mi padre.'],
            ],
            cloze: [
              ['Er ___ zwei Schwestern.', 'hat', ['hat', 'habe', 'hast']],
              ['___ Haus ist groß.', 'Das', ['Das', 'Der', 'Die']],
              ['___ Mutter ist nett.', 'Meine', ['Meine', 'Mein', 'Meinen']],
            ],
          },
          {
            id: 'a1-3',
            title: 'Números y la hora',
            topic: 'Contar, decir la hora y la edad',
            grammar: `
<h3>Los números</h3>
${tbl([['0', 'null', '10', 'zehn'], ['1', 'eins', '11', 'elf'], ['2', 'zwei', '12', 'zwölf'], ['3', 'drei', '13', 'dreizehn'], ['4', 'vier', '20', 'zwanzig'], ['5', 'fünf', '30', 'dreißig'], ['6', 'sechs', '40', 'vierzig'], ['7', 'sieben', '50', 'fünfzig'], ['8', 'acht', '100', 'hundert'], ['9', 'neun', '1000', 'tausend']])}
<div class="tip">Del 21 al 99 se dice primero la unidad: <em>einundzwanzig</em> es «uno y veinte» (21), <em>fünfundvierzig</em> es 45.</div>
<h3>La hora</h3>
<p><em>Wie spät ist es?</em> o <em>Wie viel Uhr ist es?</em> — <em>Es ist drei Uhr</em> (son las tres). Atención: <em>halb vier</em> son las tres y media, literalmente «media hacia las cuatro».</p>
<h3>La edad</h3>
<p>Se usa <em>sein</em>, no «tener»: <em>Ich bin zwanzig Jahre alt</em>.</p>`,
            vocab: [
              ['eins', 'uno'],
              ['zwei', 'dos'],
              ['drei', 'tres'],
              ['vier', 'cuatro'],
              ['fünf', 'cinco'],
              ['zehn', 'diez'],
              ['zwanzig', 'veinte'],
              ['hundert', 'cien'],
              ['die Uhr', 'el reloj / la hora'],
              ['heute', 'hoy'],
            ],
            sentences: [
              ['Es ist drei Uhr.', 'Son las tres.'],
              ['Ich bin zwanzig Jahre alt.', 'Tengo veinte años.'],
              ['Wie spät ist es?', '¿Qué hora es?'],
            ],
            cloze: [
              ['Ich bin dreißig Jahre ___.', 'alt', ['alt', 'Jahre', 'Uhr']],
              ['Es ist fünf ___.', 'Uhr', ['Uhr', 'Jahre', 'Zeit']],
              ['Drei plus vier ist ___.', 'sieben', ['sieben', 'sechs', 'acht']],
            ],
          },
          {
            id: 'a1-4',
            title: 'Comida y bebida',
            topic: 'Presente regular y acusativo con ein',
            grammar: `
<h3>Verbos regulares en presente</h3>
<p>Se quita <em>-en</em> del infinitivo y se agregan las terminaciones:</p>
${tbl([['ich', 'trinke'], ['du', 'trinkst'], ['er / sie / es', 'trinkt'], ['wir', 'trinken'], ['ihr', 'trinkt'], ['sie / Sie', 'trinken']])}
<div class="tip">Algunos verbos cambian la vocal con <em>du</em> y <em>er/sie/es</em>: <em>essen → du isst, er isst</em>; <em>nehmen → du nimmst, er nimmt</em>.</div>
<h3>El acusativo con artículo indefinido</h3>
<p>Cuando el sustantivo es objeto directo, solo cambia el masculino: <strong>ein → einen</strong>.</p>
${tbl([['der Apfel', 'Ich esse einen Apfel.'], ['die Banane', 'Ich esse eine Banane.'], ['das Brot', 'Ich esse ein Brot.']])}
<h3>Pedir con cortesía</h3>
<p><em>Ich möchte…</em> significa «quisiera…»: <em>Ich möchte einen Kaffee, bitte.</em></p>`,
            vocab: [
              ['das Wasser', 'el agua'],
              ['der Kaffee', 'el café'],
              ['das Brot', 'el pan'],
              ['der Käse', 'el queso'],
              ['der Apfel', 'la manzana'],
              ['die Milch', 'la leche'],
              ['das Bier', 'la cerveza'],
              ['essen', 'comer'],
              ['trinken', 'beber'],
              ['lecker', 'rico, sabroso'],
            ],
            sentences: [
              ['Ich möchte einen Kaffee, bitte.', 'Quisiera un café, por favor.'],
              ['Wir essen Brot und Käse.', 'Comemos pan y queso.'],
              ['Das ist sehr lecker!', '¡Esto está muy rico!'],
            ],
            cloze: [
              ['Du ___ Wasser.', 'trinkst', ['trinkst', 'trinke', 'trinkt']],
              ['Ich möchte ___ Apfel.', 'einen', ['einen', 'eine', 'ein']],
              ['Er ___ einen Apfel.', 'isst', ['isst', 'esst', 'essen']],
            ],
          },
        ],
      },
      /* ============================ A2 ============================ */
      {
        id: 'a2',
        units: [
          {
            id: 'a2-1',
            title: 'La rutina diaria',
            topic: 'Verbos separables y reflexivos',
            grammar: `
<h3>Verbos separables</h3>
<p>Muchos verbos tienen un prefijo que se separa y se va al final de la oración.</p>
${tbl([['aufstehen', 'Ich stehe um 7 Uhr auf.'], ['einkaufen', 'Wir kaufen am Samstag ein.'], ['fernsehen', 'Er sieht am Abend fern.'], ['anrufen', 'Ich rufe dich morgen an.']])}
<h3>El verbo va en segundo lugar</h3>
<p>En la oración principal el verbo conjugado ocupa siempre la 2.ª posición. Si empezás con otro elemento, el sujeto pasa detrás del verbo:</p>
<p class="ex">Am Abend <b>sehe</b> ich fern. · Morgen <b>fahre</b> ich nach Hause.</p>
<h3>Verbos reflexivos</h3>
${tbl([['ich', 'wasche mich'], ['du', 'wäschst dich'], ['er / sie / es', 'wäscht sich'], ['wir', 'waschen uns'], ['ihr', 'wascht euch'], ['sie / Sie', 'waschen sich']])}`,
            vocab: [
              ['aufstehen', 'levantarse'],
              ['frühstücken', 'desayunar'],
              ['arbeiten', 'trabajar'],
              ['einkaufen', 'hacer las compras'],
              ['fernsehen', 'mirar televisión'],
              ['schlafen', 'dormir'],
              ['der Morgen', 'la mañana'],
              ['der Abend', 'la noche (temprano)'],
              ['immer', 'siempre'],
              ['oft', 'a menudo'],
            ],
            sentences: [
              ['Ich stehe um sieben Uhr auf.', 'Me levanto a las siete.'],
              ['Am Abend sehe ich fern.', 'A la noche miro televisión.'],
              ['Wir kaufen am Samstag ein.', 'Hacemos las compras el sábado.'],
            ],
            cloze: [
              ['Er steht früh ___.', 'auf', ['auf', 'an', 'ein']],
              ['Ich wasche ___.', 'mich', ['mich', 'dich', 'sich']],
              ['Morgen ___ ich nach Hause.', 'fahre', ['fahre', 'fahren', 'fährt']],
            ],
          },
          {
            id: 'a2-2',
            title: 'La ciudad',
            topic: 'Preposiciones con dativo',
            grammar: `
<h3>Preposiciones que siempre llevan dativo</h3>
<p><strong>aus, bei, mit, nach, seit, von, zu</strong>. El artículo cambia así:</p>
${tbl([['', 'nominativo', 'dativo', 'ejemplo'], ['masculino', 'der', 'dem', 'mit dem Bus'], ['femenino', 'die', 'der', 'mit der Bahn'], ['neutro', 'das', 'dem', 'mit dem Fahrrad'], ['plural', 'die', 'den (+n)', 'mit den Kindern']], true)}
<div class="tip">Contracciones muy usadas: <em>zu + dem = zum</em>, <em>zu + der = zur</em>, <em>von + dem = vom</em>, <em>bei + dem = beim</em>.</div>
<h3><em>Wo?</em> y <em>Wohin?</em></h3>
<p><em>Wo</em> pregunta por el lugar (¿dónde?) y <em>wohin</em> por la dirección (¿adónde?).</p>`,
            vocab: [
              ['der Bahnhof', 'la estación de tren'],
              ['die Straße', 'la calle'],
              ['die Apotheke', 'la farmacia'],
              ['das Krankenhaus', 'el hospital'],
              ['links', 'a la izquierda'],
              ['rechts', 'a la derecha'],
              ['geradeaus', 'derecho'],
              ['die Haltestelle', 'la parada'],
              ['der Bus', 'el colectivo'],
              ['weit', 'lejos'],
            ],
            sentences: [
              ['Ich fahre mit dem Bus.', 'Voy en colectivo.'],
              ['Wo ist die Apotheke?', '¿Dónde está la farmacia?'],
              ['Gehen Sie geradeaus und dann links.', 'Siga derecho y después a la izquierda.'],
            ],
            cloze: [
              ['Ich fahre mit ___ Zug.', 'dem', ['dem', 'den', 'der']],
              ['Sie wohnt bei ___ Eltern.', 'ihren', ['ihren', 'ihre', 'ihrem']],
              ['Wir gehen ___ Apotheke.', 'zur', ['zur', 'zum', 'zu die']],
            ],
          },
          {
            id: 'a2-3',
            title: 'Hablar del pasado',
            topic: 'El Perfekt con haben y sein',
            grammar: `
<h3>Cómo se forma</h3>
<p><strong>haben</strong> o <strong>sein</strong> conjugado + <strong>Partizip II</strong> al final de la oración.</p>
${tbl([['machen', 'gemacht', 'regular: ge- … -t'], ['kaufen', 'gekauft', 'regular'], ['essen', 'gegessen', 'irregular: ge- … -en'], ['sehen', 'gesehen', 'irregular'], ['fahren', 'gefahren', 'irregular'], ['einkaufen', 'eingekauft', 'separable: -ge- en el medio']])}
<h3>¿haben o sein?</h3>
<p>Se usa <strong>sein</strong> con verbos de movimiento o cambio de estado (<em>gehen, fahren, kommen, aufstehen</em>) y con <em>sein</em> y <em>bleiben</em>. Casi todos los demás usan <strong>haben</strong>.</p>
<p class="ex">Ich <b>habe</b> Pizza gegessen. · Wir <b>sind</b> nach Italien gefahren.</p>
<div class="tip">Los verbos en <em>-ieren</em> y los que tienen prefijo inseparable no llevan <em>ge-</em>: <em>studiert, besucht, verstanden</em>.</div>`,
            vocab: [
              ['gestern', 'ayer'],
              ['gemacht', 'hecho'],
              ['gegessen', 'comido'],
              ['gefahren', 'ido, viajado'],
              ['gesehen', 'visto'],
              ['gekauft', 'comprado'],
              ['geschlafen', 'dormido'],
              ['gewesen', 'sido, estado'],
              ['letzte Woche', 'la semana pasada'],
              ['der Urlaub', 'las vacaciones'],
            ],
            sentences: [
              ['Ich habe gestern Pizza gegessen.', 'Ayer comí pizza.'],
              ['Wir sind nach Italien gefahren.', 'Viajamos a Italia.'],
              ['Was hast du am Wochenende gemacht?', '¿Qué hiciste el fin de semana?'],
            ],
            cloze: [
              ['Sie ___ nach Hause gegangen.', 'ist', ['ist', 'hat', 'sind']],
              ['Ich habe einen Film ___.', 'gesehen', ['gesehen', 'gesieht', 'gesehet']],
              ['Wir ___ viel gearbeitet.', 'haben', ['haben', 'sind', 'hat']],
            ],
          },
        ],
      },
      /* ============================ B1 ============================ */
      {
        id: 'b1',
        units: [
          {
            id: 'b1-1',
            title: 'Trabajo y estudios',
            topic: 'Subordinadas con weil, dass y wenn',
            grammar: `
<h3>En la subordinada, el verbo va al final</h3>
<p>Con conjunciones como <strong>weil</strong> (porque), <strong>dass</strong> (que), <strong>wenn</strong> (si / cuando) y <strong>ob</strong> (si, en preguntas indirectas), el verbo conjugado se va al final.</p>
<p class="ex">Ich lerne Deutsch, weil ich in Berlin arbeiten <b>möchte</b>.</p>
<h3>Si la subordinada va primero</h3>
<p>La oración principal arranca con el verbo: <em>Wenn ich Zeit habe, <b>lese</b> ich.</em></p>
<div class="tip"><b>wenn</b> o <b>als</b>: <em>als</em> es para un hecho único en el pasado (<em>Als ich Kind war…</em>); <em>wenn</em> para presente, futuro o hechos que se repiten. <em>Wann</em> solo se usa para preguntar «¿cuándo?».</div>`,
            vocab: [
              ['der Beruf', 'la profesión'],
              ['die Stelle', 'el puesto de trabajo'],
              ['die Bewerbung', 'la postulación'],
              ['der Lebenslauf', 'el currículum'],
              ['das Gehalt', 'el sueldo'],
              ['der Kollege', 'el colega'],
              ['die Erfahrung', 'la experiencia'],
              ['sich bewerben', 'postularse'],
              ['kündigen', 'renunciar'],
              ['die Ausbildung', 'la formación'],
            ],
            sentences: [
              ['Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.', 'Estudio alemán porque quiero trabajar en Berlín.'],
              ['Ich glaube, dass er recht hat.', 'Creo que él tiene razón.'],
              ['Wenn ich Zeit habe, lese ich.', 'Cuando tengo tiempo, leo.'],
            ],
            cloze: [
              ['Ich bleibe zu Hause, weil ich krank ___.', 'bin', ['bin', 'sein', 'ist']],
              ['Sie sagt, ___ sie keine Zeit hat.', 'dass', ['dass', 'das', 'weil']],
              ['___ es regnet, nehme ich einen Schirm.', 'Wenn', ['Wenn', 'Wann', 'Als']],
            ],
          },
          {
            id: 'b1-2',
            title: 'Salud y cuerpo',
            topic: 'Präteritum de los verbos modales',
            grammar: `
<h3>Los modales en pasado</h3>
<p>Para el pasado, los verbos modales casi siempre van en Präteritum, no en Perfekt. Pierden la diéresis y suman <em>-te</em>:</p>
${tbl([['können', 'konnte'], ['müssen', 'musste'], ['wollen', 'wollte'], ['dürfen', 'durfte'], ['sollen', 'sollte'], ['mögen', 'mochte']])}
${tbl([['ich', 'konnte'], ['du', 'konntest'], ['er / sie / es', 'konnte'], ['wir', 'konnten'], ['ihr', 'konntet'], ['sie / Sie', 'konnten']])}
<h3>Decir que algo duele</h3>
<p><em>Mir tut der Kopf weh</em> (me duele la cabeza), con <em>mir</em> en dativo. O con palabras compuestas: <em>Ich habe Kopfschmerzen / Bauchschmerzen</em>.</p>`,
            vocab: [
              ['der Kopf', 'la cabeza'],
              ['der Bauch', 'la panza'],
              ['der Rücken', 'la espalda'],
              ['die Schmerzen', 'los dolores'],
              ['das Fieber', 'la fiebre'],
              ['die Erkältung', 'el resfrío'],
              ['das Rezept', 'la receta'],
              ['die Tablette', 'la pastilla'],
              ['sich fühlen', 'sentirse'],
              ['gesund', 'sano'],
            ],
            sentences: [
              ['Ich habe Kopfschmerzen.', 'Me duele la cabeza.'],
              ['Gestern musste ich zum Arzt gehen.', 'Ayer tuve que ir al médico.'],
              ['Mir tut der Rücken weh.', 'Me duele la espalda.'],
            ],
            cloze: [
              ['Letzte Woche ___ ich nicht arbeiten.', 'konnte', ['konnte', 'kann', 'könnte']],
              ['Gestern ___ wir früh aufstehen.', 'mussten', ['mussten', 'musste', 'müssen']],
              ['Wie ___ du dich?', 'fühlst', ['fühlst', 'fühle', 'fühlt']],
            ],
          },
          {
            id: 'b1-3',
            title: 'Viajes',
            topic: 'Konjunktiv II: cortesía e hipótesis',
            grammar: `
<h3>Konjunktiv II</h3>
<p>Sirve para pedir con cortesía y para hablar de situaciones hipotéticas.</p>
${tbl([['haben', 'hätte'], ['sein', 'wäre'], ['können', 'könnte'], ['werden', 'würde'], ['mögen', 'möchte'], ['kommen', 'käme']])}
<p>Con la mayoría de los verbos se usa <strong>würde + infinitivo</strong>: <em>Ich würde gern reisen</em>.</p>
<p class="ex">Wenn ich Zeit hätte, würde ich mitkommen. (Si tuviera tiempo, iría.)</p>
<div class="tip">Ojo con la diéresis: <em>wurde</em> es pasado de <em>werden</em>; <em>würde</em> es Konjunktiv II.</div>`,
            vocab: [
              ['die Reise', 'el viaje'],
              ['der Flughafen', 'el aeropuerto'],
              ['die Fahrkarte', 'el boleto'],
              ['das Gepäck', 'el equipaje'],
              ['die Unterkunft', 'el alojamiento'],
              ['buchen', 'reservar'],
              ['abfahren', 'partir, salir'],
              ['ankommen', 'llegar'],
              ['die Verspätung', 'la demora'],
              ['der Ausweis', 'el documento'],
            ],
            sentences: [
              ['Ich hätte gern ein Zimmer für zwei Nächte.', 'Quisiera una habitación por dos noches.'],
              ['Könnten Sie mir helfen?', '¿Podría ayudarme?'],
              ['Der Zug hat zehn Minuten Verspätung.', 'El tren tiene diez minutos de demora.'],
            ],
            cloze: [
              ['Wenn ich reich wäre, ___ ich um die Welt reisen.', 'würde', ['würde', 'werde', 'wurde']],
              ['Ich ___ gern einen Kaffee.', 'hätte', ['hätte', 'habe', 'hatte']],
              ['Wenn ich Zeit ___, käme ich mit.', 'hätte', ['hätte', 'habe', 'hatte']],
            ],
          },
        ],
      },
      /* ============================ B2 ============================ */
      {
        id: 'b2',
        units: [
          {
            id: 'b2-1',
            title: 'Medio ambiente',
            topic: 'La voz pasiva',
            grammar: `
<h3>Vorgangspassiv: werden + Partizip II</h3>
<p>Pone el foco en la acción, no en quién la hace.</p>
${tbl([['Präsens', 'Der Müll wird abgeholt.'], ['Präteritum', 'Der Müll wurde abgeholt.'], ['Perfekt', 'Der Müll ist abgeholt worden.'], ['con modal', 'Der Müll muss abgeholt werden.']])}
<div class="tip">En el Perfekt pasivo se usa <em>worden</em>, no <em>geworden</em>.</div>
<p>Quien realiza la acción se introduce con <em>von</em> + dativo: <em>Das Gesetz wurde vom Parlament beschlossen.</em></p>`,
            vocab: [
              ['die Umwelt', 'el medio ambiente'],
              ['der Klimawandel', 'el cambio climático'],
              ['die Energie', 'la energía'],
              ['erneuerbar', 'renovable'],
              ['der Müll', 'la basura'],
              ['schützen', 'proteger'],
              ['verschwenden', 'desperdiciar'],
              ['die Nachhaltigkeit', 'la sostenibilidad'],
              ['verringern', 'reducir'],
              ['die Verschmutzung', 'la contaminación'],
            ],
            sentences: [
              ['Der Müll wird jeden Montag abgeholt.', 'La basura se recoge todos los lunes.'],
              ['Die Umwelt muss geschützt werden.', 'El medio ambiente debe ser protegido.'],
              ['Das Gesetz wurde letztes Jahr beschlossen.', 'La ley fue aprobada el año pasado.'],
            ],
            cloze: [
              ['Das Haus ___ 1990 gebaut.', 'wurde', ['wurde', 'wird', 'würde']],
              ['Energie muss gespart ___.', 'werden', ['werden', 'wird', 'worden']],
              ['Das Problem ist schon gelöst ___.', 'worden', ['worden', 'geworden', 'werden']],
            ],
          },
          {
            id: 'b2-2',
            title: 'Medios y opinión',
            topic: 'Relativas, obwohl y trotzdem',
            grammar: `
<h3>Pronombres relativos</h3>
<p>Concuerdan en género y número con el sustantivo, pero el caso depende de su función dentro de la subordinada. El verbo va al final.</p>
${tbl([['', 'masc.', 'fem.', 'neutro', 'plural'], ['nominativo', 'der', 'die', 'das', 'die'], ['acusativo', 'den', 'die', 'das', 'die'], ['dativo', 'dem', 'der', 'dem', 'denen'], ['genitivo', 'dessen', 'deren', 'dessen', 'deren']], true)}
<p class="ex">Die Frau, <b>der</b> ich geholfen habe, ist Ärztin. (<em>helfen</em> pide dativo)</p>
<h3><em>obwohl</em> y <em>trotzdem</em></h3>
<p><em>obwohl</em> (aunque) abre una subordinada: verbo al final. <em>trotzdem</em> (sin embargo) es un adverbio de la principal: verbo en 2.º lugar.</p>
<p class="ex">Obwohl es regnete, gingen wir spazieren. = Es regnete. Trotzdem gingen wir spazieren.</p>`,
            vocab: [
              ['die Nachricht', 'la noticia'],
              ['die Zeitung', 'el diario'],
              ['die Meinung', 'la opinión'],
              ['behaupten', 'afirmar'],
              ['überzeugen', 'convencer'],
              ['der Beitrag', 'la publicación, el aporte'],
              ['zuverlässig', 'confiable'],
              ['die Quelle', 'la fuente'],
              ['einerseits … andererseits', 'por un lado… por otro'],
              ['obwohl', 'aunque'],
            ],
            sentences: [
              ['Der Artikel, den ich gelesen habe, war interessant.', 'El artículo que leí era interesante.'],
              ['Obwohl es spät war, arbeitete sie weiter.', 'Aunque era tarde, ella siguió trabajando.'],
              ['Meiner Meinung nach ist die Quelle zuverlässig.', 'En mi opinión, la fuente es confiable.'],
            ],
            cloze: [
              ['Das ist der Mann, ___ Auto gestohlen wurde.', 'dessen', ['dessen', 'deren', 'dem']],
              ['Die Frau, ___ ich geholfen habe, ist Ärztin.', 'der', ['der', 'die', 'den']],
              ['Es regnete. ___ gingen wir spazieren.', 'Trotzdem', ['Trotzdem', 'Obwohl', 'Weil']],
            ],
          },
          {
            id: 'b2-3',
            title: 'Vivienda y vida urbana',
            topic: 'El genitivo y sus preposiciones',
            grammar: `
<h3>El genitivo</h3>
<p>Expresa posesión: <em>das Auto des Nachbarn</em>. Masculinos y neutros suman <em>-s</em> o <em>-es</em>: <em>des Mannes, des Hauses</em>.</p>
${tbl([['masculino', 'des Mannes'], ['femenino', 'der Frau'], ['neutro', 'des Kindes'], ['plural', 'der Kinder']])}
<h3>Preposiciones con genitivo</h3>
<p><strong>wegen</strong> (debido a), <strong>trotz</strong> (a pesar de), <strong>während</strong> (durante), <strong>statt</strong> (en lugar de), <strong>innerhalb</strong> (dentro de).</p>
<div class="tip">En el habla cotidiana se escucha <em>wegen dem Wetter</em> (dativo), pero en registro escrito o formal se usa el genitivo: <em>wegen des Wetters</em>.</div>
<div class="tip">Algunos masculinos son «débiles» y toman <em>-n</em>: <em>der Nachbar → des Nachbarn</em>, <em>der Student → des Studenten</em>.</div>`,
            vocab: [
              ['die Miete', 'el alquiler'],
              ['der Vermieter', 'el locador'],
              ['die Nebenkosten', 'los gastos y expensas'],
              ['umziehen', 'mudarse'],
              ['die Nachbarschaft', 'el vecindario'],
              ['der Mietvertrag', 'el contrato de alquiler'],
              ['die Wohngemeinschaft', 'el departamento compartido'],
              ['bezahlbar', 'accesible (de precio)'],
              ['renovieren', 'renovar, refaccionar'],
              ['die Kaution', 'el depósito de garantía'],
            ],
            sentences: [
              ['Wegen der hohen Miete ziehen wir um.', 'Por el alquiler alto nos mudamos.'],
              ['Trotz des Regens gingen wir spazieren.', 'A pesar de la lluvia salimos a caminar.'],
              ['Während des Umzugs haben uns Freunde geholfen.', 'Durante la mudanza nos ayudaron amigos.'],
            ],
            cloze: [
              ['Wegen ___ Wetters bleiben wir zu Hause.', 'des', ['des', 'dem', 'der']],
              ['Trotz ___ Kälte ging er joggen.', 'der', ['der', 'die', 'den']],
              ['Das ist das Auto ___ Nachbarn.', 'des', ['des', 'dem', 'den']],
            ],
          },
        ],
      },
      /* ============================ C1 ============================ */
      {
        id: 'c1',
        units: [
          {
            id: 'c1-1',
            title: 'Lenguaje académico',
            topic: 'Nominalización y participios',
            grammar: `
<h3>Nominalización</h3>
<p>El alemán académico prefiere sustantivos a verbos: <em>Nachdem die Daten analysiert wurden…</em> pasa a <em>Nach der Analyse der Daten…</em></p>
${tbl([['untersuchen', 'die Untersuchung'], ['entwickeln', 'die Entwicklung'], ['berücksichtigen', 'die Berücksichtigung'], ['analysieren', 'die Analyse']])}
<h3>Atributos participiales</h3>
<p>Una oración de relativo se puede «comprimir» en un participio delante del sustantivo, que se declina como adjetivo:</p>
<p class="ex">die Studie, die 2020 durchgeführt wurde → die 2020 <b>durchgeführte</b> Studie</p>
<p class="ex">das Kind, das weint → das <b>weinende</b> Kind</p>
<div class="tip">Partizip I (<em>-end</em>): acción simultánea y activa. Partizip II: acción terminada o pasiva.</div>
<p>Fórmulas útiles: <em>Zusammenfassend lässt sich sagen, dass…</em>, <em>hinsichtlich</em> + genitivo, <em>Es ist davon auszugehen, dass…</em></p>`,
            vocab: [
              ['die Untersuchung', 'el estudio, la investigación'],
              ['die Erkenntnis', 'el hallazgo'],
              ['darstellen', 'exponer, representar'],
              ['die Voraussetzung', 'el requisito'],
              ['berücksichtigen', 'tener en cuenta'],
              ['die Auswirkung', 'el efecto, la repercusión'],
              ['hinsichtlich', 'con respecto a'],
              ['zusammenfassend', 'en resumen'],
              ['der Ansatz', 'el enfoque'],
              ['belegen', 'demostrar, probar'],
            ],
            sentences: [
              ['Die im Jahr 2020 durchgeführte Studie zeigt deutliche Ergebnisse.', 'El estudio realizado en 2020 muestra resultados claros.'],
              ['Nach der Analyse der Daten wurden die Ergebnisse veröffentlicht.', 'Tras el análisis de los datos se publicaron los resultados.'],
              ['Zusammenfassend lässt sich sagen, dass der Ansatz erfolgreich war.', 'En resumen, puede decirse que el enfoque fue exitoso.'],
            ],
            cloze: [
              ['Die von Experten ___ Methode ist neu.', 'entwickelte', ['entwickelte', 'entwickelt', 'entwickelten']],
              ['Das ___ Kind schlief sofort ein.', 'weinende', ['weinende', 'weinend', 'weinenden']],
              ['Diese Erkenntnis muss ___ werden.', 'berücksichtigt', ['berücksichtigt', 'berücksichtigen', 'berücksichtigte']],
            ],
          },
          {
            id: 'c1-2',
            title: 'Discurso indirecto',
            topic: 'Konjunktiv I',
            grammar: `
<h3>Konjunktiv I</h3>
<p>Es el modo del discurso indirecto en la prensa y en textos formales. Marca distancia: se transmite lo que otro dijo, sin confirmarlo.</p>
${tbl([['ich', 'sei', 'habe'], ['du', 'seist', 'habest'], ['er / sie / es', 'sei', 'habe'], ['wir', 'seien', 'haben → hätten'], ['ihr', 'seiet', 'habet'], ['sie / Sie', 'seien', 'haben → hätten']])}
<p>Se forma con la raíz + <em>-e</em>: <em>er komme, er könne, er werde</em>.</p>
<div class="tip">Si el Konjunktiv I coincide con el indicativo (<em>sie haben</em>), se reemplaza por el Konjunktiv II: <em>Sie sagten, sie <b>hätten</b> keine Zeit.</em></div>
<p>En pasado: <em>Er sagt, er <b>habe</b> nichts gewusst</em> / <em>er <b>sei</b> gekommen</em>.</p>
<p><em>zufolge</em> va después del sustantivo, en dativo: <em>dem Bericht zufolge</em>.</p>`,
            vocab: [
              ['angeblich', 'supuestamente'],
              ['die Aussage', 'la declaración'],
              ['erklären', 'declarar, explicar'],
              ['betonen', 'subrayar'],
              ['bestreiten', 'negar, desmentir'],
              ['der Sprecher', 'el portavoz'],
              ['zufolge', 'según'],
              ['einräumen', 'admitir'],
              ['die Behauptung', 'la afirmación'],
              ['mitteilen', 'comunicar, informar'],
            ],
            sentences: [
              ['Der Sprecher sagte, die Lage sei unter Kontrolle.', 'El portavoz dijo que la situación estaba bajo control.'],
              ['Sie erklärte, sie habe nichts davon gewusst.', 'Ella declaró que no sabía nada de eso.'],
              ['Dem Bericht zufolge seien die Kosten gestiegen.', 'Según el informe, los costos habrían aumentado.'],
            ],
            cloze: [
              ['Er behauptet, er ___ krank.', 'sei', ['sei', 'seid', 'sein']],
              ['Sie sagte, sie ___ keine Zeit.', 'habe', ['habe', 'hab', 'haben']],
              ['Die Firma teilte mit, sie ___ neue Mitarbeiter einstellen.', 'werde', ['werde', 'werdet', 'werden']],
            ],
          },
          {
            id: 'c1-3',
            title: 'Expresiones idiomáticas',
            topic: 'Modismos y partículas modales',
            grammar: `
<h3>Expresiones idiomáticas</h3>
<p>Se aprenden como bloques: el sentido literal suele ser otro. <em>Ich verstehe nur Bahnhof</em> es literalmente «solo entiendo estación».</p>
<h3>Partículas modales</h3>
<p>Palabras cortas que agregan matiz emocional. Son típicas del habla y no tienen traducción directa.</p>
${tbl([['doch', 'insistencia, ánimo', 'Komm doch mit!'], ['mal', 'suaviza un pedido', 'Schau mal!'], ['ja', 'algo obvio o sorprendente', 'Das ist ja toll!'], ['halt / eben', 'resignación', 'Das ist halt so.'], ['denn', 'interés en preguntas', 'Was ist denn los?']])}`,
            vocab: [
              ['Ich verstehe nur Bahnhof', 'no entiendo nada'],
              ['Schwein haben', 'tener suerte'],
              ['Das ist nicht mein Bier', 'no es asunto mío'],
              ['die Daumen drücken', 'cruzar los dedos'],
              ['Tomaten auf den Augen haben', 'no ver lo obvio'],
              ['die Nase voll haben', 'estar harto'],
              ['jemandem auf den Keks gehen', 'sacar de quicio a alguien'],
              ['Hals- und Beinbruch!', '¡mucha suerte!'],
              ['Da steppt der Bär', 'hay mucha fiesta'],
              ['Ich glaube, mein Schwein pfeift', 'no lo puedo creer'],
            ],
            sentences: [
              ['Komm doch mal vorbei!', '¡Pasá a visitarme!'],
              ['Ich drücke dir die Daumen.', 'Cruzo los dedos por vos.'],
              ['Davon habe ich die Nase voll.', 'Estoy harto de eso.'],
            ],
            cloze: [
              ['Viel Glück! Ich drücke dir die ___.', 'Daumen', ['Daumen', 'Finger', 'Hände']],
              ['Er hat beim Lotto ___ gehabt.', 'Schwein', ['Schwein', 'Bär', 'Bier']],
              ['Das geht mir auf den ___.', 'Keks', ['Keks', 'Kuchen', 'Kopf']],
            ],
          },
        ],
      },
    ],
  };
})();
