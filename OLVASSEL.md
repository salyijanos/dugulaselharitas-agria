# Duguláselhárítás Eger – weboldal (átadási leírás)

Statikus weboldal (HTML/CSS/JS), külső keretrendszer nélkül. Bármilyen tárhelyre feltölthető, a fájlokat a domain gyökerébe kell másolni.

## Fájlszerkezet
- `index.html` – Főoldal (Duguláselhárítás Eger)
- `csokamerazas.html`, `arak.html`, `telepulesek.html`, `kapcsolat.html`
- `adatkezelesi-tajekoztato.html`, `404.html`
- `assets/css/style.css`, `assets/js/main.js`
- `assets/img/` – faviconok (SVG + PNG), apple-touch-icon, og-image, munkafotók
- `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`

## Mielőtt élesítjük – teendők

1. **Kapcsolati űrlap (Formspree):** ✅ kész – a `kapcsolat.html` űrlapja a `https://formspree.io/f/maqroeea`
   címre küld. Ellenőrizd a Formspree fiókodban, hogy a `dugulaselharitas.agria@gmail.com` cím jóvá van hagyva
   értesítési címként, különben nem érkeznek meg az üzenetek. Érdemes bekapcsolni a beépített spamszűrőt is.

2. **Google vélemények (élő widget) – MÉG TEENDŐ:** regisztrálj az elfsight.com vagy trustindex.io oldalon
   (van ingyenes csomag), kösd össze a Google Cégprofillal, másold ki a beágyazó kódot, és illeszd az
   `index.html`-ben a `<div class="reviews-widget ...">` blokkba (a kommentnél jelölve). A helyőrző
   vélemény-kártyák ekkor törölhetők. A „Írok egy véleményt" és „Összes vélemény" gombok már a te
   Google-profilodra mutatnak.

3. **GA4 mérési azonosító – MÉG TEENDŐ:**
   1. Menj a https://analytics.google.com oldalra, jelentkezz be a Google-fiókoddal.
   2. Admin → Fiók létrehozása → Tulajdon (Property) létrehozása → add meg az oldal nevét és a magyar időzónát.
   3. Adatfolyam (Data stream) → Web → írd be: `https://dugulaselharitas-agria.hu`.
   4. Megkapod a **mérési azonosítót** (formátuma: `G-XXXXXXXXXX`).
   5. Az `assets/js/main.js` fájlban cseréld ki a `var GA_ID = "G-XXXXXXXXXX";` sor helyőrzőjét a sajátodra.
   A mérés GDPR-kompatibilis: csak akkor indul el, ha a látogató a sütisávban az „Elfogadom" gombra kattint.
   Amíg a helyőrző van benne, semmilyen mérőkód nem töltődik be.

4. **Google Search Console – élesítés után:**
   1. https://search.google.com/search-console → Tulajdon hozzáadása → Domain típus → `dugulaselharitas-agria.hu`.
   2. A megjelenő TXT rekordot vedd fel a domain DNS beállításainál (a domainszolgáltatód admin felületén).
   3. Az igazolás után: Sitemaps menü → add be: `https://dugulaselharitas-agria.hu/sitemap.xml`.
   4. Pár nap múlva itt látod, mely kulcsszavakra jelenik meg az oldal.

5. **Cégadatok:** az `adatkezelesi-tajekoztato.html`-ben töltsd ki a `[kitöltendő]` részeket (székhely, adószám).

6. **Domain:** a `https://dugulaselharitas-agria.hu/` domaint erre a statikus oldalra kell irányítani
   (a régi WordPress helyett). A canonical és sitemap URL-ek már ehhez a domainhez vannak beállítva.
   Élesítéskor a régi WordPress URL-ekről érdemes 301 átirányítást beállítani a főoldalra.

7. **Árak frissítése:** az `arak.html` `.price-row` soraiban az összegek bármikor átírhatók.

## SEO / AEO ami már be van építve
- Fő kulcsszavakra optimalizált címsorok (duguláselhárítás Eger, Heves megye, Füzesabony, Bélapátfalva, Pétervására stb.)
- `Plumber`, `Service`, `FAQPage`, `ContactPage`, `BreadcrumbList` strukturált adat (JSON-LD), geo-koordináták
- `llms.txt` a nyelvi modelleknek (AEO) – a robots.txt hivatkozik rá
- Open Graph megosztókép (`assets/img/og-image.jpg`) minden oldalon
- Teljes favicon-csomag (SVG + PNG + apple-touch-icon + webmanifest)
- 404 hibaoldal, sitemap lastmod dátumokkal, AI-robotok engedélyezve

## Ajánlott következő lépések az élesítés után
- **Google Business profil** frissítése ugyanezekkel az adatokkal (név: Duguláselhárítás Eger, telefon, körzet) – a térképes találatokhoz ez a legfontosabb
- Vélemények gyűjtése a Google profilra (minden elégedett ügyféltől kérj egyet)
- Search Console beküldés (lásd fent, 4. pont)
