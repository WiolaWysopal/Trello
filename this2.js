function showName() 
{
    console.log(this.name);
}

function showAllIdentity(species, age) 
{
    console.log(`Name: ${this.name}, Species: ${species}, Age: ${age}`);
}

var dog = {
    name: "Barky",
}

var cat = {
    name: "Kitty",
}

var rat = {
    name: "Scabbers",
}

console.log(".call():")
showName.call(dog)   // Barky
showName.call(cat)   // Kitty
showName.call(rat)   // Scabbers

console.log("\n.apply():")
showName.apply(dog)
showName.apply(cat)
showName.apply(rat)

console.log("\n.bound():")
const boundFn = showName.bind(rat)
boundFn()

console.log("\n\nSHOW ALL IDENTITY\n\n")

console.log(".call():")
showAllIdentity.call(dog, "Dog", 6)   // Barky
showAllIdentity.call(cat, "Cat", 5)   // Kitty
showAllIdentity.call(rat, "Rat", 2)   // Scabbers

console.log("\n.apply():")
showAllIdentity.apply(dog, ["Dog", 6])
showAllIdentity.apply(cat, ["Cat", 5])
showAllIdentity.apply(rat, ["Rat", 2])

console.log("\n.bound():")
const boundFn2 = showAllIdentity.bind(rat)
boundFn2("Rat", 2)

