//Faça um programa que calcule a soma entre todos os números que são múltiplos de três e que se encontram no intervalo de 1 até 500.
let total = 0
for (var i=0; i<=500; i++){
    
    if(i%3==0 && i%2==1){
        total+=i
    }
    
}
console.log(total)