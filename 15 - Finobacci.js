const prompt = require('prompt-sync')();

let a = 0
let b = 1;

console.log("Sequência de Fibonacci:")

for (let i = 0; i < 10; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}
