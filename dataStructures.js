let arr = [10, 5, 8, 20, 1]

console.log(`\nArray: ${arr}\n`)

arr.push(2)
console.log(`push(): ${arr}`)

arr.unshift(-12.3)
console.log(`unshift(): ${arr}`)

arr.pop()
console.log(`pop(): ${arr}`)

arr.shift()
console.log(`shift(): ${arr}`)

console.log("\n-----------------------------")
arr2 = arr.map((argument) => argument * 2)
console.log(`.map() method: ${arr2}`)

arr3 = arr.filter((argument) => argument > 10)
console.log(`.filter() method: ${arr3}`)

arr4 = arr.reduce((summa, argument) => summa + argument, 0)
console.log(`.reduce() method: ${arr4}`)

function statistic(array) 
{
    let sorted = array.sort((a, b) => a - b);
    
    let srednia = sorted.reduce((summa, argument) => summa + argument, 0) / sorted.length;
    
    let mediana;
    let mid = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 1) 
    {
        mediana = sorted[mid];
    } 
    else 
    {
        mediana = (sorted[mid - 1] + sorted[mid]) / 2;
    }

    return [srednia, mediana];
}


console.log(`\nstatistic():\naverage: ${statistic(arr)[0]}, middle number: ${statistic(arr)[1]}`)

