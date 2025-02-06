let arr = [{name: "A"}, {name: "B"}, {name: "C"}, {name: "D"}, {name: "E"}, {name: "F"}]

function controlFlowWithLoops(array)
{
    console.log("for ... ");
    for (let i = 0; i < array.length; i++) 
    {
        console.log(array[i]);
    }

    console.log("\nfor ... in");
    for (let index in array) 
    {
        console.log(index, array[index]);
    }

    console.log("\nfor ... of")
    for (let el of array)
    {
        console.log(el)
    }

    console.log("\nwhile ...")
    let i = 0;
    while (i < array.length)
    {
        console.log(array[i])
        i += 1
    }
}

controlFlowWithLoops(arr)

