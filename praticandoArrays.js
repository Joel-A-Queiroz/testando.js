// const arr = [1, 2, 3, 4]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// arr[0] = 9;
// console.log(arr)

// arr[5] = 10;
// console.log(arr)

// /////////////////////////////////

// //Criando um array com uma sequencia de numeros entre x e y:

// function criarArrNum(inicio, fim) {
//     const arr = [];
//     let elemento = inicio;

//     for (let i = 0, j = 0; j < fim; i++, elemento++) {
//         arr[i] = elemento;
//         j = elemento;
//     }

//     return arr;
// }

// console.log(criarArrNum())

// ///////////////////////////////////////////////////////////////////////////////

// const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const novoArr = arrNumeros.slice(4)

// console.log(novoArr);

// ////////////////////////////////////////////////////////////////////////////

// //Array Callback:

// const dados = [12, 15, 20, 25]

// const numeroCalculado = dados.map((num) => {
//     return num * 10
// })

// console.log(numeroCalculado);

// ///////////////////////////////////////////////////////

// //Array forEach = executa o laço

// const estrelas = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// estrelas.forEach((num, i) => {
//     console.log(`O número ${num} está no indice ${i}`)
// });

// /////////////////////////////////////////////////////

// //Filtragem:

// const numeros = [12, 15, 24, 38, 45]

// const numFiltrado = numeros.filter(num => num % 5 === 0);

// console.log(numFiltrado);


// //////////////////////////////////////////////////////////////

// //Percorrendo array dentro de array com forEach:

// const arr1 = [[1, 2], 2, 3]

// const copiaArray = (arr) => {
//     const copia = [];
//     arr.forEach((elem) => {
//         if (Array.isArray(elem)) {
//             copia.push(copiaArray(elem))
//         } else {
//             copia.push(elem);
//         }
//     })

//     return copia;
// }

// const arr2 = copiaArray(arr1);
// arr1[0][0] = 5;

// console.log(arr1);
// console.log(arr2);

//////////////////////////////////////////////////////////

//Filtrar um array e alterar valores espcificos:
//ex: alterar numeros para strings:

// const cpfs = ['12345678999', '09876543211', 64783546783, '53782215655', 12345432343]

// const result = cpfs.map(cpf => {
//     //if (typeof cpf === 'strings') {
//         return cpf;
//     } else {
//         //return cpf.toString()
//     }
// })

//console.log(result);

/////////////////////////////////////////////////////////////////

//Exercicio de array:

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

console.log('Segundo item da lista:', listaDeCompras[1]);

listaDeCompras[3] = 'cebola'

console.log(listaDeCompras);

////////////////////////////////////////////////////////////////

//Despesas a casa com array:

const despesas = [120, 80, 45.5, 200, 60];

let total = 0;

for (let i = 0; i < despesas.length; i++) {
    total += despesas[i];
}

console.log('Total: R$', total);

//////////////////////////////////////////////////////

//Exercicio for of:

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (nome of estudantes) {
    console.log('Estudante: ', nome);
}

///////////////////////////////////////////////////////

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach((men) => {
    console.log('Notificação: ', men);
})

////////////////////////////////////////////////////////

// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

// tarefas.push('Pagar boletos');
// console.log("Lista após adicionar:", tarefas);

// tarefas.pop();
// console.log("Lista após remover a última tarefa:", tarefas);

///////////////////////////////////////////////////////////////

//Cópia do array com metodo slice:

const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosNovo = pedidos.slice();

pedidosNovo.push('Boné')

console.log('Lista de compras antigas: ', pedidos)
console.log('Lista de compras nova: ', pedidosNovo);

///////////////////////////////////////////////////////////////////

// Buscando item em uma lista:

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) {
    console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
    console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}

///////////////////////////////////////////////////////////////////////////////////

const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map(preco => preco * 0.9);

console.log("Preços com desconto:", precosComDesconto);

/////////////////////////////////////////////////////////////////////////////////

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const autorizados = participantes.filter(p => {
  p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
  return p.idade >= 18;
});

const aprovados = autorizados.map(p => p.nome);

console.log("Lista de aprovados:", aprovados);

/////////////////////////////////////////////////////////////////////////////////////

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let relatorio = ''; 
let produtosMaisVendidos = ''; 
 
let totalPorProduto = ''; 
 
const maisLucrativo = { nome: '', totalVendas: 0 }; 
 
produtos.forEach(prod => { 
 
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
 
  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
 
  if (prod.quantidadeVendida > 100) { 
 
    produtosMaisVendidos += `${prod.nome}\n` 
 
  } 
 
  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
 
  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
 
    maisLucrativo.nome = prod.nome; 
 
    maisLucrativo.totalVendas = totalVendidoProduto; 
 
  }  
 
}) 
 
console.log('Relatório de produtos vendidos:'); 
 
console.log(relatorio); 
 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
 
console.log(produtosMaisVendidos); 
 
console.log('Total de vendas por produto:'); 
 
console.log(totalPorProduto); 
 
console.log('Produto mais lucrativo:'); 
 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);