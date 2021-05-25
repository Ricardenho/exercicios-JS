/*Crie um programa que vai gerar cinco números aleatórios e colocar em um Array.
 Depois disso, mostre a listagem dos números gerados e também indique o menor e o maior valor que estão na Lista */

let lista = []
let maior = 0
let menor = 101

for(var i=0;i<5;i++){
    lista.push(Math.round(Math.random()*100))
}

for(var i=0;i<5;i++){
    if (lista[i] > maior){
        maior =lista[i]
    }

    if (lista[i] < menor){
        menor =lista[i]
    }
}

console.log(lista)
console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)

