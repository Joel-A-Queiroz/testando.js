 //Escrever códigos com nome de variaveis compreensiveis


 let nome = 'Joel Andrade Queiroz'

 console.log('Olá,' ,nome, 'Seja Bem-vindo!')

 let anoAtual = 2026

 let anoNascimento = 1997

 console.log('Sua idade é de: ', anoAtual - anoNascimento)

 let cidade = 'Sao Paulo'

 let estado = 'Sao Paulo'

 let pais = 'Brasil'

 console.log('Você está na cidade: ', cidade)
 console.log('Estado: ', estado)
 console.log('Pais: ', pais)


//Testando o tipo de variavel - estilo boolean



 let temCarteira = false
 console.log(typeof temCarteira)



//Simulação de deposito, saque e saldo final:



 let saldoInicial = 0
 let deposito = 200
 let saque = 50

 console.log('Saldo inicial: ', saldoInicial)
 console.log('Valor depositado: ', deposito)
 console.log('Saque realizado: ', saque)

 console.log('Seu saldo final após a movimentação é: ', saldoInicial + deposito - saque)



//Variavel sobre disciplinas escolares:

let portugues = 8
let matematica = 7
let ciencias = 10
let media = (portugues+matematica+ciencias) /3;
console.log('Média Final: ', media)

//Reajuste salarial usando porcentagem:

let salario = 3000
let aumentoSalarial = salario *1.10;
console.log('Aumento de salario após o reajuste de 10% é: ', aumentoSalarial)

//Contador de cliques:

let cliques = 0;
cliques++;
cliques++;

console.log('O botão foi clicado: ' + cliques +  'vezes')