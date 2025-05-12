const prompt = require('prompt-sync')();
let numero = Number(prompt("Forneça um número: "));

let fatorial = 1;
for (let i = numero; i > 1; i--) {
    console.log(`${fatorial} x ${i} = ${fatorial * i}`);
    fatorial *= i;
}

console.log(`Fatorial de ${numero} é ${fatorial}`);
