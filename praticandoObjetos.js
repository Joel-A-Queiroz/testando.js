// Manipulando objetos:

// const pessoa = {
//     nome: 'Roberta R',
//     nascimento: '2020-01-01',
//     cpf: '23445667889',
//     pontuacao: 4576,
//     trofeus: ['speedrunner', 'indie']
// };

// console.log(pessoa.nome);
// console.log(pessoa.trofeus[0]);

// delete pessoa.cpf;

// console.log(pessoa);

// function exibeTrofeus(listaTrofeus) {
//     for (const trofeu of listaTrofeus) {
//         console.log(`Tem o trofeu ${trofeu}`)
//     }
// }

// exibeTrofeus(pessoa.trofeus);

/////////////////////////////////////////////////////////

//Praticas de método de objetos:

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log('A idade atual é: ', idade);
}


user.calculaIdade()

console.log(user);

///////////////////////////////////////////////

//Objetos comuns aos objetos:

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const cliente of clientes) {
    const status = cliente.ativo ? 'Ativo' : 'Inativo'
    console.log(`Status cliente:${cliente.nome}: ${status}`)
}