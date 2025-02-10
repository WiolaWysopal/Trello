function getData(callback, onError) 
{
    setTimeout(() => 
    {
        // Simulate error or success - to simulate an error, change to true
        const isError = false;

        if (isError) 
        {
            onError("INTERRUPTED");
        } 
        else 
        {
            const data = "Simulated data";
            callback(data);
        }
    }, 1000);
}

console.log("START...");

getData(
    result => 
    {
        console.log(`Received data: ${result};`);
        console.log("Koniec");
    },
    error => 
    {
        console.error(`Błąd: ${error}`);
        console.log("Koniec");
    }
);
