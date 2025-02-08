"use strict";

// x = 5; -> Error: x is not defined
let y = 5;
var z = 10;
const a = 15;

//console.log(`x: ${x}`)
console.log(`y: ${y}`)
console.log(`z: ${z}`)
console.log(`a: ${a}`)

y += 5;
z += 10;
// a += 15; TypeError: Assignment to constant variable.
//console.log(`x: ${x}`)
console.log(`y: ${y}`)
console.log(`z: ${z}`)
console.log(`a: ${a}`)