/* Curso de italiano — contenido didáctico (A1 → C1).
   Mismo formato que data-de.js. */
(function () {
  const tbl = (rows, head) =>
    `<div class="table-wrap"><table class="conj${head ? ' grid' : ''}">` +
    rows.map((r, i) => '<tr>' + r.map(c => (head && i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`)).join('') + '</tr>').join('') +
    '</table></div>';

  window.COURSES = window.COURSES || {};
  window.COURSES.it = {
    code: 'it',
    name: 'Italiano',
    native: 'Italiano',
    hello: 'Ciao',
    tts: 'it-IT',
    color: 'mint',
    chars: ['à', 'è', 'é', 'ì', 'ò', 'ù'],
    levels: [
      /* ============================ A1 ============================ */
      {
        id: 'a1',
        units: [
          {
            id: 'a1-1',
            title: 'Saludos y presentaciones',
            topic: 'El verbo essere y el trato tu o Lei',
            grammar: `
<h3>El verbo <em>essere</em> (ser / estar)</h3>
${tbl([['io', 'sono', 'yo soy'], ['tu', 'sei', 'vos sos'], ['lui / lei', 'è', 'él / ella es'], ['noi', 'siamo', 'nosotros somos'], ['voi', 'siete', 'ustedes son'], ['loro', 'sono', 'ellos son']])}
<p>Como en español, el pronombre se suele omitir: <em>Sono Marco.</em></p>
<div class="tip"><b>tu</b> es informal. Para tratar de usted se usa <b>Lei</b>, con la conjugación de la 3.ª persona: <em>Lei è italiano?</em></div>
<p>Para el estado de ánimo se usa <em>stare</em>: <em>Come stai? — Sto bene.</em></p>
<h3>Pronunciación</h3>
${tbl([['c + e / i', 'suena «ch»', 'ciao, cena'], ['ch', 'suena «k»', 'che, chiave'], ['g + e / i', 'suena «y» como en «yo»', 'gelato'], ['gh', 'suena «g» de «gato»', 'spaghetti'], ['gli', 'como una «ll» fuerte', 'famiglia'], ['gn', 'suena «ñ»', 'gnocchi'], ['sc + e / i', 'suena «sh»', 'scena'], ['doble consonante', 'se alarga', 'pala ≠ palla']])}`,
            vocab: [
              ['Ciao', 'hola / chau'],
              ['Buongiorno', 'buenos días'],
              ['Buonasera', 'buenas tardes / noches'],
              ['Buonanotte', 'buenas noches (al irse a dormir)'],
              ['Arrivederci', 'adiós'],
              ['Grazie', 'gracias'],
              ['Prego', 'de nada'],
              ['Per favore', 'por favor'],
              ['Scusi', 'disculpe'],
              ['Sì', 'sí'],
            ],
            sentences: [
              ['Io sono Marco.', 'Soy Marco.'],
              ['Come ti chiami?', '¿Cómo te llamás?'],
              ['Sono argentino.', 'Soy argentino.'],
            ],
            cloze: [
              ['Io ___ stanco.', 'sono', ['sono', 'sei', 'è']],
              ['Tu ___ italiano?', 'sei', ['sei', 'sono', 'siete']],
              ['Noi ___ a Roma.', 'siamo', ['siamo', 'siete', 'sono']],
            ],
          },
          {
            id: 'a1-2',
            title: 'La familia',
            topic: 'Artículos y el verbo avere',
            grammar: `
<h3>Artículos determinados</h3>
${tbl([['', 'singular', 'plural'], ['masculino', 'il padre', 'i padri'], ['masc. ante s + consonante, z, gn, ps', 'lo zio', 'gli zii'], ['masc. ante vocal', "l'amico", 'gli amici'], ['femenino', 'la madre', 'le madri'], ['fem. ante vocal', "l'amica", 'le amiche']], true)}
<h3>El verbo <em>avere</em> (tener)</h3>
${tbl([['io', 'ho'], ['tu', 'hai'], ['lui / lei', 'ha'], ['noi', 'abbiamo'], ['voi', 'avete'], ['loro', 'hanno']])}
<div class="tip">La <em>h</em> no se pronuncia: <em>ho</em> suena «o».</div>
<h3>Posesivos con la familia</h3>
<p>Con un familiar en singular, el posesivo va <strong>sin artículo</strong>: <em>mia madre, mio padre</em>. En plural sí lo lleva: <em>i miei genitori</em>.</p>`,
            vocab: [
              ['la madre', 'la madre'],
              ['il padre', 'el padre'],
              ['la sorella', 'la hermana'],
              ['il fratello', 'el hermano'],
              ['il figlio', 'el hijo'],
              ['la figlia', 'la hija'],
              ['i genitori', 'los padres'],
              ['il nonno', 'el abuelo'],
              ['la nonna', 'la abuela'],
              ['la casa', 'la casa'],
            ],
            sentences: [
              ['Ho un fratello.', 'Tengo un hermano.'],
              ['Mia madre si chiama Lucia.', 'Mi madre se llama Lucía.'],
              ['Questo è mio padre.', 'Este es mi padre.'],
            ],
            cloze: [
              ['Lui ___ due sorelle.', 'ha', ['ha', 'hai', 'ho']],
              ['___ zio è simpatico.', 'Lo', ['Lo', 'Il', 'La']],
              ['Voi ___ una casa grande.', 'avete', ['avete', 'abbiamo', 'hanno']],
            ],
          },
          {
            id: 'a1-3',
            title: 'Números y la hora',
            topic: 'Contar, decir la hora y la edad',
            grammar: `
<h3>Los números</h3>
${tbl([['0', 'zero', '10', 'dieci'], ['1', 'uno', '11', 'undici'], ['2', 'due', '12', 'dodici'], ['3', 'tre', '13', 'tredici'], ['4', 'quattro', '20', 'venti'], ['5', 'cinque', '21', 'ventuno'], ['6', 'sei', '28', 'ventotto'], ['7', 'sette', '30', 'trenta'], ['8', 'otto', '100', 'cento'], ['9', 'nove', '1000', 'mille']])}
<div class="tip">Delante de <em>uno</em> y <em>otto</em> la decena pierde su vocal final: <em>ventuno, ventotto, trentuno</em>.</div>
<h3>La hora</h3>
<p><em>Che ora è?</em> o <em>Che ore sono?</em> — <em>È l'una</em> (es la una), <em>Sono le tre</em> (son las tres), <em>È mezzogiorno</em> (es mediodía).</p>
<h3>La edad</h3>
<p>Igual que en español, con <strong>avere</strong>: <em>Ho vent'anni</em>.</p>`,
            vocab: [
              ['uno', 'uno'],
              ['due', 'dos'],
              ['tre', 'tres'],
              ['quattro', 'cuatro'],
              ['cinque', 'cinco'],
              ['dieci', 'diez'],
              ['venti', 'veinte'],
              ['cento', 'cien'],
              ["l'ora", 'la hora'],
              ['oggi', 'hoy'],
            ],
            sentences: [
              ['Sono le tre.', 'Son las tres.'],
              ["Ho vent'anni.", 'Tengo veinte años.'],
              ['Che ora è?', '¿Qué hora es?'],
            ],
            cloze: [
              ["___ l'una.", 'È', ['È', 'Sono', 'Ha']],
              ['Sono ___ quattro.', 'le', ['le', 'la', 'i']],
              ['Ho trenta ___.', 'anni', ['anni', 'ore', 'volte']],
            ],
          },
          {
            id: 'a1-4',
            title: 'Comida y bebida',
            topic: 'Presente regular y vorrei',
            grammar: `
<h3>Verbos regulares en presente</h3>
${tbl([['', 'parlare', 'prendere', 'dormire'], ['io', 'parlo', 'prendo', 'dormo'], ['tu', 'parli', 'prendi', 'dormi'], ['lui / lei', 'parla', 'prende', 'dorme'], ['noi', 'parliamo', 'prendiamo', 'dormiamo'], ['voi', 'parlate', 'prendete', 'dormite'], ['loro', 'parlano', 'prendono', 'dormono']], true)}
<div class="tip">Irregulares frecuentes: <em>bere</em> → bevo, bevi, beve, beviamo, bevete, bevono. <em>fare</em> → faccio, fai, fa, facciamo, fate, fanno.</div>
<h3>Pedir con cortesía</h3>
<p><em>Vorrei…</em> significa «quisiera…»: <em>Vorrei un caffè, per favore.</em> En el bar, <em>un caffè</em> es un espresso.</p>`,
            vocab: [
              ["l'acqua", 'el agua'],
              ['il caffè', 'el café'],
              ['il pane', 'el pan'],
              ['il formaggio', 'el queso'],
              ['la mela', 'la manzana'],
              ['il latte', 'la leche'],
              ['il vino', 'el vino'],
              ['mangiare', 'comer'],
              ['bere', 'beber'],
              ['buono', 'rico, bueno'],
            ],
            sentences: [
              ['Vorrei un caffè, per favore.', 'Quisiera un café, por favor.'],
              ['Mangiamo pane e formaggio.', 'Comemos pan y queso.'],
              ['È molto buono!', '¡Está muy rico!'],
            ],
            cloze: [
              ["Tu ___ l'acqua.", 'bevi', ['bevi', 'bevo', 'beve']],
              ['Noi ___ la pizza.', 'mangiamo', ['mangiamo', 'mangiate', 'mangiano']],
              ['Io ___ un bicchiere di vino.', 'vorrei', ['vorrei', 'vorresti', 'vorrebbe']],
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
            topic: 'Verbos reflexivos y frecuencia',
            grammar: `
<h3>Verbos reflexivos</h3>
${tbl([['io', 'mi alzo'], ['tu', 'ti alzi'], ['lui / lei', 'si alza'], ['noi', 'ci alziamo'], ['voi', 'vi alzate'], ['loro', 'si alzano']])}
<p>El pronombre va antes del verbo conjugado, o pegado al infinitivo: <em>Devo alzarmi presto.</em></p>
<h3>¿Con qué frecuencia?</h3>
<p><em>sempre</em> (siempre), <em>spesso</em> (a menudo), <em>a volte</em> (a veces), <em>mai</em> (nunca, con <em>non</em>: <em>Non bevo mai caffè</em>).</p>
<div class="tip">Un día con artículo indica costumbre: <em>il sabato</em> = los sábados.</div>`,
            vocab: [
              ['alzarsi', 'levantarse'],
              ['svegliarsi', 'despertarse'],
              ['fare colazione', 'desayunar'],
              ['lavorare', 'trabajar'],
              ['fare la spesa', 'hacer las compras'],
              ['guardare la TV', 'mirar televisión'],
              ['dormire', 'dormir'],
              ['la mattina', 'la mañana'],
              ['la sera', 'la noche (temprano)'],
              ['sempre', 'siempre'],
            ],
            sentences: [
              ['Mi alzo alle sette.', 'Me levanto a las siete.'],
              ['La sera guardo la TV.', 'A la noche miro televisión.'],
              ['Il sabato facciamo la spesa.', 'Los sábados hacemos las compras.'],
            ],
            cloze: [
              ['Lui ___ alza presto.', 'si', ['si', 'mi', 'ti']],
              ['Noi ci ___ alle otto.', 'svegliamo', ['svegliamo', 'svegliate', 'svegliano']],
              ['Io ___ colazione al bar.', 'faccio', ['faccio', 'fai', 'fa']],
            ],
          },
          {
            id: 'a2-2',
            title: 'La ciudad',
            topic: 'Preposiciones articuladas',
            grammar: `
<h3>Preposiciones articuladas</h3>
<p>Las preposiciones <em>a, da, di, in, su</em> se funden con el artículo:</p>
${tbl([['', 'il', 'lo', 'la', "l'", 'i', 'gli', 'le'], ['a', 'al', 'allo', 'alla', "all'", 'ai', 'agli', 'alle'], ['da', 'dal', 'dallo', 'dalla', "dall'", 'dai', 'dagli', 'dalle'], ['di', 'del', 'dello', 'della', "dell'", 'dei', 'degli', 'delle'], ['in', 'nel', 'nello', 'nella', "nell'", 'nei', 'negli', 'nelle'], ['su', 'sul', 'sullo', 'sulla', "sull'", 'sui', 'sugli', 'sulle']], true)}
<div class="tip">Con medios de transporte se usa <em>in</em> sin artículo: <em>in autobus, in treno</em>. Pero a pie es <em>a piedi</em>.</div>`,
            vocab: [
              ['la stazione', 'la estación'],
              ['la strada', 'la calle'],
              ['la farmacia', 'la farmacia'],
              ["l'ospedale", 'el hospital'],
              ['a sinistra', 'a la izquierda'],
              ['a destra', 'a la derecha'],
              ['dritto', 'derecho'],
              ['la fermata', 'la parada'],
              ["l'autobus", 'el colectivo'],
              ['lontano', 'lejos'],
            ],
            sentences: [
              ['Vado in autobus.', 'Voy en colectivo.'],
              ["Dov'è la farmacia?", '¿Dónde está la farmacia?'],
              ['Vada dritto e poi giri a sinistra.', 'Siga derecho y después doble a la izquierda.'],
            ],
            cloze: [
              ['Il libro è ___ tavolo.', 'sul', ['sul', 'sulla', 'nel']],
              ['Vado ___ supermercato.', 'al', ['al', 'allo', 'alla']],
              ['Vengo ___ stazione.', 'dalla', ['dalla', 'dal', 'dallo']],
            ],
          },
          {
            id: 'a2-3',
            title: 'Hablar del pasado',
            topic: 'El passato prossimo',
            grammar: `
<h3>Cómo se forma</h3>
<p><strong>avere</strong> o <strong>essere</strong> + participio pasado.</p>
${tbl([['-are → -ato', 'mangiare → mangiato'], ['-ere → -uto', 'credere → creduto'], ['-ire → -ito', 'dormire → dormito']])}
<h3>Participios irregulares frecuentes</h3>
${tbl([['fare', 'fatto'], ['vedere', 'visto'], ['prendere', 'preso'], ['essere', 'stato'], ['dire', 'detto'], ['scrivere', 'scritto']])}
<h3>Con <em>essere</em>, el participio concuerda</h3>
<p>Los verbos de movimiento y cambio de estado (<em>andare, venire, partire, restare</em>) y los reflexivos usan <strong>essere</strong>, y el participio concuerda con el sujeto: <em>Marco è andato, Maria è andata, siamo andati</em>.</p>`,
            vocab: [
              ['ieri', 'ayer'],
              ['fatto', 'hecho'],
              ['mangiato', 'comido'],
              ['andato', 'ido'],
              ['visto', 'visto'],
              ['comprato', 'comprado'],
              ['dormito', 'dormido'],
              ['stato', 'sido, estado'],
              ['la settimana scorsa', 'la semana pasada'],
              ['le vacanze', 'las vacaciones'],
            ],
            sentences: [
              ['Ieri ho mangiato la pizza.', 'Ayer comí pizza.'],
              ['Siamo andati in Germania.', 'Fuimos a Alemania.'],
              ['Che cosa hai fatto nel fine settimana?', '¿Qué hiciste el fin de semana?'],
            ],
            cloze: [
              ['Maria è ___ al cinema.', 'andata', ['andata', 'andato', 'andati']],
              ['Ho ___ un bel film.', 'visto', ['visto', 'vedito', 'vista']],
              ['Noi ___ lavorato molto.', 'abbiamo', ['abbiamo', 'siamo', 'hanno']],
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
            topic: 'El futuro semplice',
            grammar: `
<h3>Futuro semplice</h3>
${tbl([['io', 'lavorerò'], ['tu', 'lavorerai'], ['lui / lei', 'lavorerà'], ['noi', 'lavoreremo'], ['voi', 'lavorerete'], ['loro', 'lavoreranno']])}
<p>En los verbos en <em>-are</em>, la <em>a</em> pasa a <em>e</em>: <em>parlare → parlerò</em>.</p>
${tbl([['essere', 'sarò'], ['avere', 'avrò'], ['andare', 'andrò'], ['fare', 'farò'], ['venire', 'verrò']])}
<div class="tip">El futuro también expresa suposición: <em>Saranno le dieci</em> = deben ser las diez.</div>`,
            vocab: [
              ['il lavoro', 'el trabajo'],
              ['il colloquio', 'la entrevista'],
              ['il curriculum', 'el currículum'],
              ['lo stipendio', 'el sueldo'],
              ['il collega', 'el colega'],
              ["l'esperienza", 'la experiencia'],
              ['candidarsi', 'postularse'],
              ['licenziarsi', 'renunciar'],
              ["l'ufficio", 'la oficina'],
              ['la laurea', 'el título universitario'],
            ],
            sentences: [
              ["L'anno prossimo lavorerò a Milano.", 'El año que viene voy a trabajar en Milán.'],
              ['Domani avrò un colloquio.', 'Mañana voy a tener una entrevista.'],
              ['Quando finirai gli studi?', '¿Cuándo vas a terminar los estudios?'],
            ],
            cloze: [
              ['Domani ___ in ufficio presto.', 'andrò', ['andrò', 'andai', 'andavo']],
              ['Loro ___ a Roma la settimana prossima.', 'saranno', ['saranno', 'sono stati', 'erano']],
              ["Se studi, ___ l'esame.", 'passerai', ['passerai', 'passavi', 'passasti']],
            ],
          },
          {
            id: 'b1-2',
            title: 'Salud y cuerpo',
            topic: 'Imperfetto o passato prossimo',
            grammar: `
<h3>El imperfetto</h3>
${tbl([['', 'essere', 'parlare'], ['io', 'ero', 'parlavo'], ['tu', 'eri', 'parlavi'], ['lui / lei', 'era', 'parlava'], ['noi', 'eravamo', 'parlavamo'], ['voi', 'eravate', 'parlavate'], ['loro', 'erano', 'parlavano']], true)}
<p><strong>Imperfetto</strong>: descripciones, costumbres y acciones en desarrollo («era», «jugaba»). <strong>Passato prossimo</strong>: hechos puntuales y terminados («fui», «jugué»).</p>
<p class="ex">Mentre leggevo (fondo), è squillato il telefono (hecho puntual).</p>
<h3>Decir que algo duele</h3>
<p><em>Mi fa male la testa</em> / <em>Mi fanno male i piedi</em>: el verbo concuerda con lo que duele.</p>`,
            vocab: [
              ['la testa', 'la cabeza'],
              ['la pancia', 'la panza'],
              ['la schiena', 'la espalda'],
              ['il dolore', 'el dolor'],
              ['la febbre', 'la fiebre'],
              ['il raffreddore', 'el resfrío'],
              ['la ricetta', 'la receta'],
              ['la pastiglia', 'la pastilla'],
              ['sentirsi', 'sentirse'],
              ['sano', 'sano'],
            ],
            sentences: [
              ['Mi fa male la testa.', 'Me duele la cabeza.'],
              ['Quando ero bambino, giocavo a calcio.', 'Cuando era chico, jugaba al fútbol.'],
              ['Ieri sono andato dal medico perché avevo la febbre.', 'Ayer fui al médico porque tenía fiebre.'],
            ],
            cloze: [
              ['Da piccolo ___ sempre al mare.', 'andavo', ['andavo', 'sono andato', 'andrò']],
              ['Mentre leggevo, ___ il telefono.', 'è squillato', ['è squillato', 'squillerà', 'squillerebbe']],
              ['Mi ___ male i piedi.', 'fanno', ['fanno', 'fa', 'fate']],
            ],
          },
          {
            id: 'b1-3',
            title: 'Viajes',
            topic: 'Condizionale presente',
            grammar: `
<h3>Condizionale presente</h3>
${tbl([['io', 'parlerei'], ['tu', 'parleresti'], ['lui / lei', 'parlerebbe'], ['noi', 'parleremmo'], ['voi', 'parlereste'], ['loro', 'parlerebbero']])}
${tbl([['essere', 'sarei'], ['avere', 'avrei'], ['volere', 'vorrei'], ['potere', 'potrei'], ['andare', 'andrei'], ['fare', 'farei']])}
<p>Se usa para pedir con cortesía, expresar deseos y dar consejos: <em>Al posto tuo, prenderei il treno.</em></p>
<div class="tip">Ojo: <em>andremo</em> (futuro) y <em>andremmo</em> (condicional). La doble <em>m</em> marca el condicional.</div>`,
            vocab: [
              ['il viaggio', 'el viaje'],
              ["l'aeroporto", 'el aeropuerto'],
              ['il biglietto', 'el boleto'],
              ['i bagagli', 'el equipaje'],
              ["l'alloggio", 'el alojamiento'],
              ['prenotare', 'reservar'],
              ['partire', 'partir'],
              ['arrivare', 'llegar'],
              ['il ritardo', 'la demora'],
              ['il documento', 'el documento'],
            ],
            sentences: [
              ['Vorrei una camera per due notti.', 'Quisiera una habitación por dos noches.'],
              ['Potrebbe aiutarmi?', '¿Podría ayudarme?'],
              ['Il treno ha dieci minuti di ritardo.', 'El tren tiene diez minutos de demora.'],
            ],
            cloze: [
              ["Mi ___ un'informazione, per favore?", 'darebbe', ['darebbe', 'dava', 'diede']],
              ['Al posto tuo, io ___ il treno.', 'prenderei', ['prenderei', 'prenderò', 'prendevo']],
              ['Se potessimo, ___ in Sicilia.', 'andremmo', ['andremmo', 'andremo', 'andavamo']],
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
            topic: 'Congiuntivo presente',
            grammar: `
<h3>Cuándo se usa</h3>
<p>Después de verbos de opinión, deseo, duda o emoción (<em>penso che, credo che, spero che, voglio che</em>) y de expresiones impersonales (<em>è necessario che, bisogna che</em>).</p>
${tbl([['', 'parlare', 'prendere', 'essere', 'avere'], ['io / tu / lui', 'parli', 'prenda', 'sia', 'abbia'], ['noi', 'parliamo', 'prendiamo', 'siamo', 'abbiamo'], ['voi', 'parliate', 'prendiate', 'siate', 'abbiate'], ['loro', 'parlino', 'prendano', 'siano', 'abbiano']], true)}
<div class="tip">Las tres personas del singular son iguales, por eso se suele agregar el pronombre: <em>Penso che tu abbia ragione.</em></div>`,
            vocab: [
              ["l'ambiente", 'el medio ambiente'],
              ['il cambiamento climatico', 'el cambio climático'],
              ["l'energia", 'la energía'],
              ['rinnovabile', 'renovable'],
              ['i rifiuti', 'los residuos'],
              ['proteggere', 'proteger'],
              ['sprecare', 'desperdiciar'],
              ['la sostenibilità', 'la sostenibilidad'],
              ['ridurre', 'reducir'],
              ["l'inquinamento", 'la contaminación'],
            ],
            sentences: [
              ['Penso che sia importante riciclare.', 'Creo que es importante reciclar.'],
              ['Bisogna che tutti riducano i rifiuti.', 'Es necesario que todos reduzcan los residuos.'],
              ["Spero che il governo protegga l'ambiente.", 'Espero que el gobierno proteja el medio ambiente.'],
            ],
            cloze: [
              ['Credo che lui ___ ragione.', 'abbia', ['abbia', 'abbiamo', 'abbiate']],
              ['È necessario che voi ___ meno energia.', 'consumiate', ['consumiate', 'consumate', 'consumiamo']],
              ['Penso che loro ___ a casa.', 'siano', ['siano', 'siamo', 'siate']],
            ],
          },
          {
            id: 'b2-2',
            title: 'Medios y opinión',
            topic: 'Pronombres relativos y benché',
            grammar: `
<h3>Pronombres relativos</h3>
${tbl([['che', 'sujeto u objeto directo', 'il libro che leggo'], ['cui', 'después de preposición', 'la ragazza con cui parlo'], ['il quale', 'formal, alternativa a cui', 'la ragazza con la quale parlo'], ['il cui', 'posesivo («cuyo»)', "l'autore il cui libro…"], ['chi', '«quien» sin antecedente', 'Chi cerca trova.']])}
<h3><em>benché</em> + congiuntivo</h3>
<p><em>benché, sebbene, nonostante</em> exigen congiuntivo. En pasado se usa el congiuntivo imperfetto (<em>fosse, avesse</em>): <em>Benché fosse tardi, ha continuato.</em> En cambio <em>anche se</em> va con indicativo.</p>`,
            vocab: [
              ['la notizia', 'la noticia'],
              ['il giornale', 'el diario'],
              ["l'opinione", 'la opinión'],
              ['affermare', 'afirmar'],
              ['convincere', 'convencer'],
              ["l'articolo", 'el artículo'],
              ['affidabile', 'confiable'],
              ['la fonte', 'la fuente'],
              ["da un lato … dall'altro", 'por un lado… por otro'],
              ['benché', 'aunque'],
            ],
            sentences: [
              ["L'articolo che ho letto era interessante.", 'El artículo que leí era interesante.'],
              ['Benché fosse tardi, ha continuato a lavorare.', 'Aunque era tarde, siguió trabajando.'],
              ['Secondo me la fonte è affidabile.', 'En mi opinión, la fuente es confiable.'],
            ],
            cloze: [
              ['La ragazza con ___ parlo è mia cugina.', 'cui', ['cui', 'che', 'chi']],
              ['Il libro ___ ti ho parlato è esaurito.', 'di cui', ['di cui', 'che', 'chi']],
              ['Benché ___ stanco, è uscito.', 'fosse', ['fosse', 'era', 'è']],
            ],
          },
          {
            id: 'b2-3',
            title: 'Vivienda y vida urbana',
            topic: 'Pronombres combinados y ne',
            grammar: `
<h3>Pronombres combinados</h3>
<p>El indirecto va antes que el directo. <em>mi, ti, ci, vi, si</em> cambian la <em>i</em> por <em>e</em>; <em>gli</em> y <em>le</em> (a él, a ella, a usted) pasan a <em>glie-</em> y se escriben junto.</p>
${tbl([['', 'lo', 'la', 'li', 'le', 'ne'], ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'], ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'], ['gli / le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'], ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'], ['vi', 've lo', 've la', 've li', 've le', 've ne']], true)}
<h3>La partícula <em>ne</em></h3>
<p>Reemplaza una cantidad o algo introducido por <em>di</em>: <em>Quante mele vuoi? Ne voglio due.</em></p>`,
            vocab: [
              ["l'affitto", 'el alquiler'],
              ['il proprietario', 'el propietario'],
              ['le spese condominiali', 'las expensas'],
              ['traslocare', 'mudarse'],
              ['il quartiere', 'el barrio'],
              ["il contratto d'affitto", 'el contrato de alquiler'],
              ['il coinquilino', 'el compañero de departamento'],
              ['economico', 'barato, económico'],
              ['ristrutturare', 'refaccionar'],
              ['la caparra', 'la seña, el depósito'],
            ],
            sentences: [
              ['Te lo dico domani.', 'Te lo digo mañana.'],
              ['Glielo spiego io.', 'Se lo explico yo.'],
              ['Ce ne sono tre.', 'Hay tres.'],
            ],
            cloze: [
              ['Mi presti la penna? Sì, ___ presto.', 'te la', ['te la', 'ti la', 'te lo']],
              ['Quando dai le chiavi a Maria? ___ do domani.', 'Gliele', ['Gliele', 'Le le', 'Gli le']],
              ['Quante mele vuoi? ___ voglio due.', 'Ne', ['Ne', 'Le', 'Ci']],
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
            title: 'Hipótesis y lenguaje académico',
            topic: 'El periodo ipotetico',
            grammar: `
<h3>Los tres tipos</h3>
${tbl([['tipo', 'estructura', 'ejemplo'], ['real', 'se + presente → presente / futuro', 'Se piove, resto a casa.'], ['posible', 'se + cong. imperfetto → condizionale', 'Se avessi tempo, studierei.'], ['irreal', 'se + cong. trapassato → condiz. passato', "Se avessi studiato, avrei passato l'esame."]], true)}
<h3>Congiuntivo imperfetto</h3>
${tbl([['', 'essere', 'avere'], ['io', 'fossi', 'avessi'], ['tu', 'fossi', 'avessi'], ['lui / lei', 'fosse', 'avesse'], ['noi', 'fossimo', 'avessimo'], ['voi', 'foste', 'aveste'], ['loro', 'fossero', 'avessero']], true)}
<div class="tip">Igual que en español, después de <em>se</em> nunca va el condicional: no se dice <em>se sarei</em>, sino <em>se fossi</em>.</div>
<p>Fórmulas académicas: <em>per quanto riguarda, tenere conto di, in sintesi, ne consegue che</em>.</p>`,
            vocab: [
              ['la ricerca', 'la investigación'],
              ['il risultato', 'el resultado'],
              ["l'ipotesi", 'la hipótesis'],
              ['dimostrare', 'demostrar'],
              ['tenere conto di', 'tener en cuenta'],
              ["l'approccio", 'el enfoque'],
              ['il presupposto', 'la premisa'],
              ['in sintesi', 'en síntesis'],
              ['per quanto riguarda', 'en cuanto a'],
              ['le conseguenze', 'las consecuencias'],
            ],
            sentences: [
              ['Se avessi più tempo, studierei il tedesco.', 'Si tuviera más tiempo, estudiaría alemán.'],
              ['Se avessimo saputo, saremmo venuti.', 'Si hubiéramos sabido, habríamos venido.'],
              ["In sintesi, i risultati confermano l'ipotesi.", 'En síntesis, los resultados confirman la hipótesis.'],
            ],
            cloze: [
              ['Se ___ ricco, viaggerei sempre.', 'fossi', ['fossi', 'ero', 'sarei']],
              ["Se avessi studiato, ___ l'esame.", 'avrei passato', ['avrei passato', 'passerei', 'avessi passato']],
              ['Se piove, ___ a casa.', 'resto', ['resto', 'resterei', 'restassi']],
            ],
          },
          {
            id: 'c1-2',
            title: 'Discurso indirecto',
            topic: 'La concordanza dei tempi',
            grammar: `
<h3>Los tiempos «retroceden»</h3>
<p>Al pasar al estilo indirecto con un verbo introductorio en pasado:</p>
${tbl([['presente → imperfetto', '«Sono stanco» → disse che era stanco'], ['passato prossimo → trapassato', '«Ho finito» → disse che aveva finito'], ['futuro → condizionale passato', '«Verrò» → disse che sarebbe venuto']])}
<h3>También cambian tiempo y lugar</h3>
${tbl([['oggi', 'quel giorno'], ['domani', 'il giorno dopo'], ['ieri', 'il giorno prima'], ['qui', 'lì'], ['questo', 'quello']])}
<div class="tip">El «futuro en el pasado» en italiano es el <b>condizionale passato</b> (<em>sarebbe venuto</em>), no el condicional simple como en español («vendría»).</div>`,
            vocab: [
              ['presumibilmente', 'presumiblemente'],
              ['la dichiarazione', 'la declaración'],
              ['dichiarare', 'declarar'],
              ['sottolineare', 'subrayar'],
              ['smentire', 'desmentir'],
              ['il portavoce', 'el portavoz'],
              ['secondo', 'según'],
              ['ammettere', 'admitir'],
              ["l'affermazione", 'la afirmación'],
              ['comunicare', 'comunicar'],
            ],
            sentences: [
              ['Il portavoce ha detto che la situazione era sotto controllo.', 'El portavoz dijo que la situación estaba bajo control.'],
              ['Ha dichiarato che non ne sapeva niente.', 'Declaró que no sabía nada de eso.'],
              ['Mi ha chiesto se sarei venuto alla festa.', 'Me preguntó si iría a la fiesta.'],
            ],
            cloze: [
              ['Ha detto: «Sono stanco». Ha detto che ___ stanco.', 'era', ['era', 'è stato', 'sarà']],
              ['Disse che il giorno ___ sarebbe partito.', 'dopo', ['dopo', 'domani', 'prossimo']],
              ['Mi ha detto che ___ venuto il giorno dopo.', 'sarebbe', ['sarebbe', 'sarà', 'verrebbe']],
            ],
          },
          {
            id: 'c1-3',
            title: 'Expresiones idiomáticas',
            topic: 'Modismos y verbos pronominales',
            grammar: `
<h3>Modismos</h3>
<p>Se aprenden como bloques. A <em>In bocca al lupo!</em> («¡en la boca del lobo!») se responde <em>Crepi!</em> («¡que se muera!»).</p>
<h3>Verbos pronominales</h3>
<p>Combinan el verbo con <em>ci</em>, <em>ne</em> o <em>la</em> y cambian de significado:</p>
${tbl([['farcela', 'lograrlo, aguantar', 'Non ce la faccio più.'], ['andarsene', 'irse', 'Me ne vado.'], ['metterci', 'tardar (alguien)', "Ci metto un'ora."], ['volerci', 'hacer falta (impersonal)', 'Ci vogliono due ore.'], ['prendersela', 'ofenderse', 'Non te la prendere!'], ['cavarsela', 'arreglárselas', 'Me la cavo.']])}`,
            vocab: [
              ['In bocca al lupo!', '¡mucha suerte!'],
              ["Non vedo l'ora", 'no veo la hora'],
              ['essere al verde', 'estar sin plata'],
              ["costare un occhio della testa", 'costar un ojo de la cara'],
              ['Acqua in bocca!', '¡ni una palabra!'],
              ['prendere due piccioni con una fava', 'matar dos pájaros de un tiro'],
              ['Che barba!', '¡qué aburrido!'],
              ['fare la scarpetta', 'mojar pan en la salsa del plato'],
              ['avere le mani in pasta', 'estar metido en el asunto'],
              ['Crepi!', 'respuesta a «In bocca al lupo»'],
            ],
            sentences: [
              ['Non ce la faccio più!', '¡Ya no doy más!'],
              ['Me ne vado.', 'Me voy.'],
              ["Ci vuole un'ora.", 'Hace falta una hora.'],
            ],
            cloze: [
              ['Questa borsa costa un occhio della ___.', 'testa', ['testa', 'faccia', 'mano']],
              ['Ci ___ due ore per arrivare.', 'vogliono', ['vogliono', 'vuole', 'volete']],
              ["Domani ho l'esame. — In bocca al ___!", 'lupo', ['lupo', 'cane', 'gatto']],
            ],
          },
        ],
      },
    ],
  };
})();
