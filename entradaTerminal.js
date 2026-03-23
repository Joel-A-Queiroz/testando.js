const readline = require ('readline')

//Isso é um leitor de linhas
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Criando a interação com o usuario
leitor.question('Qual é o seu nome?', (nome) => {
console.log('Olá!')
console.log('Boas Vindas ao nosso sistema!', nome)


leitor.question('Qual a sua idade? ', (idade) => {
if (idade >=18) {
    console.log('Parabéns! Você pode tirar sua carteira de motorista')
} else {console.log('Infelizmente você não pode tirar sua carteira de motorista')}

leitor.close()
})




})

