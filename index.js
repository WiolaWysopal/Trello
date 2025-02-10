import { add, PI } from "./mathUtils.js";

//With default export you can name the imported multiply function differently, 
// for example factor (in index.js file it's multiply):
import factor from "./mathUtils.js"

console.log(add(2, 3));
console.log(PI);
console.log(factor(2, 3));

