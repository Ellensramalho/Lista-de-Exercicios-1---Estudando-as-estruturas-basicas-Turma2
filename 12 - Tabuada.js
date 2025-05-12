const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));
let opcao = -1;

console.log("\n Escolha a operação:");
console.log("1 - Tabuada de Soma");
console.log("2 - Tabuada de Subtração");
console.log("3 - Tabuada de Multiplicação");
console.log("4 - Tabuada de Divisão");

opcao = Number(prompt("Escolha uma opção: "));

if (opcao === 1) {
    console.log(`\nTABUADA DE SOMA DO ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} + ${i} = ${numero + i}`);
    }
} else if (opcao === 2) {
    console.log(`\nTABUADA DE SUBTRAÇÃO DO ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} - ${i} = ${numero - i}`);
    }
} else if (opcao === 3) {
    console.log(`\nTABUADA DE MULTIPLICAÇÃO DO ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else if (opcao === 4) {
    console.log(`\nTABUADA DE DIVISÃO DO ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} / ${i} = ${numero / i}`);
    }
} else {
    console.log("Opção inválida. O programa será encerrado.");
}

