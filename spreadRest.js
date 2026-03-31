let joel1 = {
    nome: 'Joel',
    idade: 28,
    profissao: 'Técnico de enfermagem'
}

const joel2 = {...joel1}

joel2.idade = 29

console.log(joel1)
console.log(joel2)

joel1 = {
    ...joel2,
    profissao: 'Desenvolvedor',
    temCNH: true
}

console.log(joel1)


const { nome, ...restante} = joel1

console.log(nome)
console.log(restante)



