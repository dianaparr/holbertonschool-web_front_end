// Callback queue (src: https://felixgerschau.com/javascript-event-loop-call-stack/)
// The callback we passed as an argument to setTimeout is written in JavaScript.
// Thus, the JavaScript interpreter needs to run the code, which means that it needs to use
// the call stack, which again means that we have to wait until the call stack is empty in order
// to execute the callback.

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
    setTimeout(() => { countPrimeNumbers(); }, 1000);
}
let timeEnd = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${timeEnd - timeStart} milliseconds.`);
