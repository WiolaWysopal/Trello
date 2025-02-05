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

- Próba zmiany wartości `const` skutkuje błędem: `TypeError: Assignment to constant variable`.
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

- `var` jest hoistowany z wartością `undefined`.
- `let` i `const` również są hoistowane, ale znajdują się w _Temporal Dead Zone_ (TDZ), co powoduje `ReferenceError` przy próbie ich użycia przed deklaracją.

**Wnioski:**

- `var` jest dostępne przed deklaracją, ale ma wartość `undefined`.
- `let` i `const` są hoistowane, ale nie można ich używać przed deklaracją.
- `const` wymaga przypisania wartości już w momencie deklaracji.

### 4. Temporal Dead Zone (TDZ)

**Definicja:**

_Temporal Dead Zone_ to okres między hoistingiem a deklaracją zmiennej, w którym jej użycie prowadzi do `ReferenceError`.

**Efekt wykonania poleceń:**

- Próba dostępu do `let` lub `const` przed deklaracją skutkuje błędem.
- `var` jest dostępne, ale z wartością `undefined`.

**Wnioski:**

- _TDZ_ zapobiega używaniu zmiennych `let` i `const` przed ich inicjalizacją.
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

### Tryb ścisły i nieścisły w JS

| Cecha | Tryb ścisły    | Tryb nieścisły |
| --- | -------- | ------- |
| W kodzie | klauzula `"use strict"`    | domyślnie |
|Deklaracja zmiennych| Wymagana: `var`, `let`, `const`  | nieobowiązkowa    |
|Zmienność stałych| Przypisanie do `const` generuje błąd| możliwe przypisanie do stałej     |
| Instrukcja `with` | Zabroniona    | Dozwolona    |
| Błędy | Więcej błędów i ostrzeżeń przy potencjalnych problemach    | Mniej błędów, ale łatwiejsze do pominięcia   |

**Wnioski:**

- Konwersja z ciągów znaków:

    - Ciągi takie jak `" "`, `"0xFF"`, `"075"` i inne są traktowane jako ciągi znaków i konwertowane na liczby dziesiętne.
    - `"0xFF"` jest traktowane jako liczba szesnastkowa i konwertowane na `255`.
    - `"075"` jest traktowane jako liczba dziesiętna i konwertowane na `75`.

- Konwersja z pustego ciągu i białych znaków:

    - `" "` (ciąg zawierający tylko białe znaki) jest konwertowane na `0` w obu trybach.
    - `""` (pusty ciąg) jest konwertowane na `0` w obu trybach.

- Konwersja z ciągu, który nie jest liczbą:

    - Ciągi takie jak `"abc"` konwertują na `NaN` w obu trybach, ponieważ nie są liczbami.

- Różnica między `Number()` a `+`:

    - W przypadku użycia `Number(value)` i operatora `+value` (konwersja niejawna), wyniki będą identyczne w przypadku większości typów danych.
    - Operator `+` może być użyty do konwersji w sposób bardziej skrócony, ale zachowa te same zasady konwersji jak `Number()`.

**Porównanie trybu ścisłego i nieścisłego:**

W kontekście konwersji, dla przedstawionych przykładów nie ma istotnej różnicy między trybem ścisłym a nieścisłym. Błędy związane z rzutowaniem i zmiennymi (np. `undefined`) są bardziej restrykcyjnie traktowane w trybie ścisłym.


## Struktury Danych

W JS tablice nie wymagają jednego typu danych, tak jak w C++, na przykład: 
    `let arr = [10, 5, 8, 20, 1, "2"]`

**Metody `.map()`, `.filter()` i `.reduce()`:**

| Metoda | Tworzy nową tablicę | Zmienia oryginalną tablicę | Zastosowanie |
| --- | -------- | ------- | ------- |
| `.map()` | ✅ Tak | ❌ Nie | Zmiana wartości w tablicy |
| `.filter()`| ✅ Tak | ❌ Nie | Filtrowanie elementów tablicy| 
| `.reduce()`| ❌ Nie| ❌ Nie | Obliczenia na tablicy |


**Metoda `.sort()`**

W JavaScript metoda `sort()` domyślnie sortuje elementy tablicy jako ciągi znaków, a nie jako liczby, dlatego aby poprawnie sortować liczby, należy podać własną funkcję porównującą. Przykład:
   
    array.sort((a, b) => a - b);
W tablicy o nazwie `array` elementy zostaną posortowane rosnąco.

### `Map` oraz `Set`

`Set` usuwa powtarzające się elementy, pozostawiając tylko ich unikaty. `Map` to wbudowana struktura danych w JavaScript, która przechowuje pary klucz-wartość, gdzie kluczami mogą być liczby, obiekty, funkcje, a nie tylko stringi.

**Metody i dostęp:**
- `Map`:
    - `set(key, value)` – dodaje parę klucz -> wartość do mapy.
     - `get(key)` – zwraca wartość przypisaną do klucza (lub `undefined`, jeśli klucz nie istnieje).
    - `has(key)` – sprawdza, czy dany klucz istnieje (`true/false`)

- `Set`:
    - `add(value)` – dodaje wartość do zbioru (`Set` nie przechowuje duplikatów).
    - `has(value)` – sprawdza, czy wartość istnieje (`true/false`).
    - `delete(value)` – usuwa wartość, jeśli istnieje.

**Pętla `for ... of`:**

`for...of` to pętla, która służy do iterowania po iterowalnych obiektach, takich jak:
- tablice (`Array`)
- zbiory (`Set`)
- mapy (`Map`)
- łańcuchy znaków (`String`)

Składnia:

    for (let element of kolekcja) 
    {
        // Kod do wykonania dla każdego elementu
    }

### Tablice o stałym typie

`Typed Arrays` to specjalne tablice w JavaScript, które przechowują dane w sposób bardziej wydajny niż zwykłe tablice (`Array`). Każdy element ma stały typ liczbowy i zajmuje określoną ilość bajtów w pamięci. Tablice typowane tworzy się przez literał `new` i nazwę typu tablicy wywoływany jako konstruktor, np `let set = new Uint8Array(liczba_elementow)`.

**Rodzaje `Typed Arrays`:**

| Typ | Bajty na element | Zakres wartości |
|-----|------------------|-----------------|
|`Int8Array`|1|-128 do 127|
|`Uint8Array`|1|0 do 255|
|`Uint8ArrayClampedArray`|1|0 do 255 z zaokrągleniem|
|`Int16Array`|2|-32.768 do 32.767|
|`Uint16Array`|2|0 do 65.535|
|`Int32Array`|4|-2³¹ do 2³¹-1|
|`Uint32Array`|4|0 do 2³²-1|
|`Float32Array`|4|Liczby zmiennoprzecinkowe|
|`Float64Array`|8|Dokładniejsze liczby zmiennoprzecinkowe|

`Uint8ArrayClampedArray`:
w przeciwieństwie do `Uint8Array`, wartości nie przekraczają tego zakresu, ponieważ są przycinane (_clamped_), a nie obcinane `modulo 256`.

#### ArrayBuffer i DataView

Standardowe tablice (`Array`) dostępne w JS są dynamiczne i mogą przechowywać różne typy danych. Jeśli jednak chcemy bezpośrednio zarządzać pamięcią, należy skorzystać z `ArrayBuffer` i `DataView`, które pozwalają pracować na surowych danych binarnych.

`ArrayBuffer` to niskopoziomowy bufor pamięci, a `DataView` umożliwia odczyt i zapis różnych typów danych.

    WAŻNE:
    Wszystkie wartośći w `ArrayBuffer` zapisywane są jako wartości binarne (bajty), ale często wyświetla się je w formacie heksadecymalnym dla czytelności.

### Prównanie przez referencję

Porównanie przez referencję w JS ma miejsce w przypadku obiektów i struktur opartych na obiektach. Oznacza to, że jeśli dwie zmienne przechowują obiekt, to tak naprawdę przechowują adres (referencję) do tego obiektu w pamięci, a nie jego wartość.

- Typy porównywane przez referencję:
    - Obiekty (`{}`)
    - Tablice (`[]`)
    - Funkcje (`function() {}`)
    - Mapy (`new Map()`), 
    - Zbiory (`new Set()`)
    - Daty (`new Date()`)
- Typy porównywane przez wartość (nie referencję):
    - Wszystkie `prymitywy`:
    - Liczby (`Number`)
    - Napisy (`String`)
    - Wartości logiczne (`Boolean`)
    - `null`, `undefined`
    - `Symbol`
    - `BigInt`

Przykład:

    let obj1 = { a: 1 };
    let obj2 = { a: 1 };
    console.log(obj1 == obj2); // false -> porównanie adresu do obiektu a nie jego wartości
    console.log(obj1 === obj2); // false -> jw.

Aby otrzymać wartość `true`, należałoby zmienić deklarację `obj2` w następujący sposób:

    let obj1 = { a: 1 };
    let obj2 = obj1;
    console.log(obj1 == obj2);
    console.log(obj1 === obj2);

**Metoda `Object.is()`:**

Metoda `Object.is()` porównuje dwie wartości pod kątem równości. Zwraca `true`, jeśli wartości są identyczne, a `false` w przeciwnym przypadku. Różni się jednak od operatora `===` w niektórych przypadkach, takich jak porównanie `NaN` (gdzie `Object.is()` zwraca `true`, a `===` `false`) oraz porównanie `+0` i `-0` (które `Object.is()` standardowo uznaje je za różne).

