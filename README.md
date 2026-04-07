# Zwierzyńcopedia

**Cyfrowe Repozytorium Dziedzictwa Miasta-Ogrodu**

Encyklopedia poświęcona historii, architekturze, przyrodzie i ludziom [Zwierzyńca](https://pl.wikipedia.org/wiki/Zwierzyniec_(wojew%C3%B3dztwo_lubelskie)) – miasta-ogrodu na Roztoczu.

## Stos technologiczny

| Element | Technologia |
|---------|-------------|
| Silnik | [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| CI/CD | [GitHub Actions](.github/workflows/deploy.yml) |
| CMS | [Pages CMS](https://pagescms.org/) |

## Szybki start

### Wymagania

- Node.js >= 22.12.0
- npm

### Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/mijapa/zwierzyncopedia.git
cd zwierzyncopedia

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:4321/zwierzyncopedia/`.

### Budowanie strony

```bash
npm run build
```

Wygenerowany HTML trafi do katalogu `dist/`.

## Kontrola jakości

Repozytorium wykorzystuje `markdownlint`, `yamllint` i minimalną konfigurację `Vale` do kontroli jakości treści.

Lokalnie możesz uruchomić sprawdzenia przez `pre-commit`:

```bash
pip install pre-commit
pre-commit install
pre-commit run --all-files
```

## Struktura projektu

```text
zwierzyncopedia/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Automatyczna publikacja na GitHub Pages
│       └── lint.yml            # Walidacja jakości treści
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx       # Strona główna
│   │       ├── dziedzictwo/    # Sekcja: Dziedzictwo kulturowe
│   │       │   ├── uklad-urbanistyczny/
│   │       │   ├── architektura/
│   │       │   └── utracone/
│   │       ├── przyroda/       # Sekcja: Przyroda
│   │       ├── ludzie/         # Sekcja: Biogramy
│   │       ├── biblioteka/     # Sekcja: Dokumenty źródłowe
│   │       └── o-projekcie/    # Sekcja: O projekcie + poradniki
│   ├── assets/
│   │   └── images/             # Logo, zdjęcia
│   └── styles/
│       └── custom.css          # Niestandardowe style
├── public/                     # Pliki statyczne (favicon, robots.txt, llms.txt)
├── .pages.yml                  # Konfiguracja Pages CMS
├── astro.config.mjs            # Konfiguracja Astro + Starlight
├── package.json                # Zależności Node.js
└── README.md
```

## Jak pomóc

Sprawdź [poradnik edycji](src/content/docs/o-projekcie/jak-edytowac.md) – możesz edytować hasła przez przeglądarkę dzięki Pages CMS!

## Licencja

Treści na licencji [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pl).
Kod źródłowy na licencji [MIT](LICENSE).
