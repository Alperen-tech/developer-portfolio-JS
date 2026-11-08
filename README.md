# Developer Portfolio – JavaScript

## Om projektet
Det här är en fortsättning på min tidigare portfolio från u01. Jag har byggt vidare på sidan med JavaScript för att göra innehållet mer dynamiskt och interaktivt.

Portfolion är skapad med HTML, CSS och JavaScript.

### Funktioner

- CV hämtas från en separat JSON-fil.
- Projekt hämtas automatiskt från GitHubs API.
- Besökaren kan filtrera projekt efter programmeringsspråk.
- Dark Mode och Light Mode med localStorage.
- Laddningsmeddelanden och felhantering.
- Responsiv design.

## Länkar
**GitHub:** [https://github.com/Alperen-tech/developer-portfolio-JS](https://github.com/Alperen-tech/developer-portfolio-JS)

**Publicerad sida:**

---

# Reflektion

## 1. Datans väg – GitHub API
Jag använder `fetch()` i `projects.js` för att hämta mina publika projekt från GitHub. När sidan öppnas skickas en HTTP GET-request till GitHubs API.

GitHub skickar tillbaka en response med information om mina repositories i JSON-format. Jag använder `response.ok` för att kontrollera att anropet lyckades och `response.json()` för att omvandla svaret till JavaScript-data.

Sedan sparas projekten i arrayen `allProjects`. Funktionen `renderProjects()` går igenom projekten med `forEach()` och skapar HTML-element som visar projektens namn, beskrivningar och länkar.

Jag valde att använda GitHubs API eftersom mina nya projekt då kan visas automatiskt utan att jag behöver skriva in dem manuellt i HTML.

## 2. Två olika datakällor
Jag använder två datakällor i min portfolio.

Mitt CV finns i filen `cv.json`, som jag själv har skapat. Där kan jag ändra mina utbildningar och arbeten.

Mina projekt kommer från GitHubs API. Skillnaden är att JSON-filen finns i mitt eget projekt, medan GitHubs API är en extern tjänst som kräver internet.

Båda använder JSON-format, men API-anropet kan exempelvis misslyckas om GitHub inte svarar.

## 3. DOM och händelser
Jag använder DOM för att skapa och ändra innehåll på sidan med JavaScript.

I `cv.js` och `projects.js` använder jag `document.createElement()` för att skapa nya HTML-element. Jag använder också `textContent` för att lägga in information och `append()` för att placera elementen på sidan.

För interaktiviteten använder jag `addEventListener("click")`. Ett exempel är projektfiltreringen, där användaren klickar på en knapp för att välja vilka projekt som ska visas.

Jag använder samma metod för Dark Mode och Light Mode eftersom temat ska ändras när användaren trycker på knappen.

## 4. Semantik och tillgänglighet
Jag försökte behålla samma semantiska HTML som i min tidigare portfolio.

Projektkorten skapas med bland annat `article`, `h2`, `p` och `a`. CV-informationen visas i listor med `ul` och `li`.

Jag använder riktiga `button`-element för filtreringen och temaväxlingen. Det är viktigt eftersom användaren då kan använda knapparna med tangentbordet.

Jag använder `textContent` i stället för `innerHTML` när jag visar information från JSON och GitHub. Det är också säkrare eftersom texten inte tolkas som HTML-kod.

## 5. Dark Mode och Light Mode
Jag använder CSS-variabler för att hantera färgerna på sidan.

När användaren klickar på knappen lägger JavaScript till eller tar bort klassen `dark-mode` på HTML-elementet. CSS använder sedan olika färgvärden beroende på vilket tema som är aktivt.

Jag använder också `localStorage` för att spara användarens val, så att samma tema finns kvar när sidan uppdateras eller användaren byter sida.

Jag valde CSS-variabler eftersom det är enklare att ändra färger på ett ställe. Om jag hade ändrat varje färg direkt med JavaScript skulle koden blivit längre och svårare att underhålla.

## 6. Felhantering
När projekten hämtas visas texten `Loading projects...` så att besökaren förstår att något laddas.

Jag använder `try/catch` för att hantera fel. Om GitHub inte svarar eller anropet misslyckas visas ett felmeddelande på sidan.

Om GitHub skickar tillbaka en tom lista visas `No projects available yet.`

Jag tycker detta är viktigt eftersom besökaren annars kan tro att sidan är trasig.

## 7. Styrkor och brister
Jag tycker att en styrka med min portfolio är att den nu använder dynamiskt innehåll. Jag behöver inte längre skriva in alla projekt direkt i HTML.

Jag är också nöjd med att jag har lagt till filtrering och möjligheten att växla mellan ljust och mörkt läge.

En sak jag skulle vilja förbättra är designen på projektkorten. Jag skulle även vilja lägga till bilder och fler filtreringsalternativ.

Om jag hade mer tid skulle jag också dela upp JavaScript-koden i mindre moduler för att göra den enklare att underhålla.

## 8. AI-verktyg
Jag har använt ChatGPT som hjälp under arbetet, framför allt för att förstå JavaScript, få förslag på kod och hjälp med designen.

Jag har själv arbetat med koden i VS Code, lagt till filerna och testat funktionerna med Live Server.

Jag har även ändrat och anpassat koden till min tidigare portfolio. AI har varit ett stöd när jag har fastnat, men jag har försökt förstå hur funktionerna fungerar och varför de används.

---

## Tekniker
HTML5, CSS3, JavaScript, JSON, Fetch API, GitHub API och localStorage.

## Testning
Projektet har testats med Live Server och W3C HTML Validator.

## Utvecklare
Alperen Sen – FJS26
