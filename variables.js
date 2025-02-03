var x = 10;   
let y = 20; 
const z = 30; 

console.log("x:", x);  
console.log("y:", y);  
console.log("z:", z); 

if (x == 100) 
    {
    var x = 15;  
    let y = 25;   
    const z = 35; 

    console.log("Wewnątrz if:");
    console.log("x:", x);  
    console.log("y:", y);  
    console.log("z:", z);  
} 
else 
{
    console.log("Wewnątrz else:");
    console.log("x:", x);  
    console.log("y:", y);  
    console.log("z:", z); 
}

console.log("Po wyjściu z bloku:");
console.log("x:", x);  
console.log("y:", y);
console.log("z:", z); 

