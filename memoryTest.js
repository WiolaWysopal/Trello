globalThis.largeRandomArray = Array.from({ length: 100000 }, () => Math.random());

console.log("First 5 elements:\n", largeRandomArray.slice(0, 5)); // displays first 5 elements

var memoryUsage = process.memoryUsage()

console.log(`Resident Set Size before NULL: ${memoryUsage.rss}`);

globalThis.largeRandomArray = null;
global.gc();
var memoryUsageAfter = process.memoryUsage()

console.log(`Resident Set Size after NULL and GC: ${memoryUsageAfter.rss}`);

