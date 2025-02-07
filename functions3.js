(function() 
{
    let var1 = "";
    const var2 = "";
    var var3 = "";
    console.log("IIFE invoked!");
})();

const counter = (function() 
{
    var counter = 0;

    console.log("Initial counter value: ", counter, "\n")
    return {

//function incrementation() - ERROR! Object expects key-value, so incremetation: function(){}
// or incrementation(){} would be correct

        incrementation: function()
        {
            counter += 1;
            return counter;
        },

        decrementation: function()
        {
            counter -= 1;
            return counter;
        },

        reset: function()
        {
            counter = 0;
            return counter;
        }
    };
})();

// console.log(var1); // ERROR: var1 is not defined
// console.log(var2); // ERROR: var2 is not defined
// console.log(var3); // ERROR: var3 is not defined

console.log(`Counter incrementation: `, counter.incrementation());
console.log(`Counter decrementation: `, counter.decrementation());
console.log(`Counter reset: `, counter.reset());
