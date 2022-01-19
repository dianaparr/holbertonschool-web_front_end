const { performance } = require('perf_hooks');

function countPrimeNumbers() {
    let primeNumbers = [];
    let i = 2;
    while (i <= 100) {
        if (i % 2 !== 0) primeNumbers.push(i);
        i++;
    }
    return primeNumbers;
};


let timeStart = performance.now();
for (let index = 0; index <= 100; index++) {
    countPrimeNumbers();
}
let timeEnd = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${timeEnd - timeStart} milliseconds.`);
