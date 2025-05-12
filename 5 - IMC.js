const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Qual sua altura? "))
let peso = parseFloat(prompt("Qual o seu peso "))

let imc = peso/ altura **2

if(imc < 19){
    console.log("Abaixo do peso.")
}
else if(imc >= 19 && imc < 25){
    console.log("Peso normal.")
}
else if(imc >= 25 && imc < 30){
    console.log("Sobrepeso.")
}
else{
    console.log("Obesidade.")
}
console.log("Seu imc é:", imc.toFixed(2))