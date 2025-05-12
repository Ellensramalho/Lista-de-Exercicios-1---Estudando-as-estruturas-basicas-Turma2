const prompt = require('prompt-sync')();

let numero = Number(prompt("Forneça um número: "));

if (numero % 2 === 0){
    console.log("O número é par.")
}
if (numero % 2 !== 0){
    console.log("O número é ímpar.")
}


