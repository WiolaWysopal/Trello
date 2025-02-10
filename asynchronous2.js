function getData(callback) 
{
    setTimeout(() => 
    {
        const data = "Simulated data";
        callback(data);
    }, 1000);
}

console.log("CALLBACK: START...");

getData(
    result => 
    {
        console.log(`Received data: ${result};`);
        console.log("CALLBACH: FINISHED");
    }
);


/* ---- PROMISES ---- */

//Although in this case Promise does not consider failure, 
// due to the design of the promise function, 
// two parameters must be declared for success and failure: 
// resolve and reject
function getDataPromise() 
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            const data = "Simulated data";
            resolve(data);
        }, 1000);
    });
}

console.log("PROMISE: START...");

// Promise chaining, 
// which supports asynchronous execution of the getDate Promise() function.
getDataPromise()
    .then(result => 
    {
        console.log(`Received data: ${result};`);
        console.log("PROMISE: FINISHED");
        return "WENT CHAINING" // returns further .then argument automatically
    })
    .then (upperResult => {console.log(`CHAINED PROMISE: ${upperResult}`); })
    .catch(error => 
    {
        console.error("PROMISE: AN ERROR HAS OCCURED!", error);
    });


