// import built-in require module
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ocenPunktyIf(score) 
{
    if (score >= 90 && score <= 100) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else if (score >= 50) return "E";
    else if (score >= 0) return "F";
    else return "Invalid score";
}

function ocenPunktySwitch(score) 
{
    switch (true) {
        case score >= 90 && score <= 100: return "A";
        case score >= 80: return "B";
        case score >= 70: return "C";
        case score >= 60: return "D";
        case score >= 50: return "E";
        case score >= 0: return "F";
        default: return "Invalid score";
    }
}

rl.question("Enter number of points [0-100]: ", (score) => 
    {
    let parsedScore = parseInt(score);

    // Checks if the score is a number and is in the range 0–100
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) 
    {
        console.log("Invalid input! Please enter a number between 0 and 100.");
    } 
    else 
    {
        console.log("\nIF-ELSE Statement:");
        console.log(`Grade: ${ocenPunktyIf(parsedScore)}`);

        console.log("\nSWITCH Statement:");
        console.log(`Grade: ${ocenPunktySwitch(parsedScore)}`);
    }

    rl.close();
    }
);

