//Passing an object by default as a formal parameter: user = {}
function getUserName(user = {})
{
    return user.name || "Anonim"
}

function getUserNameCondition(user = {})
{
    return user.isActive && user.isAdmin ? `${user.name} is active and admin`: "The condition was not fulfilled";
}

console.log(getUserName())
console.log(getUserName({name: "Jane Doe"}))
console.log(getUserName("Jane Doe")) // returns 'Anonim' because "Jane Doe".name is undefined

console.log("\n\nUSER UNDER CONDITION:")
console.log(getUserNameCondition({name: "John Doe", isActive: true, isAdmin: true}))
console.log(getUserNameCondition({isActive: true, isAdmin: true})) // user.name returns undefined
console.log(getUserNameCondition({name: "John Doe", isActive: false, isAdmin: true}))
console.log(getUserNameCondition({name: "John Doe", isActive: true, isAdmin: null}))

console.log("\n\nNullish Coalescing")
console.log(null ?? getUserName({name: "Jane Doe"}));
console.log(null ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);