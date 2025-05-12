const prompt = require('prompt-sync')();

let A = Number(prompt("Informe um número: "));
let B = Number(prompt("Informe um número: "));
let C = Number(prompt("Informe um número: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("O triângulo possui todos os lados iguais, então é um Triângulo equilátero.");
    } else if (A === B || A === C || B === C) {
        console.log("O triângulo possui dois lados iguais, então é um Triângulo isósceles.");
    } else {
        console.log("O triângulo possui todos os lados diferentes, então é um Triângulo escaleno.");
    }
} else {
    console.log("Os valores informados não formam um triângulo.");
}
