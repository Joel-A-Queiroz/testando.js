//const idadeJoel = 28
//const idadePedro = 23


//comparador de igualdade:
//const comparacao = idadeJoel != idadePedro


//Maior que:
//const comparacao = idadeJoel > idadePedro


//Menor que:
//const comparacao = idadeJoel < idadePedro

//console.log('São diferentes? ', comparacao);


//Comparação de idade:
//const idade = 29
//const idadeIrmao = 18

//const souMaiorDeIdade = idade >= 18
//const irmaoMarioDeIdade = idadeIrmao >= 18

//console.log('Sou maior de idade? ', souMaiorDeIdade)
//console.log('Irmão maior de idade? ', irmaoMarioDeIdade)


//comparador estrito:

//const idadeAtual = 28
//const idadeOutu = '28'

//const estritamente = idadeAtual === idadeOutu
//console.log('Minha idade atual é a mesma que em outubro? ', estritamente);



//Combinando comparadores:

const idade = 17
const maiorDeIdade = idade >=18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH

console.log("Pode Digirir? ", podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH;

console.log('Pode viajar sozinha? ', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade

console.log('Precisa de Acompanhante? ', precisaDeAcompanhante);



