const prompt = require('prompt-sync')();

console.log("*-*-*-*-*-*-*-*-* Sorveteria *-*-*-*-*-*-*-*-*-*-*-* \n 1- Sorvete \n 2- Milkshake \n 3- Pudim")
let sobremesa = Number(prompt("Qual sobremesa? "))

switch(sobremesa){
    case 1 : 
        console.log("A sobremesa escolhida foi sorvete!")
        break
    case 2 :
        console.log("A sobremesa escolhida foi milkshake.")
        break
    case 3: 
        console.log("A sobremesa escolhida foi pudim.")
        break
    default:
        console.log("Sobremesa não encontrada.")
}