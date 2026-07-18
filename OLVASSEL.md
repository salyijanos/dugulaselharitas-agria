# Duguláselhárítás Eger – weboldal (átadási leírás)

Statikus weboldal (HTML/CSS/JS), külső keretrendszer nélkül. Bármilyen tárhelyre feltölthető, a fájlokat a domain gyökerébe kell másolni.

## Fájlszerkezet
- `index.html` – Főoldal (Duguláselhárítás Eger)
- `csokamerazas.html`, `arak.html`, `telepulesek.html`, `kapcsolat.html`
- `adatkezelesi-tajekoztato.html`
- `assets/css/style.css`, `assets/js/main.js`, `assets/img/favicon.svg`
- `sitemap.xml`, `robots.txt`

## Mielőtt élesítjük – teendők
1. **Kapcsolati űrlap (Formspree):** ✅ kész – a `kapcsolat.html` űrlapja a `https://formspree.io/f/maqroeea`
   címre küld. Ellenőrizd a Formspree fiókodban, hogy a `dugulaselharitas.agria@gmail.com` cím jóvá van hagyva
   értesítési címként, különben nem érkeznek meg az üzenetek. Érdemes bekapcsolni a beépített spamszűrőt is.
2. **Google vélemények (élő widget):** regisztrálj az elfsight.com vagy trustindex.io oldalon (van ingyenes csomag),
   kösd össze a Google Cégprofillal, másold ki a beágyazó kódot, és illeszd az `index.html`-ben a
   `<div class="reviews-widget ...">` blokkba (a kommentnél jelölve). A helyőrző vélemény-kártyák ekkor törölhetők.
   A „Írok egy véleményt" és „Összes vélemény" gombok már a te Google-profilodra mutatnak.
3. **Munkafotók:** az `index.html` „Munkáink" szekciójában a szürke helyőrző blokkokba tölthetsz fel valós képeket
   (`assets/img/` mappába rakd, majd `<img src="assets/img/munka-1.jpg" alt="...">` a blokkba). A méret automatikusan kitölti.
4. **Árak:** az `arak.html` már tartalmaz egy modern, tájékoztató árlistát (kiinduló „-tól" árakkal). Az összegek a `.price-row` sorokban bármikor átírhatók a friss árakra – a szöveg maradhat.
5. **Cégadatok:** az `adatkezelesi-tajekoztato.html`-ben töltsd ki a `[kitöltendő]` részeket (székhely, adószám).
6. **Domain:** a `https://dugulaselharitas-agria.hu/` domaint erre a statikus oldalra kell irányítani
   (a régi WordPress helyett). A canonical és sitemap URL-ek már ehhez a domainhez vannak beállítva.

## SEO / AEO ami már be van építve
- Fő kulcsszavakra optimalizált címsorok és leírások (duguláselhárítás Eger, WÖMA, csőkamerázás, települések)
- `LocalBusiness/Plumber`, `Service`, `FAQPage`, `ContactPage` strukturált adat (JSON-LD)
- Egységes NAP-adat (név, telefon), geo meta, Open Graph
- `robots.txt` az AI-keresőrobotoknak is engedélyezve (AEO), `sitemap.xml`
- GYIK a nyelvi modellek által idézhető, tömör válaszokkal

## Ajánlott következő lépések az élesítés után
- Google Business profil frissítése ugyanezekkel az adatokkal
- Google Search Console: domain igazolása és a `sitemap.xml` beküldése
- Néhány valós ügyfélvélemény beépítése (bizalom + SEO)
