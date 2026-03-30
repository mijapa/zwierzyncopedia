---
title: Jak edytować
description: Poradnik edycji haseł Zwierzyńcopedii – dla wolontariuszy i nowych redaktorów
---

Zwierzyńcopedia jest projektem społecznym – każdy może pomóc! Istnieją dwa sposoby edycji:

## Sposób 1: Pages CMS (zalecany dla redaktorów)

Najprostszy sposób – edycja przez przeglądarkę, bez znajomości kodu.

### Krok po kroku

1. **Załóż konto na GitHub** – wejdź na [github.com](https://github.com) i zarejestruj się (jednorazowo)
2. **Poproś o dostęp** – napisz do administratora projektu, aby dodał Cię jako współpracownika repozytorium
3. **Zaloguj się do Pages CMS** – wejdź na [pagescms.org](https://pagescms.org) i zaloguj się kontem GitHub
4. **Wybierz projekt** – na liście repozytoriów znajdź „zwierzyncopedia"
5. **Edytuj** – wybierz kolekcję (np. „Zabytki", „Ludzie"), stwórz nowy wpis lub edytuj istniejący
6. **Zapisz** – kliknij „Save". Zmiany zostaną automatycznie opublikowane w ciągu minuty!

:::tip[Zdjęcia]
W Pages CMS możesz wgrywać zdjęcia metodą „przeciągnij i upuść" (drag & drop). Idealne do dokumentacji fotograficznej w terenie – nawet z telefonu!
:::

## Sposób 2: Przycisk „Edytuj tę stronę"

Na każdej stronie Zwierzyńcopedii znajdziesz link „Edytuj stronę" – kliknięcie przeniesie Cię do edytora plików na GitHub, gdzie możesz zaproponować zmianę (Pull Request).

:::note[Dla kogo?]
Ten sposób jest dobry do drobnych poprawek (literówki, uzupełnienia). Do pisania nowych artykułów zalecamy Pages CMS.
:::

## Formatowanie tekstu (Markdown)

Artykuły piszemy w formacie **Markdown** – prostym języku znaczników:

```markdown
# Nagłówek 1
## Nagłówek 2
### Nagłówek 3

**pogrubienie** i *kursywa*

- lista punktowana
- drugi punkt

1. lista numerowana
2. drugi punkt

[tekst linku](https://adres-strony.pl)

![opis zdjęcia](sciezka/do/zdjecia.jpg)

> Cytat blokowy

| Kolumna 1 | Kolumna 2 |
|-----------|-----------|
| wartość   | wartość   |
```

## Bloki specjalne (Asides)

Używamy kolorowych bloków do wyróżniania informacji:

```markdown
:::note[Ciekawostka]
Tekst ciekawostki...
:::

:::caution[Uwaga]
Ważne zastrzeżenie...
:::

> Tekst cytatu z podaniem źródła...
```

## Potrzebujesz pomocy?

Skontaktuj się z administratorem projektu lub otwórz [zgłoszenie (Issue)](https://github.com/mijapa/zwierzyncopedia/issues) na GitHub.
