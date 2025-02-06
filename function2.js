// FUNCTIONS USED IN TRANSFORMATION 
// function greet() 
// {
//     console.log("Hello from declaration!");
// }
    
    
// const greetExpression = function() 
// {
//     return "Hello from expression!";
// }

// Arrow Functions:

let greetArrow = () => console.log("Hello from declaration!");
greetArrow()

let greetExpressionArrow = () => "Hello from greetExpressionArrow!"
console.log(greetExpressionArrow())

let obj = {
    tradictionalFunction: function(a, b)
    {
        console.log(`traditional function this: `, this)
        return a + b
    }, 
    
    arrowFunction: (a, b) => {
        console.log(`arrow function this: `, this)
        return (a + b)/2}
        
}

console.log(obj.tradictionalFunction(1, 2))
console.log(obj.arrowFunction(1, 2))

