/* Vlastní úpravy jen pro kokpit Evy (aktualizace šablony na ně nesahá).

   Přírodní okénko: obloukové okno do zahrady s lesem (barvy podle ročního
   období) a pod ním krátce, které bylinky a houby se dnes sbírají a k čemu
   jsou. Vzhled je ve vlastni.css. */
(() => {
  // světlý vzhled: lišta prohlížeče na telefonu v barvě stránky (index.html má tmavou ze šablony)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#fdf7f8');

  // [název, co se sbírá, od, do, k čemu, pozor]
  const BYLINKY = [
    ['Podběl lékařský', 'květy', '03-01', '04-20', 'čaj na kašel a průdušky', 'pít jen krátce, pár dní'],
    ['Medvědí česnek', 'listy', '03-15', '05-10', 'pesto a pomazánky, podpora trávení', 'záměna s konvalinkou a ocúnem — pravý list voní česnekem'],
    ['Kopřiva dvoudomá', 'mladé listy', '03-20', '06-15', 'čaj na pročištění, do polévky a nádivky'],
    ['Sedmikráska', 'květy', '03-15', '10-31', 'do salátu, čaj na kašel'],
    ['Plicník lékařský', 'nať', '03-20', '05-15', 'čaj na dýchací cesty'],
    ['Bříza bělokorá', 'míza', '03-01', '03-31', 'jarní pročišťující nápoj', 'navrtat jen se svolením majitele lesa'],
    ['Vrba bílá', 'kůra', '03-01', '04-15', 'odvar při horečce a bolesti', 'kůru jen z ořezaných větví'],
    ['Pampeliška', 'listy a květy', '04-01', '05-31', 'listy do salátu, z květů sirup — játra a trávení'],
    ['Bříza bělokorá', 'mladé listy', '04-20', '05-31', 'močopudný čaj na pročištění'],
    ['Smrk ztepilý', 'mladé výhonky', '04-25', '05-31', 'sirup na kašel', 'jen pár výhonků z každého stromu'],
    ['Hloh', 'květy s listy', '05-01', '05-31', 'čaj pro srdce a krevní oběh'],
    ['Jahodník obecný', 'listy', '05-01', '06-30', 'jemný čaj místo černého'],
    ['Ostružiník', 'listy', '05-01', '06-30', 'čaj při průjmu'],
    ['Jitrocel kopinatý', 'listy', '05-01', '09-30', 'sirup na kašel, čerstvý list na drobné rány'],
    ['Meduňka lékařská', 'listy', '05-15', '09-15', 'čaj na nervy a klidný spánek'],
    ['Šalvěj lékařská', 'listy', '05-15', '09-30', 'kloktání při bolesti v krku'],
    ['Tymián obecný', 'nať', '05-15', '08-31', 'čaj a sirup na kašel'],
    ['Bez černý', 'květy', '05-20', '06-25', 'sirup a čaj při nachlazení'],
    ['Heřmánek pravý', 'květy', '05-20', '08-15', 'čaj na žaludek, inhalace, obklady'],
    ['Máta peprná', 'nať', '06-01', '09-15', 'čaj na trávení a nadýmání'],
    ['Mateřídouška', 'kvetoucí nať', '06-01', '08-31', 'čaj na kašel, do koupele'],
    ['Kontryhel obecný', 'nať', '06-01', '08-15', 'čaj pro ženy'],
    ['Lípa srdčitá', 'květy s listenem', '06-15', '07-15', 'čaj na pocení při nachlazení'],
    ['Třezalka tečkovaná', 'kvetoucí nať', '06-15', '08-15', 'čaj na náladu, olej na kůži', 'nebrat s léky, třeba s antikoncepcí — oslabuje jejich účinek'],
    ['Řebříček obecný', 'kvetoucí nať', '06-15', '09-15', 'čaj na trávení a ženské potíže'],
    ['Měsíček lékařský', 'květy', '06-15', '10-15', 'mast a olej na pleť a hojení'],
    ['Levandule lékařská', 'květy', '06-20', '08-15', 'do polštářku a čaje na spánek'],
    ['Borůvka', 'plody', '07-01', '08-31', 'sušené plody při průjmu'],
    ['Vřes obecný', 'kvetoucí nať', '08-01', '09-30', 'čaj na močové cesty a spánek'],
    ['Ostružiník', 'plody', '08-01', '09-30', 'džem a šťáva plná vitamínů'],
    ['Bez černý', 'plody', '08-15', '09-30', 'povidla a sirup pro imunitu', 'syrové nejíst — jen tepelně upravené'],
    ['Brusinka', 'plody', '08-15', '10-15', 'k masu, pro močové cesty'],
    ['Ostropestřec mariánský', 'semena', '08-15', '09-30', 'čaj pro játra'],
    ['Rakytník řešetlákový', 'plody', '09-01', '11-15', 'šťáva plná vitamínu C'],
    ['Pampeliška', 'kořen', '09-15', '10-31', 'odvar pro játra a žlučník'],
    ['Šípek', 'plody', '09-15', '12-15', 'čaj s vitamínem C pro imunitu'],
    ['Hloh', 'plody', '09-15', '10-31', 'čaj pro srdce'],
    ['Jeřáb ptačí', 'plody', '09-15', '10-31', 'po mrazíku džem, vitamín C', 'syrové nejíst'],
    ['Kozlík lékařský', 'kořen', '09-15', '10-31', 'čaj na spánek a nervy'],
    ['Lopuch větší', 'kořen', '09-15', '11-15', 'odvar na pleť a pročištění'],
    ['Kopřiva dvoudomá', 'kořen', '09-20', '11-15', 'odvar pro muže — prostata'],
    ['Křen selský', 'kořen', '10-01', '03-15', 'na nachlazení a ucpané dutiny'],
    ['Kostival lékařský', 'kořen', '10-01', '11-30', 'mast na klouby a modřiny', 'jen zevně'],
    ['Trnka', 'plody', '10-15', '12-15', 'po mrazíku povidla a likér, trávení'],
    ['Jmelí bílé', 'nať', '12-01', '02-28', 'čaj na krevní tlak', 'bobule jsou jedovaté'],
    ['Borovice lesní', 'pupeny', '02-15', '04-15', 'sirup na kašel', 'jen pár pupenů z každého stromu'],
  ];

  // [název, od, do, kde roste, k čemu, pozor]
  const HOUBY = [
    ['Smrž obecný', '04-01', '05-20', 'pod jasany a v sadech', 'jemná omáčka, jen tepelně upravený', 'záměna s jedovatým ucháčem — ten má zprohýbaný, mozkovitý klobouk'],
    ['Čirůvka májovka', '04-20', '06-20', 'louky a zahrady, roste v kruzích', 'do omáček a polévek', 'záměna s jedovatou závojenkou olovovou'],
    ['Ucho Jidášovo', '11-01', '04-30', 'na kmenech bezu černého', 'do polévek a asijských jídel'],
    ['Hlíva ústřičná', '10-15', '03-31', 'na kmenech listnáčů, i v zimě', 'na másle nebo jako řízek'],
    ['Penízovka sametonohá', '11-01', '03-31', 'na pařezech listnáčů, i za mrazu', 'do polévky', 'záměna se smrtelně jedovatou čepičatkou jehličnanovou'],
    ['Hřib dubový', '05-15', '09-30', 'pod duby a buky', 'sušení a smaženice', 'nezaměnit s jedovatým hřibem satanem — bělavý klobouk, červené póry'],
    ['Hřib kovář', '05-15', '10-15', 'smrčiny i bučiny', 'jen tepelně upravený, na řezu modrá'],
    ['Liška obecná', '06-15', '10-15', 'v mechu jehličnatých i listnatých lesů', 'smažená s vejci'],
    ['Křemenáč osikový', '06-15', '10-15', 'pod osikami', 'smaženice, vařením tmavne'],
    ['Kozák březový', '06-15', '10-15', 'pod břízami', 'smaženice a polévka'],
    ['Pečárka polní', '06-15', '10-15', 'pastviny a louky', 'na smetaně', 'bílé lupeny = nesbírat, to je muchomůrka; pečárka je má růžové až hnědé'],
    ['Pýchavka obecná', '06-15', '10-15', 'lesy a louky', 'mladá na řízky', 'vždy rozkrojit — uvnitř musí být celá bílá'],
    ['Hřib smrkový', '07-01', '10-31', 'smrčiny', 'sušení a polévka', 'záměna s hořkým hřibem žlučníkovým — má růžové rourky'],
    ['Klouzek obecný', '07-01', '10-31', 'mladé borové lesy', 'do smaženice, slizkou kůžičku sloupnout'],
    ['Bedla vysoká', '07-15', '10-31', 'okraje lesa a paseky', 'klobouk jako řízek', 'bedla má posuvný prsten a hadovitý vzor na třeni — jinak muchomůrka'],
    ['Ryzec pravý', '08-01', '10-31', 'mladé borové lesy', 'na másle, roní oranžové mléko'],
    ['Kotrč kadeřavý', '08-15', '10-31', 'u pařezů borovic', 'jako řízek nebo do polévky'],
    ['Václavka obecná', '09-15', '11-15', 'v trsech na pařezech', 'jen dobře povařená, první vodu slít', 'syrová je jedovatá'],
    ['Čirůvka fialová', '10-01', '12-15', 'v jehličí a na kompostu', 'do polévky, jen tepelně upravená', 'záměna s fialovými pavučinci — ti mají pod kloboukem pavučinku'],
  ];

  const RADY = [
    'Čas zásob. Sušené byliny skladuj v suchu a tmě, nejdéle rok.',
    'Na kmenech roste hlíva a penízovka. Pupeny borovic se už nalévají.',
    'První jarní byliny. Trhej jen čisté rostliny daleko od cest a polí.',
    'Mladé listy mají nejvíc síly. Sbírej dopoledne, až oschne rosa.',
    'Sbírej za sucha a před polednem, suš ve stínu, nikdy na slunci.',
    'Vrchol květů. Trhej je hned po rozkvětu, dokud jsou svěží.',
    'Nať sbírej na začátku květu a suš v tenké vrstvě ve stínu.',
    'Zralé plody a semena sbírej za suchého počasí.',
    'Začíná čas kořenů. Ryj je, až nať začne žloutnout.',
    'Kořeny a plody. Šípky a trnky jsou po prvním mrazíku sladší.',
    'Poslední kořeny před zámrazem. Houby rostou i na pařezech.',
    'Zimní houby na kmenech. Byliny už jen ze zásob.',
  ];

  const DNY = {
    '06-24': 'Svatý Jan — byliny natrhané o svatojánské noci mají podle tradice největší sílu.',
    '08-15': 'Nanebevzetí Panny Marie — v lidové tradici den svěcení bylin.',
  };

  const SEZONY = ['zima', 'zima', 'jaro', 'jaro', 'jaro', 'leto', 'leto', 'leto', 'podzim', 'podzim', 'podzim', 'zima'];
  const NAZVY_SEZON = { jaro: 'jaro', leto: 'léto', podzim: 'podzim', zima: 'zima' };

  const md = (s) => +s.slice(0, 2) * 100 + +s.slice(3, 5);
  const den = (d) => (d.getMonth() + 1) * 100 + d.getDate();
  const vObdobi = (dnes, od, do_) => (md(od) <= md(do_) ? dnes >= md(od) && dnes <= md(do_) : dnes >= md(od) || dnes <= md(do_));
  // kolik dní do konce / od začátku (pro štítky „právě začíná“ / „poslední dny“)
  const naDatum = (rok, s) => new Date(rok, +s.slice(0, 2) - 1, +s.slice(3, 5));
  const dniMezi = (a, b) => Math.round((b - a) / 864e5);
  const stitek = (d, od, do_) => {
    const r = d.getFullYear();
    let zacatek = naDatum(r, od), konec = naDatum(r, do_);
    if (zacatek > konec) { if (d >= zacatek) konec = naDatum(r + 1, do_); else zacatek = naDatum(r - 1, od); }
    if (dniMezi(d, konec) <= 7) return 'poslední dny';
    if (dniMezi(zacatek, d) <= 7) return 'právě začíná';
    return '';
  };
  // každý den jiný výběr, posouvá se o celou dávku, takže se za pár dní vystřídá všechno
  const vyber = (seznam, kolik, poradiDne) => {
    if (seznam.length <= kolik) return seznam;
    const start = (poradiDne * kolik) % seznam.length;
    return Array.from({ length: kolik }, (_, i) => seznam[(start + i) % seznam.length]);
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ------------------------------------------------ výhled z okna */

  function vyhled() {
    const smrk = (x, z, v, s) => `M${x - s} ${z}L${x} ${z - v}L${x + s} ${z}Z`;
    let daleko = '', blizko = '', listnace = '';
    for (let x = -6, i = 0; x < 340; x += 13, i++) daleko += smrk(x, 152, 26 + ((i * 7) % 5) * 5, 8);
    const rada = [[18, 52], [44, 64], [96, 46], [214, 58], [246, 72], [276, 54], [312, 66]];
    for (const [x, v] of rada) blizko += smrk(x, 176, v, 13);
    for (const [x, r] of [[70, 17], [138, 14], [184, 19]]) {
      listnace += `<circle class="o-koruna" cx="${x}" cy="${172 - r * 1.6}" r="${r}"/><path class="o-kmen" d="M${x} ${174}V${172 - r * 0.9}"/>`;
    }
    const plot = Array.from({ length: 11 }, (_, i) => {
      const x = 8 + i * 11;
      return `<path d="M${x} 214V199Q${x + 2.5} 195 ${x + 5} 199V214"/>`;
    }).join('');
    const snih = Array.from({ length: 34 }, (_, i) => `<circle cx="${(i * 47) % 320}" cy="${(i * 29) % 190 + 8}" r="${i % 3 ? 1 : 1.5}"/>`).join('');

    return `
<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <defs><linearGradient id="o-nebe" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" class="o-nebe-1"/><stop offset="1" class="o-nebe-2"/></linearGradient></defs>
  <rect width="320" height="240" fill="url(#o-nebe)"/>
  <circle class="o-slunce" cx="204" cy="82" r="28"/>
  <path class="o-les-daleko" d="${daleko}"/>
  <path class="o-louka-daleko" d="M0 150Q80 142 160 149T320 146V240H0Z"/>
  <g class="o-listnace">${listnace}</g>
  <path class="o-les" d="${blizko}"/>
  <path class="o-snih-stromy" d="${rada.map(([x, v]) => `M${x - 4} ${176 - v + 10}L${x} ${176 - v}L${x + 4} ${176 - v + 10}`).join('')}"/>
  <path class="o-louka" d="M0 178Q70 168 150 176T320 172V240H0Z"/>
  <g class="o-plot">${plot}<path d="M4 203H126M4 209H126"/></g>
  <g class="o-bylinky">
    <path d="M168 232C168 214 166 202 160 190M163 206C156 204 152 199 151 193C157 194 161 199 163 206M165 214C172 211 176 206 177 200C171 201 167 206 165 214"/>
    <path d="M186 232C187 218 190 208 196 198M189 216C183 213 180 208 180 202C185 204 188 209 189 216"/>
    <path d="M140 232C140 220 138 212 134 204M138 218C143 216 146 212 147 207C142 208 139 212 138 218"/>
    <circle class="o-kvet" cx="160" cy="188" r="3.2"/><circle class="o-kvet" cx="196" cy="196" r="2.8"/><circle class="o-kvet" cx="134" cy="202" r="2.6"/>
  </g>
  <g class="o-houba">
    <path class="o-noha" d="M224 230C225 222 225 216 224 210H234C233 216 233 222 234 230Z"/>
    <path class="o-klobouk" d="M214 212C214 200 222 193 229 193C237 193 245 200 245 212C238 214 221 214 214 212Z"/>
  </g>
  <g class="o-snih">${snih}</g>
</svg>`;
  }

  /* ------------------------------------------------ obsah */

  function obsah(d) {
    const dnes = den(d);
    const poradi = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
    const bylinky = vyber(BYLINKY.filter((b) => vObdobi(dnes, b[2], b[3])), 3, poradi);
    const houby = vyber(HOUBY.filter((h) => vObdobi(dnes, h[1], h[2])), 2, poradi);
    const sezona = SEZONY[d.getMonth()];
    const datum = new Intl.DateTimeFormat('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' }).format(d);
    const klicDne = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const znacka = (s) => (s ? ` <span class="ok-stitek">${s}</span>` : '');

    const radkyBylinek = bylinky.map(([jmeno, cast, od, do_, k, pozor]) => `
      <li>
        <p class="ok-jmeno">${esc(jmeno)} <span class="ok-cast">${esc(cast)}</span>${znacka(stitek(d, od, do_))}</p>
        <p class="ok-k">${esc(k)}</p>
        ${pozor ? `<p class="ok-pozor">${esc(pozor)}</p>` : ''}
      </li>`).join('');
    const radkyHub = houby.map(([jmeno, od, do_, kde, k, pozor]) => `
      <li>
        <p class="ok-jmeno">${esc(jmeno)} <span class="ok-cast">${esc(kde)}</span>${znacka(stitek(d, od, do_))}</p>
        <p class="ok-k">${esc(k)}</p>
        ${pozor ? `<p class="ok-pozor">${esc(pozor)}</p>` : ''}
      </li>`).join('');

    return {
      sezona,
      html: `
  <div class="okenko-vyhled">${vyhled()}</div>
  <div class="okenko-text">
    <p class="okenko-datum">${esc(datum)} · ${NAZVY_SEZON[sezona]}</p>
    <h2 id="okenko-titulek">Co dnes sbírat</h2>
    <p class="okenko-rada">${esc(DNY[klicDne] || RADY[d.getMonth()])}</p>
    <div class="okenko-sloupce">
      <section><h3>Bylinky</h3>${radkyBylinek ? `<ul>${radkyBylinek}</ul>` : '<p class="ok-k">Venku teď nic — sáhni do sušených zásob.</p>'}</section>
      ${radkyHub ? `<section><h3>Houby</h3><ul>${radkyHub}</ul></section>` : ''}
    </div>
    <p class="okenko-pata">Sbírej jen to, co bezpečně poznáš.</p>
  </div>`,
    };
  }

  /* ------------------------------------------------ vložení
     Na širokém displeji sloupec vpravo vedle poznámek i zakázek (drží se při
     posouvání), na užším mezi poznámkami a zakázkami — pořadí řeší znacka.css. */

  const main = document.querySelector('#app > main');
  if (!main || main.querySelector('.okenko')) return;
  const sloupec = document.createElement('div');
  sloupec.className = 'hlavni-sloupec';
  sloupec.append(...main.children);
  const okenko = document.createElement('aside');
  okenko.className = 'okenko';
  okenko.setAttribute('aria-labelledby', 'okenko-titulek');
  main.classList.add('s-okenkem');
  main.append(sloupec, okenko);

  function vykresli() {
    const d = new Date();
    const { sezona, html } = obsah(d);
    okenko.dataset.sezona = sezona;
    okenko.innerHTML = html;
    // o půlnoci nový den
    const zitra = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 5);
    setTimeout(vykresli, zitra - d);
  }
  vykresli();

  // jen pro náhled: ?den=2026-06-24 ukáže okénko pro jiný den
  const naNahled = new URLSearchParams(location.search).get('den');
  if (naNahled && /^\d{4}-\d{2}-\d{2}$/.test(naNahled)) {
    const d = new Date(`${naNahled}T12:00:00`);
    const { sezona, html } = obsah(d);
    okenko.dataset.sezona = sezona;
    okenko.innerHTML = html;
  }
})();
