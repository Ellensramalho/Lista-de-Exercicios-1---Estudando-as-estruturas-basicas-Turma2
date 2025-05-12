const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Forneça um valor: "));
let soma = 0;
let quantidade = 0;

while (numero !== 0) {
    soma += numero;
    quantidade++;

    numero = parseFloat(prompt("Forneça um valor: "));
}

if (quantidade > 0) {
    console.log(`A média aritmética é: ${soma / quantidade}`);
} else {
    console.log("Nenhum número válido foi fornecido.");
}
