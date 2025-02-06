greet()
//console.log(greetExpression()) > ReferenceError

function greet() 
{
    console.log("Hello from declaration!");
}
    
    
const greetExpression = function() 
{
    return "Hello from expression!";
}

console.log(greetExpression())

