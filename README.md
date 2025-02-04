# Trello

## Wprowadzenie 
### 1. Wprowadzenie do JavaScript

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

### 2. Zmienne w JavaScript

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

### 3. Eksperyment z hoistingiem

**Definicja:**

    _Hoisting_ to mechanizm przenoszenia deklaracji zmiennych i funkcji na początek ich zakresu przed wykonaniem kodu.

**Efekt wykonania poleceń:**

- `var` jest hoistowany z wartością undefined.
- `let` i const również są hoistowane, ale znajdują się w „Temporal Dead Zone” (TDZ), co powoduje ReferenceError przy próbie ich użycia przed deklaracją.

**Wnioski:**

- `var` jest dostępne przed deklaracją, ale ma wartość `undefined`.
- `let` i `const` są hoistowane, ale nie można ich używać przed deklaracją.
- `const` wymaga przypisania wartości już w momencie deklaracji.

### 4. Temporal Dead Zone (TDZ)

**Definicja:**

_Temporal Dead Zone_ to okres między hoistingiem a deklaracją zmiennej, w którym jej użycie prowadzi do ReferenceError.

**Efekt wykonania poleceń:**

- Próba dostępu do `let` lub `const` przed deklaracją skutkuje błędem.
- `var` jest dostępne, ale z wartością `undefined`.

**Wnioski:**

- TDZ zapobiega używaniu zmiennych `let` i `const` przed ich inicjalizacją.
- Mechanizm ten poprawia przewidywalność kodu i pomaga uniknąć błędów wynikających z przypadkowego użycia niezainicjalizowanej zmiennej.

## Typy danych

### 1. Rozpoznawanie typów

`typeof` - zwraca typ wartości operandu. Przykład:
    
    console.log(typeof 15) > "number"

Pozostałe typy zmiennych:
- `string` - ciąg znaków
- `number` - liczba 
- `bigint` - wartości wykraczające poza zakres prymitywu `number`
- `boolean` - jedna z dwóch wartości: `true` lub `false`
- `null` - oznacza brak wartości obiektu
- `undefined` - dla wartości niezdefiniowanych
- `symbol` - unikalna i niezmienialna wartość prymitywna, używana głównie jako klucz własności obiektu, aby uniknąć konfliktów nazw


`typeof null` zwraca `object`, ponieważ jest to historyczny błąd w JavaScript, gdzie `null` traktowane jest jako obiekt. Natomiast `console.log(nll, typeof nll)` wyświetli wartość zmiennej (np. `null`) oraz jej typ, który w przypadku null będzie `object`.

### 2. Rozróżnianie obiektów, tablic i funkcji

W JavaScript obiekty tworzy się za pomocą literałów `{}` z parami klucz-wartość, tablice za pomocą nawiasów kwadratowych `[]`, a funkcje deklaruje się za pomocą słowa kluczowego `function`, np. `function greet() { console.log("Hello, world!"); }`.

Tablice są specjalnym przypadkiem obiektów, dlatego operator `typeof` zwraca dla nich `object`, mimo że tablica posiada dodatkowe właściwości i metody typowe dla tablic. Aby dokładniej sprawdzić, czy zmienna jest tablicą, można skorzystać z metody `Array.isArray()`, która zwróci wartość `true` tylko dla tablic. Zatem, choć `typeof` nie rozróżnia tablic od innych obiektów, `Array.isArray(tab)` pozwala na precyzyjne określenie, czy zmienna to tablica.

## Rzutowanie typów

**Wnioski:**
- Operator `+value` w JavaScript to sposób na niejawną konwersję wartości do liczby. Działa podobnie jak `Number(value)`, ale nie wywołuje jawnej funkcji, tylko wykorzystuje mechanizm wymuszonej konwersji (coercion). Jeśli konwersja nie jest możliwa, zwróci `NaN` - _Not a Number_.
- W przypadku jawnej konwersji (`Number(value)`) JavaScript pozwala przekonwertować `BigInt` na `Number`, ale nie działa to dla operatora `+`.

**Różnica między `==` a `===`:**

W JS  `===` jest operatorem porównania ścisłego i służy do porównywania wartości oraz typów danych dwóch operandów. Natomiast `==` to operator porównania luźnego, który porównuje wartości dwóch operandów, ale przeprowadza konwersję typów przed porównaniem. Oznacza to, że jeśli operandy mają różne typy, JavaScript spróbuje je przekonwertować na kompatybilne typy, aby wykonać porównanie. Przykład:

    5 == '5' > true
    5 === '5' > false


