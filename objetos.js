// let pessoa = {
//     nome: 'Joel',
//     Idade: 28,
//     temCNH: false
// }

// pessoa.sobrenome = 'Queiroz'

// console.log('Nome: ', pessoa.nome)
// console.log('Sobrenome: ', pessoa.sobrenome)


let livro = {
    nome: 'Reflexões',
    Autor: 'Joel',
    Paginas: 187
}

livro.idiomas = [
    'Portugues', 'Espanhol', 'Ingles'
]

livro.idiomas.push('Mandarim')

console.log('Detalhes do livro: ', livro)

delete livro.Paginas

console.log('Livro depois da correção: ', livro)

//Outra forma de acessar propriedades:

console.log('Autor do livro: ', livro['Autor'])

