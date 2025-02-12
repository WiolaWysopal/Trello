console.log("Script has been started.");

// Sample debugging function
function testDebug() 
{
    let sum = 0;
    for (let i = 0; i < 10; i++) 
    {
        sum += i;
        console.log("Iteration:", i, "sum:", sum); // set breakpoint here
    }
    return sum;
}

function bigTestDebug() 
{
    let sum = 0;
    for (let i = 0; i < 10000; i++) 
    {
        sum += i;
        console.log("Iteration:", i, "sum:", sum); // set breakpoint here
    }
    return sum;
}

// Function call
let result = testDebug();
console.log("Final result:", result);

