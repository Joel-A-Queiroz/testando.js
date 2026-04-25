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


//////////////////////////////////////////////////////////////////////

//Criando produtos com objetos:

const produto = {
    nome: 'Livro',
    preco: 60.50,
    disponivel: true,
}

console.log(produto);

///////////////////////////////////////////////////////////////////////

//Objetos de configurações:

const configuracoes = {
    tema: "Natal",
    notificacoes: true,
    idioma: 'español',
}

console.log('Tema: ', configuracoes.tema);
console.log('Idioma:', configuracoes['idioma']);

/////////////////////////////////////////////////////////

//Lista de receitas:

const receita = {
    nome: 'Bolo de laranja',
    ingredientes: ['Laranja', 'Açucar', 'Fermento', 'Agua', 'Farinha'],
    TempoDePreparo: '35 minutos',
}

console.log(receita.ingredientes[2]);
console.log('Ingrediente complementar: ', receita.ingredientes[4]);

////////////////////////////////////////////////////////////////

//Excluindo propiedades:

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    modeloAntigo: 'Corolla XEi'
};

delete carro.modeloAntigo;
console.log(carro);

/////////////////////////////////////////////////

//Percorrendo lista de dispositivos com for:

const dispositivos = [
    {
        nome: 'Samsung',
        status: 'Ativo',
    },
    {
        nome: 'Iphone',
        status: 'Inativo',
    },
    {
        nome: 'Motorola',
        status: 'Inativo'
    }
]

for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} || Status: ${dispositivo.status}`)
}

////////////////////////////////////////////////////////////

//Metodo this:

const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: true,
    exibirStatus: function () {
        if (this.funcionando) {
            console.log(`A máquina ${this.nome} está em funcionamento.`);
        } else {
            console.log(`A máquina ${this.nome} está parada.`);
        }
    }
};

maquina.exibirStatus();

////////////////////////////////////////////////////

//Montando objetos a partir de pares-valores

function montarObjeto(arrPares) {
    const resultado = {};

    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }

    return resultado;
}

const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];

console.log(montarObjeto(dados));

//////////////////////////////////////////

//Criando sistema de inspeção:

const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};

const chaves = Object.keys(relatorio);
const valor = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log('Catogorias avalidas: ', relatorio);
console.log('Valores registrados: ', valor);


console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
    const status = valor > 50 ? "alerta" : "ok";
    console.log(`${chave}: ${valor} (${status})`);
}

//////////////////////////////////////////////

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

////////////////////////////////////////////////////////////////


const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
};

curso.gerarRelatorio();
