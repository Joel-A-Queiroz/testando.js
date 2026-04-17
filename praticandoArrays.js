const arr = [1, 2, 3, 4]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

arr[0] = 9;
console.log(arr)

arr[5] = 10;
console.log(arr)

/////////////////////////////////

//Criando um array com uma sequencia de numeros entre x e y:

function criarArrNum(inicio, fim) {
    const arr = [];
    let elemento = inicio;

    for (let i = 0, j = 0; j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento;
    }

    return arr;
}

console.log(criarArrNum())

///////////////////////////////////////////////////////////////////////////////

const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const novoArr = arrNumeros.slice(4)

console.log(novoArr);

////////////////////////////////////////////////////////////////////////////

//Array Callback:

const dados = [12, 15, 20, 25]

const numeroCalculado = dados.map((num) => {
    return num * 10
})

console.log(numeroCalculado);

///////////////////////////////////////////////////////

//Array forEach = executa o laço

const estrelas = [9, 8, 7, 6, 5, 4, 3, 2, 1]

estrelas.forEach((num, i) => {
    console.log(`O número ${num} está no indice ${i}`)
});

/////////////////////////////////////////////////////

//Filtragem:

const numeros = [12, 15, 24, 38, 45]

const numFiltrado = numeros.filter(num => num % 5 === 0);

console.log(numFiltrado);

