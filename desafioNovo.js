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



