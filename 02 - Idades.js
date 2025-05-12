const prompt = require('prompt-sync')();

let idade = Number(prompt("Qual a sua idade? "))

if(idade >= 0 && idade <= 11){
    console.log("Você é uma criança.");
}
else if(idade >= 12 && idade <= 17){
    console.log("Você é um adolescente.");
}
else if(idade >= 18 && idade <= 59){
    console.log("Você é um adulto.");
}
else{
    console.log("Você é um idoso.");
}