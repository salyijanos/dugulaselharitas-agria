# SEO végrehajtási prompt – Duguláselhárítás Eger

Az alábbi promptot bemásolva a teljes SEO-fejlesztési csomag végrehajtható.

---

Hajtsd végre a korábban elkészített SEO-elemzés teljes csomagját a weboldalon az alábbiak szerint:

1. TELEPÜLÉS-BŐVÍTÉS: A telepulesek.html oldalon és a főoldal település-felhőjében
   add hozzá a Heves megyei nagyobb városokat: Pétervására, Bélapátfalva, Füzesabony,
   Verpelét, Recsk, Sirok, Kerecsend, Mónosbél, Szarvaskő. A telepulesek.html kapjon
   városonként rövid (2-3 mondatos), egyedi, magyaros leírást kártyában – nem sablonszöveget.
   A JSON-LD areaServed listát mindenhol bővítsd ugyanezekkel. A telepulesek.html
   title/description frissüljön: "Duguláselhárítás Heves megye" másodlagos kulcsszóval.

2. FIX ÁR MARADVÁNY: Az index.html FAQPage JSON-LD-jében az árakról szóló válaszban
   az "amit a helyszínen sem változtatok" részt írd át a várható áras kommunikációra
   (nem fix ár, tájékoztató jellegű). Ellenőrizd az összes oldalon, hogy nem maradt-e
   máshol fix árra utaló szöveg.

3. LLMS.TXT: Hozd létre a /llms.txt fájlt a gyökérben az elemzésben leírt tartalommal:
   markdown formátum, cégadatok, szolgáltatások, körzet (összes település), tájékoztató
   árak, elérhetőség, GYIK tömör válaszokkal. A robots.txt-be kerüljön hivatkozás rá.

4. OG:IMAGE: Készíts egy 1200x630 social megosztóképet (og-image sablon a meglévő
   sötét/türkiz designnal, "Duguláselhárítás Eger" felirattal és telefonszámmal),
   mentsd assets/img/og-image.jpg néven, és kösd be og:image + twitter:card meta
   tagekkel minden oldalon.

5. FAVICON CSOMAG: A meglévő SVG mellé generálj PNG fallbacket (192px, 512px),
   apple-touch-icon-t (180px), és készíts site.webmanifest fájlt; kösd be minden oldalon.

6. 404 OLDAL: Készíts 404.html-t a meglévő designnal (rövid szöveg, főoldal + telefon CTA).

7. GA4 + SEARCH CONSOLE: Építsd be a GA4 mérőkódot Consent Mode v2-vel úgy, hogy
   csak a sütisáv "Elfogadom" gombja után aktiválódjon a mérés (a meglévő cookie-consent
   localStorage értékhez kötve). A mérési azonosító helyére G-XXXXXXXXXX helyőrzőt tegyél,
   és az OLVASSEL.md-be írd le, hogyan kell megszerezni és becserélni, valamint a
   Search Console domain-igazolás és sitemap-beküldés lépéseit.

8. BREADCRUMB SCHEMA: Minden aloldalra (csokamerazas, arak, telepulesek, kapcsolat)
   tegyél BreadcrumbList JSON-LD-t a látható morzsamenüvel egyezően.

9. SITEMAP FRISSÍTÉS: A sitemap.xml minden URL-je kapjon lastmod dátumot (mai nap),
   és ellenőrizd, hogy minden élő oldal szerepel benne (a 404.html nem).

10. NAV JAVÍTÁS: Az index.html navigációjában javítsd az elcsúszott behúzást
    (Főoldal utáni sor), és ellenőrizd az összes oldalon a nav konzisztenciáját.

11. GOOGLE VÉLEMÉNY EMLÉKEZTETŐ: Az index.html vélemény-szekciójában lévő widget
    komment maradjon, de az OLVASSEL.md teendők közé kerüljön be újra láthatóan.

12. ELLENŐRZÉS: A végén futtass le egy ellenőrzést: nem maradt-e "Agria" a látható
    szövegekben (alternateName és domain kivételével), minden link működik-e
    (belső hivatkozások), és minden oldal tartalmazza-e az új meta tageket.
    Commitold és pushold a változásokat értelmes commit üzenettel.
