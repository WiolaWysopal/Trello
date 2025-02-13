const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Tell me your name: ", (name) => {console.log(HelloWiola(name)); rl.close();});

function HelloWiola(name)
{
    return `Hello ${name}`;
}

//nonExistingFn();