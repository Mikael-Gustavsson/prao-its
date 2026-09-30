# PRAO på ITS: Veckoplan för elever i årskurs 9

## Översikt

Detta dokument beskriver ett förslag för en veckas PRAO för två elever i årskurs 9 på ITS vid Umeå universitet.

Veckan ska ge eleverna:

- En förståelse för vad ITS gör.
- En inblick i flera olika IT-yrken.
- Erfarenhet av att intervjua fem anställda.
- En grundläggande bild av hur en programmerare arbetar.
- Praktisk erfarenhet av VS Code, GitHub och GitHub Copilot.
- Erfarenhet av att planera, skapa, testa och visa upp ett litet webbaserat spel.
- Träning i att använda en AI-agent som stöd utan att okritiskt kopiera dess svar.

Upplägget är anpassat för nybörjare i årskurs 9. Fokus ligger på nyfikenhet, arbetsprocess, problemlösning och ett synligt resultat. Målet är inte att eleverna ska lära sig alla tekniker på en vecka.

---

## Ramar för veckan

- **Antal elever:** 2
- **Målgrupp:** Årskurs 9
- **Plats:** ITS, Umeå universitet
- **Arbetstid:** 09.00-15.30
- **Tid på plats:** 6,5 timmar per dag inklusive raster
- **Förmiddagsfika:** 09.30-10.00
- **Lunch:** 11.30-12.30
- **Eftermiddagsfika:** 14.30-15.00
- **Arbetsform:** Eleverna arbetar huvudsakligen tillsammans
- **Slutmål:** Ett litet webbaserat spel som kan köras lokalt och demonstreras på fredagen

### Pedagogiska principer

- Korta genomgångar följda av praktiskt arbete.
- Synliga resultat redan första dagen.
- Små steg som går att testa var för sig.
- Regelbundna byten av arbetsroller.
- Frågor och förståelse är viktigare än stor mängd kod.
- Docker är en demonstration eller bonus, inte ett krav.
- Eleverna arbetar aldrig med riktiga personuppgifter, produktionssystem eller intern källkod.

---

## Förväntat resultat efter veckan

Eleverna ska efter veckan kunna beskriva:

- Vad ITS gör.
- Minst fem olika yrkesroller inom ITS.
- Några vanliga delar av en programmerares arbetsdag.
- Skillnaden mellan HTML, CSS och JavaScript på en grundläggande nivå.
- Hur man öppnar och ändrar ett projekt i VS Code.
- Hur man ber GitHub Copilot om hjälp stegvis.
- Hur man provar och granskar AI-genererade förslag.
- Hur man sparar kod med en enkel commit och push till GitHub.
- Hur deras spel fungerar och hur de testade det.
- Ett problem de stötte på och hur de löste det.

Eleverna behöver inte förstå varje kodrad eller behärska avancerad Git, Docker eller JavaScript.

---

# Tekniska och administrativa förutsättningar

## E-post och GitHub-konton

Varje elev behöver före eller i början av veckan:

- En fungerande e-postadress som eleven kan läsa under veckan.
- Ett eget GitHub-konto.
- Ett unikt lösenord som inte återanvänds från andra tjänster.
- Tillgång till eventuell autentiseringsapp om tvåfaktorsautentisering krävs.
- Möjlighet att verifiera sin e-postadress.
- Godkännande enligt skolans och universitetets rutiner för minderåriga och externa molntjänster.

Eleverna bör välja neutrala användarnamn. Fullständigt namn, skola, klass, privat e-postadress och andra personuppgifter ska inte publiceras i projektet.

## Tillfällig anknytning till ITS GitHub Enterprise

ITS GitHub-administratör ska före veckan besluta vilken kontomodell som gäller.

### Rekommenderad modell för en kort PRAO

1. Eleverna använder egna personliga GitHub-konton.
2. Kontona bjuds tillfälligt in till en avgränsad ITS-organisation, ett team eller specifika privata repositoryn.
3. Eleverna får endast den behörighet som behövs för PRAO-projektet.
4. Eleverna tilldelas varsin tillfällig GitHub Copilot-licens.
5. All ITS-åtkomst och alla tillfälliga licenser tas bort efter veckan.

### Behörighetsprinciper

- Använd privata PRAO-repositoryn.
- Ge normalt skrivbehörighet, inte administratörsbehörighet.
- Ge ingen åtkomst till produktionskod eller ordinarie interna repositoryn.
- Använd vid behov ett särskilt tillfälligt team, exempelvis `prao-vecka`.
- Använd endast exempeldata och spelkod.
- Publicera inte spelet på internet om detta inte har godkänts i förväg.

Om ITS använder centralt hanterade GitHub-identiteter ska GitHub Enterprise-administratören avgöra om andra typer av konton krävs. Kontomodellen ska vara beslutad och testad innan eleverna anländer.

---

# Förberedelser före PRAO-veckan

## Minst en vecka före

- [ ] Kontrollera att båda eleverna har fungerande e-postadresser.
- [ ] Bestäm vilken typ av GitHub-konto eleverna ska använda.
- [ ] Kontrollera rutiner för minderåriga och externa molntjänster.
- [ ] Förankra upplägget med GitHub Enterprise-administratören.
- [ ] Säkerställ att eleverna kan bjudas in med begränsad behörighet.
- [ ] Reservera två GitHub Copilot-licenser.
- [ ] Skapa privata och avgränsade PRAO-repositoryn.
- [ ] Boka fem intervjupersoner med olika yrkesroller.
- [ ] Förbered ett enkelt startprojekt för spelet.
- [ ] Förbered ett lokalt reservprojekt som fungerar utan GitHub och Copilot.
- [ ] Testa nätverk, GitHub, Copilot och Docker i aktuell datormiljö.
- [ ] Säkerställ att inga känsliga system eller uppgifter kommer att visas.
- [ ] Utse en huvudhandledare och en reservperson.
- [ ] Informera berörda medarbetare om elevernas tider och upplägg.

## Rekommenderad datorförberedelse

Eleverna får gärna uppleva hur en utvecklingsmiljö sätts upp, men veckan ska inte vara beroende av långa installationer. Följande bör därför vara installerat eller åtminstone testat i förväg:

- VS Code
- Git
- Modern webbläsare
- Docker, om Docker ska demonstreras
- Nödvändiga VS Code-tillägg

Eleverna kan själva:

- Logga in.
- Öppna VS Code.
- Ansluta VS Code till GitHub.
- Aktivera GitHub Copilot.
- Klona sitt PRAO-repository.
- Göra en teständring.

Detta ger en autentisk upplevelse utan att installation och kontoproblem tar över veckan.

---

# Säkerhetsregler för eleverna

Gå igenom reglerna på måndag och håll dem synliga under veckan.

1. Lägg aldrig lösenord, nycklar eller tokens i koden.
2. Lägg aldrig riktiga personuppgifter i spelet eller README-filen.
3. Kopiera inte intern universitetskod eller intern information till Copilot.
4. Skriv inte information från interna system i frågor till Copilot.
5. Installera inte program eller tillägg utan att fråga handledaren.
6. Öppna endast system och repositoryn som handledaren har anvisat.
7. Acceptera inte kod från Copilot utan att först försöka förstå och testa den.
8. Fråga handledaren om något verkar oklart, känsligt eller osäkert.

---

# Arbetssätt för två elever

För att båda ska vara aktiva byter eleverna roller ungefär var 30:e minut.

## Pilot

- Använder tangentbord och mus.
- Genomför det steg som paret har kommit överens om.
- Beskriver högt vad som ändras.

## Navigatör

- Läser uppgiften.
- Hjälper till att formulera frågor till Copilot.
- Antecknar vad som har testats.
- Kontrollerar att båda förstår vad nästa steg är.

Rollerna är likvärdiga. Ingen elev ska vara permanent programmerare eller hjälpare.

## Rekommenderad arbetscykel

Ett längre arbetspass delas upp så här:

- 10 minuter: kort genomgång och mål.
- 25 minuter: praktiskt arbete.
- 5 minuter: avstämning.
- 20 minuter: fortsatt arbete eller test.
- 10 minuter: sammanfattning och dokumentation.

---

# Veckoschema

## Måndag: Upptäcka ITS och komma igång

**Dagens mål:** Eleverna ska känna sig välkomna, förstå veckans mål, möta sin första yrkesroll och få ett synligt tekniskt resultat.

| Tid | Aktivitet |
|---|---|
| 09.00-09.30 | Välkomnande, presentation, veckans mål och praktiska regler |
| 09.30-10.00 | Fika |
| 10.00-10.30 | Rundvandring på ITS |
| 10.30-11.00 | Informationssäkerhet, personuppgifter, lösenord och Copilot-regler |
| 11.00-11.30 | Kontrollera GitHub-konton, verifiera e-post och acceptera ITS-inbjudan |
| 11.30-12.30 | Lunch |
| 12.30-13.00 | Intervju 1: systemutvecklare |
| 13.00-13.30 | Introduktion till VS Code, GitHub och projektets filer |
| 13.30-14.30 | Klona startprojektet och ändra exempelvis rubrik, färger och spelinstruktion |
| 14.30-15.00 | Fika |
| 15.00-15.20 | Göra en test-commit och push till GitHub |
| 15.20-15.30 | Loggbok och kort avstämning |

### Måndagens kontrollpunkter

Eleverna ska kunna:

- Logga in på GitHub.
- Läsa e-post från GitHub.
- Acceptera ITS-inbjudan.
- Hitta rätt repository.
- Klona repositoryt.
- Öppna projektet i VS Code.
- Logga in i GitHub Copilot från VS Code.
- Göra en enkel ändring.
- Skapa en commit och pusha den.

### Första testuppgiften

Lägg till följande i `README.md`:

- Förnamn eller smeknamn.
- Tre saker ni vill lära er under veckan.
- Ett förslag på hur spelet ska se ut.

Undvik efternamn, skola, klass och privata kontaktuppgifter.

---

## Tisdag: Webbutveckling och frågor till Copilot

**Dagens mål:** Förstå grunderna i HTML, CSS och JavaScript samt börja forma spelets utseende.

| Tid | Aktivitet |
|---|---|
| 09.00-09.30 | Kort introduktion till HTML, CSS, JavaScript och webbläsaren |
| 09.30-10.00 | Fika |
| 10.00-10.40 | Copilot-övning: jämför vaga och tydliga frågor |
| 10.40-11.10 | Intervju 2: IT-support eller servicedesk |
| 11.10-11.30 | Sammanfatta intervjun och planera eftermiddagen |
| 11.30-12.30 | Lunch |
| 12.30-13.00 | Rita spelets gränssnitt på papper eller whiteboard |
| 13.00-14.00 | Skapa eller ändra spelplan, rubrik, instruktioner och startknapp |
| 14.00-14.30 | Testa varandras lösning och göra en enkel commit |
| 14.30-15.00 | Fika |
| 15.00-15.20 | Förbättra sidan efter testningen |
| 15.20-15.30 | Loggbok och nästa steg |

### Resultat efter tisdagen

- Eleverna kan beskriva HTML, CSS och JavaScript med egna ord.
- Spelet har en synlig spelplan och tydliga instruktioner.
- Eleverna har tränat på att ställa tydliga frågor till Copilot.
- Minst en ändring är sparad i GitHub.

---

## Onsdag: Göra spelet spelbart

**Dagens mål:** Skapa spelets viktigaste spelmekanik i små, testbara steg.

| Tid | Aktivitet |
|---|---|
| 09.00-09.30 | Planera spelregler, styrning, vinst och förlust |
| 09.30-10.00 | Fika |
| 10.00-10.30 | Intervju 3: drift-, nätverks- eller DevOps-tekniker |
| 10.30-11.00 | Sammanfatta intervjun och dela upp programmeringen i små uppgifter |
| 11.00-11.30 | Börja med tangentbordsstyrning eller annan enkel interaktion |
| 11.30-12.30 | Lunch |
| 12.30-13.15 | Fortsätta med spelarens rörelse och testa gränser |
| 13.15-13.25 | Kort bensträckare och rollbyte |
| 13.25-14.10 | Lägga till boll, mål eller annat rörligt objekt |
| 14.10-14.30 | Gemensam testning och commit |
| 14.30-15.00 | Fika |
| 15.00-15.20 | Fixa ett av de fel som testningen avslöjade |
| 15.20-15.30 | Loggbok och avstämning |

### Onsdagens uppgiftslista

- [ ] Visa spelplanen.
- [ ] Visa spelaren eller plattan.
- [ ] Flytta spelaren med tangentbordet.
- [ ] Hindra spelaren från att lämna spelplanen.
- [ ] Visa ett mål, en boll eller ett hinder.
- [ ] Skapa en enkel spelregel.
- [ ] Testa efter varje liten ändring.

Onsdag är sannolikt veckans mest tekniskt krävande dag. Handledaren bör vara extra tillgänglig och hjälpa eleverna att minska uppgiften om de fastnar.

---

## Torsdag: Poäng, felsökning och förbättringar

**Dagens mål:** Göra spelet tydligt och komplett på en grundläggande nivå samt visa hur utvecklare felsöker.

| Tid | Aktivitet |
|---|---|
| 09.00-09.30 | Genomgång av buggar, felmeddelanden och enkel felsökning |
| 09.30-10.00 | Fika |
| 10.00-10.30 | Intervju 4: UX-designer, testare eller projektledare |
| 10.30-11.00 | Sammanfatta intervjun och göra en enkel testplan |
| 11.00-11.30 | Felsökningsövning med ett avsiktligt enkelt fel |
| 11.30-12.30 | Lunch |
| 12.30-13.15 | Lägga till poäng, vinst, förlust eller starta om |
| 13.15-13.25 | Kort bensträckare och rollbyte |
| 13.25-14.10 | Förbättra färger, instruktioner och spelkänsla |
| 14.10-14.30 | Testa spelet och prioritera återstående fel |
| 14.30-15.00 | Fika |
| 15.00-15.20 | Kort handledardemonstration av Docker, frivillig provkörning |
| 15.20-15.30 | Commit, loggbok och plan för fredagen |

### Docker på lämplig nivå

Docker ska inte vara ett villkor för att eleverna ska lyckas. Handledaren kan:

- Förklara varför en container kan vara användbar.
- Visa en enkel färdig `Dockerfile`.
- Visa hur ett kommando startar spelet.
- Låta eleverna prova om tid och intresse finns.

Undvik att lägga mycket tid på containerkonfiguration, nätverksportar eller felsökning av Docker Desktop.

---

## Fredag: Yrkesbild, presentation och avslutning

**Dagens mål:** Sammanfatta veckan, färdigställa ett stabilt resultat och visa vad eleverna har lärt sig.

| Tid | Aktivitet |
|---|---|
| 09.00-09.30 | Veckoretro: vad är klart, vad återstår och vad är viktigast? |
| 09.30-10.00 | Fika |
| 10.00-10.30 | Intervju 5: IT-arkitekt, säkerhetsspecialist, chef eller förvaltningsledare |
| 10.30-11.00 | Jämföra de fem yrkesrollerna |
| 11.00-11.30 | Sluttest och val av högst två små förbättringar |
| 11.30-12.30 | Lunch |
| 12.30-13.15 | Rätta viktiga fel och städa projektet |
| 13.15-13.45 | Skriva klart README och instruktioner |
| 13.45-14.30 | Förbereda och öva presentationen |
| 14.30-15.00 | Fika |
| 15.00-15.20 | Presentation och spelvisning för handledare och några kollegor |
| 15.20-15.30 | Återkoppling, avslutning och tack |

Undvik att lägga till stora nya funktioner under fredagen. Ett enkelt spel som fungerar är bättre än ett avancerat spel som inte går att demonstrera.

---

# Intervjuer med fem anställda

## Lämpliga yrkesroller

1. Systemutvecklare
2. IT-supporttekniker eller servicedeskmedarbetare
3. Drift-, nätverks- eller DevOps-tekniker
4. UX-designer, testare eller projektledare
5. IT-arkitekt, säkerhetsspecialist, chef eller förvaltningsledare

Välj gärna personer med olika utbildningsvägar, bakgrunder och typer av arbetsuppgifter.

## Intervjuernas längd

- Sikta på 20-30 minuter per intervju.
- Använd 5-7 frågor per intervju.
- Låt varje intervju ha ett särskilt tema.
- Låt eleverna turas om att fråga och anteckna.

## Gemensam frågebank

- Vad heter din yrkesroll?
- Vad gör du under en vanlig arbetsdag?
- Vilka verktyg använder du?
- Hur mycket samarbetar du med andra?
- Vad är roligast med jobbet?
- Vad är svårast med jobbet?
- Vilken utbildning eller erfarenhet har du?
- Hur började du arbeta med IT?
- Använder du programmering eller automatisering?
- Hur påverkar AI ditt arbete?
- Vilket råd skulle du ge till en elev som är intresserad av IT?

## Sammanfattning efter varje intervju

Eleverna skriver ner:

- En sak personen gör.
- Ett verktyg personen använder.
- Något som verkade roligt.
- Något som verkade svårt.
- En ny fråga som intervjun väckte.

---

# Programmeringsuppgiften

## Uppdrag: Ett litet webbaserat one-shot-spel

Eleverna bygger tillsammans ett litet spel inspirerat av exempelvis Arkanoid. Spelet ska vara möjligt att förstå, spela och starta om under en kort demonstration.

Arkanoid är inspiration, inte ett absolut krav. Om fullständig bollfysik och blockkollisioner blir för svårt kan spelet förenklas till att:

- Flytta en spelare eller platta.
- Undvika hinder.
- Samla poäng.
- Nå ett mål.
- Klara en bana på begränsad tid.

## Teknisk bas

- HTML
- CSS
- JavaScript
- VS Code
- GitHub
- GitHub Copilot
- Docker endast som demonstration eller bonus

## Begränsningar

- Ingen databas.
- Inga användarkonton i spelet.
- Inga externa API:er.
- Inga riktiga personuppgifter.
- Ingen åtkomst till universitetets produktionssystem.
- Ingen publicering på internet krävs.
- Inga stora externa ramverk krävs.
- Spelet körs i första hand lokalt i en webbläsare.

---

# Nivåer för speluppgiften

## Miniminivå: alla ska kunna lyckas

- En spelplan visas.
- Spelaren kan flytta ett objekt.
- Ett mål eller hinder finns.
- Poängen eller spelstatusen kan ändras.
- Spelet kan startas eller återställas.
- Eleverna kan förklara vad de byggt.

## Normalnivå

- En boll eller ett annat objekt rör sig.
- Någon enkel kollision fungerar.
- Poäng räknas.
- Spelet har ett vinst- eller förlustvillkor.
- Spelet kan startas om.

## Bonusnivå

- Flera sorters block eller hinder.
- Flera banor.
- Olika svårighetsgrader.
- Ökande hastighet.
- Ljudeffekter.
- Pausknapp.
- Highscore under pågående webbläsarsession.
- Docker-körning.

Bonusfunktioner får endast påbörjas när miniminivån fungerar stabilt.

---

# Rekommenderat startprojekt

Handledaren bör förbereda ett enkelt projekt där följande redan fungerar:

- Webbsidan öppnas i en webbläsare.
- HTML-, CSS- och JavaScript-filer är kopplade till varandra.
- En grundläggande spelplan visas.
- En startknapp eller enkel testknapp fungerar.
- Det finns tydliga kommentarer eller TODO-markeringar.

## Föreslagen filstruktur

```text
prao-spel/
├── README.md
├── index.html
├── style.css
├── game.js
├── Dockerfile
└── .gitignore
```

`Dockerfile` kan finnas med från början men behöver inte användas av eleverna.

---

# Att arbeta med GitHub Copilot

## Grundregel

Copilot ska användas som handledare och assistent, inte som automatisk kodgenerator.

Eleverna ska i första hand be Copilot om:

1. En enkel förklaring.
2. En plan med små steg.
3. Ett litet kodförslag.
4. Ett sätt att testa förslaget.
5. Hjälp att förstå ett felmeddelande.

## Exempel på för vag fråga

```text
Gör ett spel.
```

## Exempel på bättre startfråga

```text
Vi går i årskurs 9 och är nybörjare på JavaScript.

Vi bygger ett litet webbaserat spel med HTML, CSS och JavaScript.
Hjälp oss med ett steg i taget.
Förklara först vad vi ska göra.
Ge högst 15 rader kod åt gången.
Berätta vilken fil koden ska placeras i.
Beskriv hur vi testar att steget fungerar.
Skriv inte hela spelet på en gång.
```

## Exempel på felsökningsfråga

```text
När vi trycker på vänster piltangent flyttar sig inte spelaren.

Förklara tre möjliga orsaker.
Be oss kontrollera en sak i taget.
Ge inte ny kod innan vi har kontrollerat den befintliga koden.
```

## Kontrollfrågor för varje kodförslag

Eleverna ska försöka svara på:

- Vad är syftet med ändringen?
- I vilken fil ska koden ligga?
- Vad förväntar vi oss ska hända?
- Hur testar vi det?
- Vad hände faktiskt?
- Kan vi beskriva kodblocket med egna ord?

Eleverna behöver inte förstå varje tecken. De ska förstå syftet med de större delarna och kunna beskriva vad de har testat.

---

# Enkel GitHub-rutin

GitHub-arbetet hålls medvetet enkelt.

Eleverna behöver bara lära sig att:

1. Klona repositoryt.
2. Ändra en eller flera filer.
3. Testa ändringen lokalt.
4. Skapa en commit med ett kort meddelande.
5. Pusha ändringen till GitHub.

Exempel på commit-meddelanden:

```text
Lägg till spelplan

Gör spelaren styrbar

Lägg till poängräkning

Rätta fel i startknappen
```

Följande är inte nödvändigt under veckan:

- Avancerade branchstrategier.
- Rebase.
- Konflikthantering.
- Komplicerade pull request-regler.
- Enterprise-administration.

En pull request kan demonstreras av handledaren om spelet redan fungerar och det finns tid.

---

# Daglig handledning

## Kort kontroll före lunch och hemgång

Handledaren frågar:

- Vad arbetar ni med just nu?
- Vad fungerar?
- Vad fungerar inte?
- Vad har ni testat?
- Vad föreslog Copilot?
- Förstår ni förslaget tillräckligt för att prova det?
- Vad är nästa minsta steg?

## Regel när eleverna fastnar

Om eleverna har fastnat i mer än 15 minuter ska de:

1. Beskriva vad de försöker göra.
2. Skriva ner vad de förväntade sig.
3. Skriva ner vad som faktiskt hände.
4. Läsa eventuella felmeddelanden.
5. Ställa en tydligare fråga till Copilot.
6. Fråga handledaren om problemet kvarstår.

Handledaren bör hjälpa eleverna att minska problemet, inte omedelbart skriva hela lösningen åt dem.

---

# Daglig loggbok

Eleverna avslutar varje dag med att svara kort på:

```text
Vad gjorde vi idag?
Vad fungerade bra?
Vad var svårt?
Vilket nytt ord eller begrepp lärde vi oss?
Hur använde vi Copilot?
Vad vill vi göra eller fråga om i morgon?
```

Loggboken kan sparas i `README.md`, i separata Markdown-filer eller på papper.

---

# Testning

Eleverna behöver inte skapa automatiserade tester. De ska däremot använda en enkel manuell testlista.

## Exempel på testlista

- [ ] Spelet öppnas utan tydliga fel.
- [ ] Startknappen fungerar.
- [ ] Spelaren kan styras.
- [ ] Spelaren stannar inom spelplanen.
- [ ] Poängen ändras vid rätt tillfälle.
- [ ] Vinst eller förlust visas.
- [ ] Spelet kan startas om.
- [ ] Instruktionerna stämmer med styrningen.
- [ ] En annan person förstår hur spelet spelas.

Eleverna bör testa varandras delar och ge konkret återkoppling.

---

# Fredagens presentation

Presentation och demonstration bör vara kort, ungefär 10-15 minuter totalt.

Eleverna berättar tillsammans:

- Vad ITS gör.
- Vilka fem yrkesroller de mötte.
- Något som överraskade dem om IT-arbete.
- Hur spelet fungerar.
- Hur de använde Copilot.
- Ett problem de löste.
- Något de själva är stolta över.
- Om deras bild av programmeraryrket har förändrats.

Båda eleverna ska prata och visa någon del av resultatet.

---

# README för elevernas spel

Projektets `README.md` bör innehålla:

```markdown
# Spelets namn

## Om spelet
En kort beskrivning av spelet.

## Så spelar man
- Hur spelet startas.
- Vilka tangenter som används.
- Hur man vinner eller förlorar.

## Teknik
- HTML
- CSS
- JavaScript

## Vad vi lärde oss
- En sak om programmering.
- En sak om felsökning.
- En sak om att använda Copilot.

## Kända begränsningar
Saker som inte hann bli klara eller fortfarande kan förbättras.
```

Skriv inte privata kontaktuppgifter eller andra personuppgifter i README-filen.

---

# Reservplan vid tekniska problem

Om GitHub, Copilot, nätverk eller Docker inte fungerar ska veckan ändå kunna fortsätta.

## Reservaktiviteter

- Arbeta vidare lokalt i VS Code.
- Använd ett färdigt lokalt startprojekt.
- Rita spelets logik på papper eller whiteboard.
- Skriv pseudokod med vanliga svenska meningar.
- Testa och förbättra en enkel befintlig spelversion.
- Hitta avsiktliga fel i ett förberett exempel.
- Genomför intervjuerna enligt plan.
- Jämför olika yrkesroller.
- Förbered demonstration och presentation lokalt.

## Minimal lokallösning

Handledaren bör ha en kopia av startprojektet på datorerna eller på ett godkänt lokalt lagringsmedium. Projektet ska kunna öppnas direkt i VS Code och köras i webbläsaren utan installation av fler verktyg.

---

# Avveckling efter PRAO-veckan

## Fredag efter presentationen

- [ ] Kontrollera att slutversionen av koden är sparad.
- [ ] Bestäm om eleverna får behålla en kopia av spelet.
- [ ] Ta bort GitHub Copilot-licenserna.
- [ ] Ta bort eleverna från ITS organisation, team och privata repositoryn.
- [ ] Kontrollera att de inte har annan ITS-åtkomst.
- [ ] Logga ut från GitHub i VS Code och webbläsaren.
- [ ] Rensa lokala autentiseringstokens och sparade inloggningar.
- [ ] Återställ eller ominstallera utlånade datorer enligt ITS rutin.
- [ ] Dokumentera att avvecklingen är slutförd.

Om eleverna ska behålla spelet bör en ren kopia överföras till deras egna repositoryn. Kopian får inte innehålla intern information, organisationsinställningar, känslig historik, tokens eller universitetsmaterial som inte får spridas.

---

# Bedömning av lämplig nivå för årskurs 9

Upplägget är lämpligt om ambitionsnivån hålls under kontroll.

## Det som passar målgruppen väl

- Ett spel ger ett tydligt och motiverande mål.
- Intervjuer visar bredden inom IT.
- Pararbete skapar trygghet.
- HTML, CSS och JavaScript ger snabbt synliga resultat.
- Copilot kan hjälpa eleverna förbi mindre hinder.
- Fredagens demonstration ger veckan en tydlig riktning.

## Risker att hantera

- För många nya verktyg samtidigt.
- För mycket tid på installation och konton.
- För avancerad spelmekanik.
- Att Copilot skapar kod som eleverna inte förstår.
- Att en elev använder tangentbordet hela tiden.
- För långa intervjuer eller programmeringspass.
- Att Docker blir ett krav i stället för en inblick.

## Viktigaste anpassningarna

- Förbered och testa verktygen i förväg.
- Ge eleverna ett fungerande startprojekt.
- Begränsa intervjuerna till 20-30 minuter.
- Arbeta i korta cykler.
- Byt roller regelbundet.
- Definiera en enkel miniminivå för spelet.
- Gör Docker frivilligt.
- Bedöm förståelse och arbetssätt, inte mängden kod.

Den bästa slutprodukten är inte det mest avancerade spelet. Det är ett enkelt och fungerande spel som båda eleverna kan förklara, testa och känna stolthet över.

---

# Sammanfattad framgångsdefinition

Veckan är lyckad om båda eleverna kan säga:

> Vi vet mer om vad ITS gör, vi har mött flera olika IT-yrken, vi har byggt och testat ett litet spel och vi vet hur man kan ta hjälp av en AI-agent utan att låta den göra allt arbete.
