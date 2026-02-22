# Zwierzyńcopedia

**Cyfrowe Repozytorium Dziedzictwa Miasta-Ogrodu**

Encyklopedia poświęcona historii, architekturze, przyrodzie i ludziom [Zwierzyńca](https://pl.wikipedia.org/wiki/Zwierzyniec_(wojew%C3%B3dztwo_lubelskie)) – miasta-ogrodu na Roztoczu.

## Stos technologiczny

| Element | Technologia |
|---------|-------------|
| Silnik | [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| CI/CD | [GitHub Actions](.github/workflows/deploy.yml) |
| CMS | [Pages CMS](https://pagescms.org/) |

## Szybki start

### Wymagania

- Python 3.10+
- pip

### Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/mijapa/zwierzyncopedia.git
cd zwierzyncopedia

# Instalacja zależności
pip install -r requirements.txt

# Uruchomienie serwera deweloperskiego
mkdocs serve
```

Strona będzie dostępna pod adresem `http://127.0.0.1:8000/`.

### Budowanie strony

```bash
mkdocs build
```

Wygenerowany HTML trafi do katalogu `site/`.

## Struktura projektu

```
zwierzyncopedia/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatyczna publikacja na GitHub Pages
├── docs/
│   ├── index.md                # Strona główna
│   ├── dziedzictwo/            # Sekcja: Dziedzictwo kulturowe
│   │   ├── uklad-urbanistyczny/
│   │   ├── architektura/
│   │   └── utracone/
│   ├── przyroda/               # Sekcja: Przyroda
│   ├── ludzie/                 # Sekcja: Biogramy
│   ├── biblioteka/             # Sekcja: Dokumenty źródłowe
│   ├── o-projekcie/            # Sekcja: O projekcie + poradniki
│   └── assets/
│       └── images/             # Zdjęcia, skany, mapy
├── overrides/                  # Nadpisania motywu Material
├── .pages.yml                  # Konfiguracja Pages CMS
├── mkdocs.yml                  # Konfiguracja MkDocs
├── requirements.txt            # Zależności Python
└── README.md
```

## Jak pomóc

Sprawdź [poradnik edycji](docs/o-projekcie/jak-edytowac.md) – możesz edytować hasła przez przeglądarkę dzięki Pages CMS!

## Licencja

Treści na licencji [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pl).
Kod źródłowy na licencji [MIT](LICENSE).
