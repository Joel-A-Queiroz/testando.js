const num1 = 2;
const num2 = 5;
const operacao = 'divisao'

if (operacao === 'soma') {
    console.log(num1 + num2)
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2)
} else { console.log('Operação invalida') }

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4000: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 11500;

if (salario >= 11000) {
    console.log(' 3% de bônus ')
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus')
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus ')
} else { console.log('9% de bônus') }

// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2032;

// const ano = 2000
// const ano = 2022
//const ano = 1992

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else { console.log(`${ano} não é Bissexto`) };



