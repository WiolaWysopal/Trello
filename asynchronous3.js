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

async function fetchData()
{
    try {
    var waitie = await getDataPromise();
    var waitie2 = await getDataPromise();
    var waitie3 = await getDataPromise();

    return [waitie, waitie2, waitie3];
    } catch(err)
    {
        console.log(err.message);
    }
}

// fetchData(); is valid but does not show the result in the console
// Use the following call to see the output:
fetchData().then(result => console.log(result));

