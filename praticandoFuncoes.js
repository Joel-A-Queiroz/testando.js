
// function calculaPotencia(num1, pow) {
//     let resultado = 1
//     for (let i = 0; i < pow; i++) {
//         resultado = resultado * num1;
//     }
//     return resultado;
// }

const { log } = require("console")

// console.log(calculaPotencia(2, 2));

// ////////////////////////////////////////////

// const fatorial = function f(num) {
//     if (num === 0 || num === 1) return 1;
//     return num * f(num - 1);
// }

// console.log(fatorial(5));

// /////////////////////////////////////////////////////

// // Juros composto:

// const calculaJuros = (valor, juros, tempo) => {
//     let taxaJuros = (juros / 100) + 1;
//     return valor * Math.pow(taxaJuros, tempo);
// }

// console.log(calculaJuros(500, 3, 5));

// /////////////////////////////////////////////////////////////////

// //CallBack

// function soma(num1, num2) { return num1 + num2 }
// function multiplicacao(num1, num2) { return num1 * num2 }

// function calculaOperacao(operacao, valorA, valorB) {
//     return operacao(valorA, valorB)
// }

// console.log(soma(5, 5));
// console.log(multiplicacao(10, 7));

// //////////////////////////////////////////////////////////////

// //setTimeOut:

// const idUser = '456786'

// const avisaUsuario = idUser => console.log(`Sessão de ${idUser} está inativa`);

// //setTimeout(avisaUsuario, 3000, idUser);

// //setTimeout((idUser) => console.log(`Sessão de ${idUser} está inativa`), 2000, idUser);

// // Exercicios

// function saudacao(nome = '') {
//     if (nome) {
//         console.log(`Olá, ${nome}! Boas vindas`)
//     } else { console.log('Olá! Seja bem vindo(a)') }
// }

// saudacao('Joel')
// saudacao();

// ////////////////////////////////////////////////////////////////////

// //Calcular desconto:



// function calculaDesconto(preco, desconto = 10) {
//     const valorFinal = preco - (preco * desconto / 100);
//     return valorFinal;
// }

// console.log(calculaDesconto(50, 50));


// /////////////////////////////////////////////////////////

// // Calcula média com arrow function:

// const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

// console.log(calcularMedia(7, 8))

// ///////////////////////////////////////////////////////////

// const verificaParidade = (numero) => {
//     if (numero % 2 === 0) {
//         return 'Numero par'
//     } else {
//         return 'Numero impar';
//     }
// }

// console.log(verificaParidade(9))

//////////////////////////////////////////////////////////

// Calcula frete:

const calculaFrete = (valorFrete) => {
    if (valorFrete <= 5) {
        return 'Valor do frete R$ 5,00'
    } else if (valorFrete > 5 && valorFrete <= 20) {
        return valorFrete * 0.50
    } else { return 'Valor do frete R$ 20,00' }
}

console.log(calculaFrete(19))

///////////////////////////////////////////////////////////

// Processar pedido com mensagem personalizada:

function processarPedido(nome, tipoCliente, callBack) {
    console.log(`Processando pedido de ${nome}...`)
    callBack(nome, tipoCliente);
}

function mensagemPersonalizada(nome, tipo) {
    if (tipo === 'vip') {
        console.log(`Obrigado pela preferencia ${nome}! Você ganhou frete grátis`);
    } else if (tipo === 'novo') {
        console.log(`Boas vindas ${nome}! Aproveite um cupom de boas vindas`)
    } else { console.log(`Obrigado pela sua compra ${nome}`) }
}

processarPedido('Lucas', 'novo', mensagemPersonalizada);

/////////////////////////////////////////////////////////////////////////////////

// setTimeOut:

function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}
 
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}
 
responderUsuario("Camila", mostrarResposta);

/////////////////////////////////////////////////////////////////////////////////////

//Sorteio:

const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
 
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
 
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
 
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
 
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];
 
realizarSorteio(participantes);

//////////////////////////////////////////////////////////

//Contagem regressiva com função:

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}
 
contagemRegressiva(5);

