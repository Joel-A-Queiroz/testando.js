// const //readline = require ('readline')

// const leitor = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log("Boas vindas ao quiz do Javascript!");
// console.log("Responda corretamente entre A,B ou C\n");

// let acertos = 0;

// leitor.question(
//   "1) Qual palavra usamos para criar uma função?\n (a) define\n (b) function\n (c) create\n>",
//   (resposta1) => {
//     if (resposta1 == "b") {
//       acertos++;
//     }

//     leitor.question(
//       "Qual dessas é uma estrutura de repetição?\n (a) loopar\n (b) repeat\n (c) for\n> ",
//       (resposta2) => {
//         if (resposta2 == "c") {
//           acertos++;
//         }

//         leitor.question(
//           'Qual valor é considerado falsy em Javascript?\n (a) 1\n (b) 0\n (c) "texto"\n> ',
//           (resposta3) => {
//             if (resposta3 == "b") {
//               acertos++;
//             }


//             if (acertos == 3) {
//                 console.log('Parabéns! Você acertou todas as perguntas')
//             } else if (acertos == 2){
//                 console.log('Parabéns, continue assim!')
//             } else if(acertos == 1){
//                 console.log('Bom, mas continue praticando.')
//             } else {console.log('Infelizmente você errou, mas continue praticando')}

//             leitor.close();
//           },
//         );
//       },
//     );
//   },
// );

const nomes = ['Geraldo', 'Valeria', 'Pedro', 'Joel']

console.log('Nomes da minha familia: ', nomes.length)

for (let nome = 0; nome < nomes.length; nome++) {
  console.log('Nomes: ', nome)
  console.log(nomes[nome])
}

nomes.push('Giselle')

nomes.splice(1, 1);

console.log('Quantidade de nomes depois do exercicio: ', nomes.length)

/////////////////////////////////////////////////////////////////////////////////

//Desafio 3:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0;

for (let adicao = 0; adicao < numeros.length; adicao++) {
  soma += numeros[adicao]
}

console.log('Total da soma', + soma)

/////////////////////////////////////////////////////////////////////////////////

//Desafio 4:

// 


let notas = [8,6,6,10]

 let somaNotas = 0;

 for(nota of notas ) {
  somaNotas += nota;
 }

 let media = somaNotas / notas.length

 if(media >= 7){
  console.log('Aprovado', media)
 } else {console.log('Reprovado: ', media)}

 /////////////////////////////////////////////////////////////////////////////////

 //Desafio 5:

 