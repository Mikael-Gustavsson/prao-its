# PRAO på ITS

Material och en publicerad webbplats för en PRAO-vecka på ITS för elever i årskurs 9.

## Innehåll

- `doc/` – ursprunglig veckoplan som markdown (publiceras inte).
- `site/` – webbplatsen som vanliga HTML-sidor (veckoplan, schema, mål med mera) med MVP.css som stilmall.
- `site/spel/` – där eleven bygger sitt eget projekt med HTML, CSS och JavaScript.
- `.github/workflows/pages.yml` – publicerar webbplatsen till GitHub Pages vid varje push till `main`.

## Arbetssätt

Den inre testloopen är att öppna hemsidan direkt från disk, till exempel genom att öppna `site/index.html` i webbläsaren. Alla sökvägar är relativa, så inga externa eller publicerade adresser behövs. Ändra, ladda om sidan och testa.

Om du vill jobba med filerna direkt i webbläsaren (men utan AI-stöd) så kan du byta ut ".com" till ".dev" i url, då slussas du vidare till https://vscode.dev/github/Mikael-Gustavsson/prao-its?vscode-lang=sv-se

När du är nöjd lokalt gör du commit och push. Webbplatsen publiceras då automatiskt via GitHub Pages och då kan du se resultatet på https://mikael-gustavsson.github.io/prao-its/arbetssatt.html.