// const idade = 15

// if(idade >=18){
// console.log('É maior de idade')

// } else {
//     console.log('É menor de idade')
// }

// if(idade < 18){console.log('É menor de idade')}

// entre 9 e 10: Excelente
// entre 7 e 8: bom
// entre 4 e 6: médio
//  entre 0 e 3: ruim

// let notaDoAluno = 2

// if(notaDoAluno >=8){
//     console.log('Excelente')
// } else if(notaDoAluno >=7){
//     console.log('Bom')
// } else if (notaDoAluno >=4){
//     console.log('Médio')
// } else if(notaDoAluno >=0){
//     console.log('Ruim')
// }

const nome = "Joel";

if (nome) {
  console.log("Ola, ", nome);
} else {
  console.log("Ainda não sei seu nome");
}

const idade = null;

if (idade != null) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else if (idade >= 0 && idade < 18) {
    console.log("Menor de idade");
  }
}
