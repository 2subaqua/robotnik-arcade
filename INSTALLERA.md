# Robotnik Arcade på hemskärmen

Robotnik Arcade kan läggas som en ikon på hemskärmen, både på iPhone/iPad och Android. Spelet startar då i helskärm som en vanlig app och fungerar även utan nät, när det väl har öppnats en gång.

**Spelets adress:** https://2subaqua.github.io/robotnik-arcade/

Spelet måste öppnas från den adressen. Det går inte att lägga till från en nedladdad fil.

---

## iPhone och iPad (iOS)

1. Öppna spelets adress i **Safari**. På äldre iOS-versioner fungerar det bara i Safari, inte i Chrome eller andra webbläsare.
2. Tryck på **Dela**-knappen, fyrkanten med en pil uppåt. På iPhone sitter den längst ner i mitten, på iPad uppe till höger.
3. Bläddra nedåt i listan och tryck på **Lägg till på hemskärmen**.
4. Ändra namnet om du vill och tryck på **Lägg till** uppe till höger.

Ikonen hamnar på hemskärmen. Starta spelet därifrån för att få det i helskärm utan Safaris adressfält.

## Android

1. Öppna spelets adress i **Chrome**.
2. Tryck på menyn **⋮** uppe till höger.
3. Välj **Installera app** eller **Lägg till på startskärmen**. Namnet skiljer sig lite mellan olika telefoner.
4. Bekräfta med **Installera** eller **Lägg till**.

Ibland visar Chrome själv en ruta längst ner som erbjuder att installera spelet. Då räcker det att trycka på den.

Ikonen heter **Arcade** och hamnar på startskärmen eller bland apparna.

---

## Bra att veta

- **Uppdateringar:** När telefonen har nät hämtar spelet automatiskt den senaste versionen. Om en ändring inte syns, stäng spelet helt och öppna det igen.
- **Utan nät:** Har spelet öppnats en gång med nät startar det även i flygplansläge.
- **Ljud:** Ljudet börjar först när du har tryckt någonstans i spelet. Kontrollera också att telefonen inte står på ljudlöst. På iPhone stänger ljudlöst-knappen av spelljudet.
- **Topplistor och sparade spel:** De sparas på telefonen, i appen. Tar du bort ikonen kan de försvinna.
- **Ta bort spelet:** Håll fingret på ikonen och välj **Ta bort app** på iPhone, eller **Avinstallera** på Android.

## För den som lägger upp spelet på GitHub

Följande filer ska ligga i samma mapp på GitHub Pages för att spelet ska kunna installeras:

| Fil | Vad den gör |
|---|---|
| `index.html` | Själva spelet |
| `manifest.webmanifest` | Namn, ikoner och helskärmsläge |
| `icon-180.png` | Ikonen på iPhone och iPad |
| `icon-192.png`, `icon-512.png` | Ikonerna på Android |
| `sw.js` | Gör att spelet fungerar utan nät och hämtar nya versioner |

Vid en uppdatering räcker det att byta ut `index.html`.
