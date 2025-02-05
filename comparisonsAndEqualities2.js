let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// false - Object.is porównuje referencje, więc różne obiekty są różne
console.log(Object.is(obj1, obj2));

// Dodanie obj3
let obj3 = obj1;
console.log(obj3 === obj1); // true - obj3 i obj1 wskazują na ten sam obiekt