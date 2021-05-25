/*Crie um Array preenchido com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de Futebol,
 na ordem de colocação. Depois mostre:
a) Os 5 primeiros times.
b) Os últimos 4 colocados.
c) Em que posição está o time da Chapecoense.
d) Times em ordem alfabética. 
*/

let brasileirao = ['Palmeiras', 'Corinthians', 'Flamengo', 'Internacional', 'Grêmio', 'São Paulo',
    'Atlético Mineiro', 'Atlético-PR', 'Atlético-GO', 'Bragantino', 'Santos',
    'Bahia', 'Fluminense', 'Ceará', 'Vasco da Gama', 'Sport Recife',
    'América-MG', 'Chapecoense', 'Vitória', 'Paraná', 'Juventude', 'Fortaleza', 'Cuiabá']

console.log('a)Os 5 primeiros times')
for(var i=0;i<5;i++){
    console.log(brasileirao[i])
}

console.log('--------------------------------------------------------------------------')
console.log('b) Os últimos 4 colocados.')
for(var i=brasileirao.length-1;i>(brasileirao.length-5);i--){
    console.log(brasileirao[i])
}

console.log('--------------------------------------------------------------------------')
console.log('c) Em que posição está o time da Chapecoense.')
console.log(`A chapecoense esta na ${brasileirao.indexOf('Chapecoense')+1} posição`)

console.log('--------------------------------------------------------------------------')
console.log('d) Times em ordem alfabética.')
console.log(brasileirao.sort())