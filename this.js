const person = {
    name: "Alice",
    greet: function() 
        {
        console.log(`Hello, I'm ${this.name}`);
        },
    greetArrow: () => {console.log(`Hello, I'm ${this.name} but in Arrow this time!`)}
    };

const greetRef = person.greet;
const greetRefArr = person.greetArrow;

person.greet() // displays Hello, I'm Alice
greetRef()     // displays Hello, I'm undefined

person.greetArrow() // Hello, I'm undefined but in Arrow this time!
greetRefArr()       // Hello, I'm undefined but in Arrow this time!

// Arrow functions in an object inherit the value of this from the surrounding context at the time of their definition, rather than binding it to the object in which they are defined.