// w JS deklaruje się zmienną za pomocą let, const lub var, a typ jest automatycznie dedukowany:
let str = "Raccoon"; // a nie let string str = "Raccoon"
let num = 4;
let bgi = 500000n;
let bln = true;
let nll = null;
let undef = undefined;
let sym = Symbol();

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bgi, typeof bgi);
console.log(bln, typeof bln);
console.log(nll, typeof nll);
console.log(undef, typeof undef);
console.log(sym, typeof sym);


console.log(typeof null);