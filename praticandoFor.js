// FOR

// Gerar numeros aleatorios de 1 a 50 e
//Interromper o laço caso o numero gerado seja 15
//Interromper depois de 30 tentativas e contar a quantidade de tentativas

// for (let contador = 1; contador <= 30; contador++) {
//     const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
//     if (numero === 15) {
//         console.log(`${numero} em ${contador} tentativas`);
//         break;
//     }
// }


///////////////////////////////////////////////////////////////////////////////

//For continue:

//let contador = 0

// for (let i = 1; i <= 30; i++) {
//     const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
//     if (numero % 5 === 0) {
//         continue;
//     }

//     contador++;;
// }

// console.log(contador);

//////////////////////////////////////////////////////////////////////////////////

// Numero secreto com while:

// const numeroSecreto = 22;
// let numeroAleatorio = 0;
// let contador = 0;

// while (numeroSecreto !== numeroAleatorio) {
//     numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
//     contador++
// }

// console.log(`Adivinhou em ${contador} tentativas`);

// ////////////////////////////////////////////////////////////////////////////////

// // Do while:

// let numeroRandom = 0

// do {
//     numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
//     console.log(numeroRandom);
// } while (numeroRandom % 2 !== 0);

// console.log(numeroRandom);

// /////////////////////////////////////////////////////////////////////

// let texto = 'Luz Azul'
// let textoNormalizado = texto.toLowerCase().replace(/\s+/g, '');
// let textoInvertido = '';

// for (let i = textoNormalizado.length - 1; i >= 0; i--) {
//     textoInvertido += textoNormalizado[i];
// }

// const result = textoNormalizado === textoInvertido
//     ? `${texto} é palindromo`
//     : `${texto} não é palindromo`

// console.log(result);

////////////////////////////////////////////////////////////////////////

// Desafios for:

let sequencia = 0

for (let sequencia = 0; sequencia <= 5; sequencia++) {
    console.log(sequencia);
}

////////////////////////////////////////////////////////////////

let nasa = 0

for (let nasa = 10; nasa >= 0; nasa--) {
    console.log(`${nasa}`);

}

console.log('Lançar');

////////////////////////////////////////////////////////////////

//Numeros pares:

let numerofinal = 10

for (let i = 0; i <= numerofinal; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}

//////////////////////////////////////////////////////////////

const senha = 'seguranç@2025'

for (let i = 0; i < senha.length; i++) {
    console.log(`Caractere ${i + 1}: ${senha[i]}`);

}

//////////////////////////////////////////////////////////

// Array:

const nomes = ['Ana', 'Bruno', 'Carla', 'Fim', 'Daniel']

let i = 0;

while (nomes[i] !== 'Fim') {
    console.log('nome:', nomes[i]);
    i++
}

////////////////////////////////////////////////////////

// Numero proibido:

for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        console.log('Numero proibido alcançado, encerrando...')
        break
    }
    console.log(i)
}

///////////////////////////////////////////////////////////////////////////////

// Calculando economias:

const totalDias = 10;
let economia = 0;
let dias = 1;

do {
    economia += dias;
    dias++;
} while (dias <= totalDias);

console.log(`Total economizado: R$ ${economia}`);