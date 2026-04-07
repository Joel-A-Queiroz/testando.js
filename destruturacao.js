const pessoa = {
    nome: 'Joel',
    idade: '28'
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade }) {
    console.log('Olá', nome)
    if (idade > 18) {
        console.log('Maior de idade')
    }
}

saudacao(pessoa)

const frutas = ['Maça', 'Banana']

const [primeira, segunda] = frutas