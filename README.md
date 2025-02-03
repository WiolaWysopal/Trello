# Trello

## 1. Wprowadzenie do JavaScript

- Etapy wykonania ćwiczenia:

    - Użycie `console.log()` do wyświetlania wyników w konsoli
    - Sprawdzenie działania `console.log()` z różnymi typami danych.
    - Analiza wpływu priorytetu operatorów na wynik obliczeń.

**Efekt wykonania poleceń:**

- `console.log("Hello World!")` wypisuje ciąg znaków i zwraca `undefined`.
- `console.log(2 + 3 * 7)` zwraca 23, ponieważ mnożenie ma wyższy priorytet niż dodawanie.
- `console.log("2 + 3 * 7")` wypisuje tekst dosłownie, bez obliczeń.

**Wnioski:**

- `console.log()` wyświetla wynik w konsoli, ale nie zwraca wartości (zwraca `undefined`).
- Operatory matematyczne stosują standardowe zasady pierwszeństwa.

- Tekst przekazany do `console.log()` nie jest interpretowany jako wyrażenie matematyczne.

## 2. Zmienne w JavaScript

- Etapy wykonania ćwiczenia:
    - Zadeklarowanie zmiennych za pomocą `var`, `let` i `const`.
    - Próba zmiany wartości zmiennej `const`.
    - Testowanie zakresu zmiennych w różnych blokach kodu.

**Efekt wykonania poleceń:**

- Próba zmiany wartości const skutkuje błędem: `TypeError: Assignment to constant variable`.
- `console.log()` poprawnie wyświetla wartości zmiennych.
- `var` działa globalnie, `let` i `const` są ograniczone do swojego bloku.

**Wnioski:**

- `var` ma zasięg globalny lub funkcyjny i nie respektuje bloków.
- `let` i const mają zasięg blokowy.
- `const` wymaga inicjalizacji i nie może być ponownie przypisane.

## 3. Eksperyment z hoistingiem

**Definicja:**

    _Hoisting_ to mechanizm przenoszenia deklaracji zmiennych i funkcji na początek ich zakresu przed wykonaniem kodu.

**Efekt wykonania poleceń:**

- `var` jest hoistowany z wartością undefined.
- `let` i const również są hoistowane, ale znajdują się w „Temporal Dead Zone” (TDZ), co powoduje ReferenceError przy próbie ich użycia przed deklaracją.

**Wnioski:**

- `var` jest dostępne przed deklaracją, ale ma wartość `undefined`.
- `let` i `const` są hoistowane, ale nie można ich używać przed deklaracją.
- `const` wymaga przypisania wartości już w momencie deklaracji.

## 4. Temporal Dead Zone (TDZ)

**Definicja:**

_Temporal Dead Zone_ to okres między hoistingiem a deklaracją zmiennej, w którym jej użycie prowadzi do ReferenceError.

**Efekt wykonania poleceń:**

- Próba dostępu do `let` lub `const` przed deklaracją skutkuje błędem.
- `var` jest dostępne, ale z wartością `undefined`.

**Wnioski:**

- TDZ zapobiega używaniu zmiennych `let` i `const` przed ich inicjalizacją.
- Mechanizm ten poprawia przewidywalność kodu i pomaga uniknąć błędów wynikających z przypadkowego użycia niezainicjalizowanej zmiennej.