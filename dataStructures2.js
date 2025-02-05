const mySet = new Set([1, 1, 2, 3, 3]);
console.log(mySet); 

console.log(`Set values: `)
for (let value of mySet)
    console.log(`${value}`)

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set({ id: 1 }, "value2");

console.log("Map first value: ", myMap.get("key1"));

function checkInSet(set, value)
{
    if (set.has(value)) 
    {
        console.log(`Set has value: ${value}`);
    } 
    else 
    {
        console.log(`Set doesn't have: ${value}`);
    }
}

function checkInMap(map, key) 
{
    if (map.has(key)) 
    {
        console.log(`Map has key: ${key}, and its value: ${map.get(key)}`);
    } 
    else 
    {
        console.log(`Map doesn't have: ${key}`);
    }
}

checkInSet(mySet, 2);
checkInSet(mySet, 5);

checkInMap(myMap, "key1");
checkInMap(myMap, { id: 1 });