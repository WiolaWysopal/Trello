//"use strict";

const a = 5;
var b = 10;

function add(a, b)
{
    "use strict";
    // x = 5; // for strict mode only: ReferenceError: x is not defined ()
    a += 1;   // a += 1; changes the local copy of a but does not affect the global const a, hence const a can be modified
    b += 1;

    console.log(`this: ${this}`)
    return a + b;
}

console.log(add(a, b));

