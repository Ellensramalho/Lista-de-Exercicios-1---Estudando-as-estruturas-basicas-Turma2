const prompt = require('prompt-sync')();

let macas = Number(prompt("Número de maçãs: "))

if(macas < 12){
    let totalCompras = macas * 0.30
    console.log(`Total das compras foi: R$ ${totalCompras}`)
}
else{
    let totalCompras = macas * 0.25
    console.log(`O total de compras foi: R$ ${totalCompras}`)
1}
