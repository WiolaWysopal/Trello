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

## Sterowanie przepływem

### **Pętle w JavaScript**

#### 1. **Pętla `for`**
- **Zastosowanie:** Do iteracji po tablicach lub strukturach danych, które są liczbowe.
- **Działanie:** Pętla wykonuje się, dopóki spełniony jest określony warunek, z możliwością manipulacji inicjalizacją, warunkiem oraz inkrementacją w każdej iteracji:

        console.log("for ... ");
        for (let i = 0; i < arr.length; i++) 
        {
            console.log(arr[i]);
        }
  
#### 2. **Pętla `for...in`**
- **Zastosowanie:** Iteracja po **właściwościach obiektów** lub **indeksach tablic**.
- **Działanie:** Iteruje po kluczach obiektu lub indeksach tablicy. Może również zwrócić właściwości dziedziczone obiektu.

        for (let index in arr) 
        {
            console.log(index, arr[index]);
        }


#### 3. **Pętla `for...of`**
- **Zastosowanie:** Iteracja po **wartościach** elementów tablicy, kolekcji, łańcuchach znaków, Mapach, Setach itp.
- **Działanie:** Pętla zwraca bezpośrednio elementy kolekcji, co jest wygodne w przypadku, gdy nie potrzebujemy indeksów.

        for (let el of arr)
        {
            console.log(el)
        }

---

### **Pętla `while`**
- **Zastosowanie:** Do wykonywania kodu, dopóki warunek jest prawdziwy.
- **Działanie:** Pętla sprawdza warunek przed każdą iteracją, wykonując kod, dopóki warunek jest spełniony. Jeśli warunek początkowy jest fałszywy, kod w pętli nie wykona się ani razu.

### **Pętla `do...while`**
- **Zastosowanie:** Podobna do `while`, ale sprawdzenie warunku odbywa się po wykonaniu kodu, co zapewnia, że pętla wykona się przynajmniej raz.
  
---

### **Instrukcja warunkowa `if-else`**
- **Zastosowanie:** Do podejmowania decyzji na podstawie spełnionych warunków.
- **Działanie:** Sprawdza, czy warunek jest prawdziwy, a jeśli tak, wykonuje blok kodu w części `if`. W przeciwnym razie wykonuje blok kodu w części `else`.

### **Instrukcja warunkowa `switch`**
- **Zastosowanie:** Alternatywa dla wielu `if-else`, gdy mamy wiele możliwości, z których jedna zostanie wybrana w zależności od wartości zmiennej.
- **Działanie:** Porównuje wyrażenie z różnymi przypadkami (`case`), a kiedy znajdzie dopasowanie, wykonuje odpowiedni blok kodu. W przypadku braku dopasowania wykonuje kod w `default`.

## **Funkcje i wyrażenia funkcyjne**

#### **Funkcja**
- Definiowana za pomocą słowa kluczowego `function`.
- Jest hoistowana (przenoszona na początek zakresu).
- Może być wywoływana przed jej deklaracją.

```javascript
function add(a, b) 
{
    return a + b;
};
```

#### **Wyrażenie funkcyjne**
- Funkcja przypisana do zmiennej.
- Nie jest hoistowana, dostępna dopiero po przypisaniu.
- Często używana w funkcjach wyższego rzędu.

```javascript
const add = function(a, b) 
{
    return a + b;
};
```

## **`Arrow Functions` oraz `this`**

### **Arrow Functions (Funkcje Strzałkowe)**

- **Składnia**: Funkcje strzałkowe są krótszą wersją tradycyjnych funkcji. Zamiast używać słowa kluczowego `function`, używają operatora `=>`.
- **Brak własnego `this`**: Funkcje strzałkowe nie mają swojego własnego kontekstu `this`, dziedziczą go z otaczającego zakresu (np. z obiektu, w którym są wywoływane).
- **Krótsza składnia**: Dla funkcji, które mają tylko jedno wyrażenie, możliwe jest pominięcie słowa kluczowego `return` i nawiasów.

### **`this` w Arrow Functions**

`this` w JavaScript odnosi się do kontekstu, w którym funkcja jest wywoływana. W funkcjach tradycyjnych `this` wskazuje na obiekt, który wywołuje metodę (np. obiekt, w którym metoda jest zdefiniowana), natomiast w funkcjach strzałkowych `this` dziedziczy wartość z otaczającego kontekstu, w którym funkcja została zdefiniowana, co oznacza, że nie odnosi się do obiektu wywołującego funkcję, ale do kontekstu globalnego lub tego, w którym funkcja została utworzona.

## **Funkcje natychmiastowe - `Immediately Invoked Function Expressions`**

_Natychmiastowo Wywoływane Wyrażenie Funkcyjne_, znane jako `IIFE` (ang. _Immediately Invoked Function Expression_), to funkcja w JW, która jest definiowana i natychmiast wywoływana. Pozwala to na utworzenie nowego zakresu zmiennych, izolując kod od zanieczyszczenia globalnego środowiska.

**Definicja IIFE:**

`IIFE` to funkcja anonimowa (bez nazwy), która jest natychmiast wywoływana po jej zdefiniowaniu. Aby to osiągnąć, funkcję umieszcza się w nawiasach, tworząc wyrażenie funkcyjne, a następnie dodaje kolejne nawiasy do jej wywołania. Przykład:

```javascript
(function() {
    // Kod wewnątrz IIFE
})();
```

**alternatywnie:**

```javascript
(function() {
    // Kod wewnątrz IIFE
}());
```

**Zmienne zdefiniowane w IIFE:**

Zadeklarowane w takiej funkcji zmienne nie są dostępne z zewnątrz, chyba że zostaną zwrócone instukcją `return`. Aby uzyskać dostęp do zmiennych zadeklarowanych wewnątrz `IIFE` należy utworzyć zmienną, do której należy przypisać tę funkcję. W ciele funkcji należy zamieścić instrukcje zwracające zmienne. Odwołać się do tych zmiennych można poprzez `nazwa_funkcji.nazwa_zmiennej`.

## Wyrażenia i operatory:

### Operator dzielenia:

W JavaScript operator dzielenia (`/`) działa zgodnie ze standardem `IEEE 754`, zwracając liczby zmiennoprzecinkowe. Może prowadzić do utraty precyzji (np. `10/3` zwraca `3.3333333333333335`). Dzielenie przez `0` zwraca `Infinity` lub `-Infinity`, a `0/0` daje `NaN`.

### Operatory wartości logicznych:

- `&&` (`AND`): 
    – Sprawdza wartości od lewej do prawej.
    - Jeśli znajdzie pierwszą `falsy`, to ją zwraca i nie sprawdza dalej.
    - Jeśli wszystkie wartości są `truthy`, zwraca ostatnią `truthy`.

- `||` (`OR`):
    - Sprawdza wartości od lewej do prawej.
    - Jeśli znajdzie pierwszą `truthy`, to ją zwraca i nie sprawdza dalej.
    - Jeśli wszystkie są `falsy`, zwraca ostatnią `falsy`.

- `!` (`NOT`):
    - Neguje wartość – jeśli była `truthy`, staje się `falsy` i odwrotnie.

#### _Short-circuit evaluation_

_Short-circuit evaluation_ oznacza, że operacje `&&` i `||` kończą działanie, gdy wynik jest już przesądzony – np. w `false && [druga_wartość]` druga wartość nie jest sprawdzana, bo wynik i tak będzie `false`. To pozwala na skrócone zapisy, np. `user.name || "Anonim"`.

    Co jest truthy a co falsy?
    
    Truthy to wszystko oprócz kilku wyjątków:

    - false
    - 0 (i -0, 0n – zero jako BigInt)
    - "" (pusty string)
    - null
    - undefined
    - NaN (Not a Number)

#### _Nullish Coalescing_

**_Nullish Coalescing_** (`??`) zwraca pierwszą wartość, która nie jest `null` ani `undefined`. Przykłady:

```javascript
    console.log(null ?? "Domyślna");    // "Domyślna"
    console.log(undefined ?? "Domyślna"); // "Domyślna"
    console.log(0 ?? "Domyślna");       // 0 (bo 0 to nie null ani undefined)
    console.log("" ?? "Domyślna");      // "" (bo pusty string to nie null ani undefined)
    console.log(false ?? "Domyślna");   // false (bo false to nie null ani undefined)
    console.log("Wartość" ?? "Inna");   // "Wartość" (bo nie jest null/undefined)
    console.log(null ?? undefined);     // undefinded
    console.log(undefined ?? null);     // null
```

## _Strict Mode_:

`Strict Mode` to specjalny tryb w JS, który wprowadza bardziej rygorystyczne zasady pisania kodu, eliminując niektóre niebezpieczne konstrukcje i ułatwiając wykrywanie błędów. Można go włączyć, dodając `"use strict";` na początku skryptu lub funkcji. W trybie `strict` nie można: 
- używać niezadeklarowanych zmiennych, 
- powielać nazw parametrów w funkcjach, przypisywać wartości do stałych (`const`), 
- stosować niebezpiecznych konstrukcji, takich jak `eval` czy `arguments`. 

Używanie `Strict Mode` sprawia, że kod jest bezpieczniejszy, bardziej czytelny i zgodny z nowoczesnymi standardami JS.

### `This` w `Strict Mode`: 

Uruchamiając skrypt w konsoli - zarówno w `strict mode` jak i w trybie normalnym - dla `this` program zwróci `undefined`. Dla `this` bez `strict mode` w przeglądarce zostanie zwrócona wartość `this: [object Window]`. Natomiast dla `strict mode` w przeglądarce zostanie zwrócona wartość `undefined`.

## `This`:

- Gdy metoda jest wywoływana bezpośrednio na obiekcie (np. `person.greet()`), `this` wskazuje na obiekt `person`, co prowadzi do poprawnego działania i wyświetlenia `"Alice"`.
- Gdy metoda zostaje przypisana do zmiennej (np. `greetRef()`) i wywołana jako samodzielna funkcja, `this` traci kontekst obiektu `person` i wskazuje na kontekst globalny. W trybie strict mode wartość `this` jest `undefined`, co powoduje, że `this.name` jest również `undefined`.

### Wartość `this` w zależności od kontekstu:

- W funkcjach/metodach w obiektach – `this` wskazuje na obiekt
- W globalnym kontekście – `this` to `window` (lub `global` w Node.js)
- W trybie `strict` – `this` w funkcji jest `undefined`
- W funkcjach strzałkowych – `this` dziedziczy z otaczającego kontekstu, a nie z obiektu (tak jakby poziom wyżej)

### Jawne wiązanie `this`:

**Jawne wiązanie `this`** to technika, w której wymuszamy, do jakiego obiektu ma odnosić się `this`, używając metod `.call()`, `.apply()` lub `.bind()`:

- `.call()` przekazuje argumenty osobno, np. `showAllIdentity.call(dog, "Dog", 6)`
- `.apply()` przekazuje argumenty w tablicy, np. `showAllIdentity.apply(dog, ["Dog", 6])`
- `.bind()` tworzy nową funkcję, ale wymaga późniejszego przekazania argumentów, np. 
`const boundFn2 = showAllIdentity.bind(rat);
boundFn2("Rat", 2)`

Jawne wiązanie pozwala zignorować kontekst i przypisać `this` konkretnemu obiektowi.

## Asynchroniczność:

### `Callbacki`, `Promises` i `Async/Await`:

```
Synchroniczność oznacza, że kod wykonuje się linia po linii, w ustalonej kolejności. Każda instrukcja musi się zakończyć, zanim zacznie się kolejna. Jeśli jedna operacja trwa długo (np. pobieranie danych z serwera), cały program musi na nią czekać, co może go spowolnić.

Asynchroniczność pozwala na wykonywanie operacji w tle, bez blokowania reszty programu. Dzięki temu można np. pobierać dane z serwera i jednocześnie wykonywać inne zadania. Gdy operacja się zakończy, wynik zostaje zwrócony i można go przetworzyć. To sprawia, że aplikacja działa płynniej i szybciej reaguje na działania użytkownika.
```

Asynchroniczność polega na wykonywaniu operacji niezależnie od głównego wątku programu, dzięki czemu nie blokują one działania aplikacji. Wykorzystuje się do tego mechanizmy takie jak `callbacki`, `Promises` i `async/await`. Najczęściej stosuje się je przy operacjach wymagających czasu, np. pobieraniu danych z API, odczycie plików czy operacjach na bazach danych. Dzięki temu program może kontynuować działanie, zamiast czekać na zakończenie długotrwałych zadań.

- `Callbacki` to funkcje przekazywane jako argumenty do innych funkcji, które zostaną wywołane po zakończeniu operacji asynchronicznej. Pozwalają kontrolować kolejność wykonywania kodu, ale mogą prowadzić do tzw. _**callback hell**_, czyli trudnego do zrozumienia, zagnieżdżonego kodu.
- `Promises` to obiekty reprezentujące operacje asynchroniczne, które mogą zakończyć się sukcesem lub błędem. Zamiast zagnieżdżonych funkcji, używa się metod `.then()` do obsługi wyniku i `.catch()` do przechwytywania błędów, co poprawia czytelność kodu.
- `async/await` pozwala pisać kod w bardziej czytelny sposób, przypominający kod synchroniczny. Słowo kluczowe `async` oznacza, że funkcja zwraca `Promise`, a `await` pozwala zatrzymać jej wykonanie do momentu uzyskania wyniku, co eliminuje konieczność stosowania `.then()`.

#### `setTimeout(kod_do_wykonania, opóźnienie_w_ms)`:

`setTimeout(kod_do_wykonania, opóźnienie_w_ms)` to funkcja, która po upływie określonego czasu jest umieszczana w JS w kolejce do wykonania. Nie zatrzymuje on jednak działania reszty kodu – program wykonuje się dalej, a funkcja z `setTimeout()` uruchomi się dopiero po zadanym czasie.

### `Promise`

`Promise` to obiekt reprezentujący wynik operacji asynchronicznej, która może:

- zakończyć się sukcesem (`fulfilled`) i zwrócić wartość,
- zakończyć się błędem (`rejected`),
- być w trakcie oczekiwania (`pending`)

**Obsługa `promises`:**
- `promise.then()` – obsługa sukcesu
- `promise.catch()` – obsługa błędu
- `promise.finally()` – kod wykonujący się zawsze

### Łańcuchowanie `promises`:

Łańcuchowanie `promises` (_Promise chaining_) umożliwia sekwencyjne wykonywanie operacji asynchronicznych, w której każda metoda `.then(...)` otrzymuje wynik poprzedniej i przekazuje go dalej. Dzięki temu unika się zagnieżdżonych `callbacków` (zjawisko _callback hell_), poprawia czytelność kodu i ułatwia obsługę błędów. W łańcuchowaniu wystarczy jedno `.catch(...)`, aby przechwycić błąd z całego łańcucha. Jeśli `.then(...)` zwraca zwykłą wartość, zostaje ona przekazana do następnego `.then(...)`, a jeśli zwraca `Promise`, to kolejne kroki czekają na efekt jego wykonania.

```
 Aby łańcuchowanie działało poprawnie, każda metoda .then(...) powinna zwracać jakąś wartość lub nową Promise!
 Gdy then(...) zwróci jakąś wartość (np. return "GO CHAINING";), to ta wartość zostaje przekazana do następnego then(...).
 Kolejny .then(...) automatycznie przyjmuje tę wartość jako swój argument.
 Nie trzeba jej ręcznie deklarować – JavaScript przekazuje ją samoczynnie jako pierwszy parametr funkcji .then(...).
```

### Najnowsza składnia `asynch`/`await`:

`Asynch` oraz `Await` to nowa składnia umożliwia ona bardziej czytelne i intuicyjne zarządzanie kodem asynchronicznym niż tradycyjne podejście oparte na `callbackach` lub `Promise`.

- `async` oznacza, że funkcja zawsze zwraca `Promise`. Nawet jeśli zwróci wartość zwykłą, zostanie ona opakowana w `Promise`.
- `await` – zatrzymuje wykonanie kodu wewnątrz funkcji `async` do momentu, aż `Promise` zostanie rozwiązany.

```javascript
// W składni await nie występuje osobny blok kodu – 
// jest to po prostu słowo kluczowe używane wewnątrz 
// funkcji oznaczonej jako async
    async function nazwaFunkcji() 
    {
    let wynik = await operacjaAsynchroniczna();
    return wynik;
    }
```

### Łańcuchowanie w `async/await`:

W `async/await` można tworzyć łańcuchy wywołań, umieszczając kolejne instrukcje `await` jedna po drugiej. Oznacza to, że każda operacja czeka na zakończenie poprzedniej, zanim przejdzie do następnej. Przykład:

```javascript
async function fetchData()
{
    try {
    var waitie = await getDataPromise();
    var waitie2 = await getDataPromise();
    var waitie3 = await getDataPromise();

    return [waitie, waitie2, waitie3];
    } catch(err)
    {
        console.log(err.message);
    }
}
```

### Wnioski:

- `async/await` sprawia, że kod wygląda bardziej synchronicznie, co ułatwia czytanie i rozumienie go.
- Nie trzeba używać `.then()` i `.catch()`, które mogą tworzyć zagnieżdżenia i sprawiać, że kod staje się chaotyczny.
- Łatwiej obsłużyć błędy przy użyciu `try...catch` niż `.`catch()`.
- Trzeba tylko pamiętać, że funkcja `async` zawsze zwraca `Promise`.

## `Modules`:

Moduły JavaScript (`ES Modules`, `ESM`) pozwalają na organizację kodu poprzez importowanie i eksportowanie funkcji, zmiennych czy klas między plikami. Są natywnie obsługiwane w przeglądarkach i Node.js (z `"type": "module"` w pliku `package.json`). Sprawiają, że kod jest czytelniejszy.

Aby stworzyć moduł, należy użyć słowa kluczowego `export` przed funkcją, zmienną lub klasą w jednym pliku, a następnie zaimportować je w innym pliku za pomocą `import`. 

### Eksport domyślny:

Eksport domyślny (`export default`) pozwala na eksportowanie jednej wartości, funkcji lub klasy z modułu. Przy imporcie można użyć dowolnej nazwy, co odróżnia go od eksportu nazwanego, gdzie nazwa musi być zgodna z deklaracją. Eksport domyślny jest użyteczny, gdy moduł dostarcza główną funkcjonalność, a dodatkowe elementy mogą być eksportowane nazwane. Należy pamiętać, że w każdym pliku może być **tylko jeden** `export default`.

### `CommonJS`:

`CommonJS` to system modułów używany głównie w Node.js. Pozwala na eksportowanie i importowanie funkcji oraz zmiennych za pomocą `module.exports`i `require()`. W przeciwieństwie do `ECMAScript Modules`, które używają `export` i `import`, `CommonJS` nie jest domyślnie obsługiwany w przeglądarkach bez dodatkowego bundlera.

Pliki używające `CommonJS` mają rozszerzenie `.js` lub `.cjs`. Jeśli w `package.json` nie określono `"type": "module"`, Node.js traktuje wszystkie pliki `.js` jako `CommonJS`. Jeśli `"type": "module"` jest ustawione, aby wymusić `CommonJS`, należy używać rozszerzenia `.cjs`.

#### `ECMAScript Module` a `CommonJS`:

- **Składnia:** 
    - `CommonJS` używa `module.exports` i `require()` 
    - `ESM` korzysta z `export` i `import`
- **Środowisko:**
    - `CommonJS` jest domyślnie obsługiwany w Node.js 
    - `ECMAScript Modules` są standardem w nowoczesnych przeglądarkach oraz w Node.js, gdy w `package.json` ustawiono `"type": "module"`
- **Ładowanie modułów:**
    - `CommonJS` wczytuje moduły synchronicznie
    - `ESM` obsługuje importy asynchroniczne.

## Zarządzanie pamięcią:

### `process.memoryUsage()`:

`process.memoryUsage()` jest metodą wbudowana w Node.js, która zwraca obiekt zawierający dane o zużyciu pamięci.

Właściwości obiektu `process.memoryUsage()` informujące o zużyciu pamięci:
- `rss` (_Resident Set Size_) – cała pamięć zajmowana przez proces (kod, stos, sterta itd.).
- `heapTotal` – całkowity przydzielony obszar pamięci sterty
- `heapUsed` – ile pamięci na stercie jest aktualnie używane
- `external` – pamięć wykorzystywana przez natywne moduły (np. `Buffery`)

### `GC`:

`GC` (_Garbage Collection_) to mechanizm zarządzania pamięcią, który automatycznie zwalnia nieużywane obiekty z pamięci.

**Działanie `GC`:**

1. **Alokacja pamięci** - przydział pamięci poszczególnym zmiennym, obiektom itd.
2. **Sprawdzanie, czy obiekt jest używany** – GC analizuje, czy istnieją jakiekolwiek referencje do danego obiektu.
3. **Zwalnianie pamięci** – jeśli żaden kod nie odwołuje się do obiektu, GC usuwa go z pamięci, co zapobiega wyciekowi pamięci.

```
W Node.js GC działa automatycznie, ale można go wymusić ręcznie, uruchamiając Node.js z flagą --expose-gc i używając komendy global.gc();
```

### Ograniczenie podejścia `GC` w różnych przeglądarkach:

1. **Brak `global.gc()` w przeglądarkach**  
   
    W przeglądarkach nie ma możliwości jawnego wywołania `gc()`, ponieważ mechanizm zarządzania pamięcią jest wewnętrzny i kontrolowany przez silnik JavaScript (np. V8 w Chrome). Nie ma standardowego API umożliwiającego programistom wymuszenie uruchomienia `GC`.

2. **Wymagana flaga `--expose-gc` w Node.js**  
   
    W standardowej konfiguracji Node.js funkcja `global.gc()` nie jest dostępna. Aby jej użyć, należy uruchomić skrypt z flagą `--expose-gc`, np.:

   ```sh
   node --expose-gc memoryTest.js
   ```
    Bez tej flagi wywołanie `global.gc()` spowoduje błąd.

3. **Optymalizacje silnika JavaScript**  

    - Nawet w środowisku Node.js wymuszone wywołanie `gc()` nie gwarantuje natychmiastowego zwolnienia całej pamięci.  
    - Silnik JS może nadal przechowywać pewne obiekty w pamięci, jeśli uzna, że mogą być ponownie użyte.

4. **Brak kontroli nad GC w przeglądarkach**  
    
    - W środowisku przeglądarkowym zarządzanie pamięcią jest automatyczne i nie daje użytkownikowi możliwości ingerencji. `JavaScript Engine` sam decyduje, kiedy przeprowadzi `GC`, bazując na dostępnej pamięci i aktywności aplikacji.

## Wyciek pamięci:

- Wyciek pamięci powstaje, gdy usuwamy element DOM, ale pozostawiamy do niego referencję (np. w `event listenerze`).
- `Garbage Collector` nie zwalnia pamięci, jeśli nadal istnieje odniesienie do obiektu.
- Aby uniknąć wycieków pamięci, należy usuwać `event listenery` (`removeEventListener`) przed usunięciem elementu oraz zerować zmienne (`= null`).

