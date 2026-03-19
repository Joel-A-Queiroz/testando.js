//console.log('Boas vindas a calculadora de troco')

//let valorCompra = 17.50
//let valorPago = 20

//console.log('Valor pago: R$ ', valorPago)
//console.log('Valor compra: R$ ', valorCompra)

//let valorTroco = valorPago - valorCompra

//console.log('Valor do troco é: R$', valorTroco)

// Verificação de maioridade:

//let idade = 18
//let maiorDeIdade = idade >= 18


//console.log("É maior de idade? ", maiorDeIdade);

// Verificação de nota:

//let portugues = 10
//let matematica = 4
//let media = (portugues + matematica)/2

//console.log('Média: ', media);

//let passouDeAno = media >=7
//console.log('Passou de ano? ', passouDeAno);

//Simulação troco:

//let valorCompra = 35.90
//let valorPago = 50

//console.log('Valor compra:R$ ', valorCompra)
//console.log('Valor Pago: R$ ', valorPago)

//let valorTroco = valorPago - valorCompra

//console.log('Valor do troco é: R$ ', valorTroco)

// Verificação de senha:

//const senhaPrimeiro = 1234
//const senhaSegundo = 1233

//console.log('A senha é igual?: ', senhaPrimeiro == senhaSegundo);

//Validação de faltas:

//let totalAulas = 100
//let totalFaltas = 24

//let porcentagemDefaltas = totalFaltas / totalAulas *100

//let aprovado = porcentagemDefaltas < 25

//console.log('Aprovado?: ', aprovado);

//Verificação de login:

//let temLogin = true
//let temSenha = true

//console.log('Tem login e senha? ', //temLogin && temSenha);

// Desafio de estruturas de decisão


// const idade = 17

// if (idade >=18) {console.log('Pode comprar bebida')

// } else {console.log('Venda proibida para menores de 18 anos')}

// //Horario atual

// let horaAtual = 13


// if (horaAtual>= 6 && horaAtual <12) {console.log('Bom dia!')

// } else if (horaAtual >= 13 && horaAtual < 18){console.log('Boa tarde"')

// } else {console.log('Boa noite!')}

// //Verificação de numero positivo ou negativo

// const numero = 500

// if (numero >0) {console.log('numero positivo')

// } else if (numero <0){console.log('Numero negativo')

// } else {console.log('Numero é zero')}




// //Conversor de nota em conceito

// let nota = 5

// if (nota >= 9) {console.log('A');

// } else if (nota >= 8) {console.log('B');

// } else if (nota >= 6) {console.log('C');

// } else if (nota >= 4) {console.log('D');

// } else {console.log('E');

// }





// //Par ou impar com ternario

// let numero2 = 7;

// let resultado = (numero2 % 5 === 0) ? 'Par' : 'Impar';
// console.log('O numero é: ', resultado )




//Menu com switch-case

// let opcoes = 1

// switch (opcoes) {
//     case 1:
//     console.log("Cadastrar")
//     break;
    
//     case 2:
//         console.log("Listar")
//         break;
//      case 3:
//         console.log("Sair")
//         break;
//         default: 

// console.log("Opção inválida"); 

// break; 
// }

// //Validação de e-mail

// let email = "joel.queiroz"

// if (email === "") {console.log('Preencha o campo de e-mail')

// } else {console.log("E-mail válido")

// }

// // validação de senha:

// let senha = 'jqt057#'
// let senhaValida = false

// if (senhaValida) {console.log('Senha válida') 

// } else {console.log('Senha muito curta')}



//Laços de repetição

 let par = 0
 let impar = 0
 

// for (let contador = 0; contador <= 100; contador++) {
   
//     if(contador % 2 == 0) {
//         par++
//     } else {impar++}
    
// }

// console.log('Total de numero pares: ', par)
// console.log('Total de numero impares: ', impar)


//////////////////////////////////////////

for(let contador = 0; contador <=10; contador++) {console.log('Numero atual: ', contador)}

//////////////////////////////////////////

let numero = 1
let soma = 0

while(numero <=100){soma += numero; numero++} console.log('O total da soma é: ', soma)

///////////////////////////////////////

let numeroTabuada = 7; 

for (let i = 1; i <= 10; i++) { 

console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i)); 

} 

//////////////////////////////////////////////


//for (;;) { console.log('Laço infinito!'); } 



