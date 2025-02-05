console.log(5 == "5");   // true - porównanie tylko wartości, bez typów
console.log(5 === "5");  // false - porównanie wartości wraz z ich typami

console.log("\nPorównania null i undefined");
console.log(null == undefined);  // true - obie wartości są traktowane jako "brak wartości"
console.log(null === undefined); // false - różne typy danych

console.log("\nPorównania wartości logicznych");
console.log(true == "true");  // false - string "true" nie jest konwertowany na boolean
console.log(true === "true"); // false - różne typy
console.log(true == 1);        // true - true konwertuje się do 1
console.log(true === 1);       // false - różne typy
console.log(false == 0);       // true - false konwertuje się do 0
console.log(false === 0);      // false - różne typy

console.log("\nPorównania pustych wartości i zer");
console.log("" == 0);       // true - pusty string jest konwertowany na 0
console.log("" === 0);      // false - różne typy
console.log([] == false);   // true - pusty array konwertuje się na pusty string, a potem na 0
console.log([] === false);  // false - różne typy
console.log([0] == false);  // true - [0] konwertuje się na "0", a potem na liczbę 0
console.log([0] === false); // false - różne typy
console.log([1] == true);   // true - [1] konwertuje się na "1", potem na liczbę 1
console.log([1] === true);  // false - różne typy

// Wyjaśnienie zaskakujących wyników
console.log("\nWyjaśnienie wyników:");
console.log("[] == false -> true, ponieważ pusty array konwertuje się na pusty string, a pusty string na 0, więc mamy 0 == 0.");
console.log("[0] == false -> true, ponieważ [0] konwertuje się na string \"0\", a potem na liczbę 0, więc 0 == 0.");
console.log("null == undefined -> true, ponieważ oba są traktowane jako brak wartości, ale nie są identyczne (różne typy).");

