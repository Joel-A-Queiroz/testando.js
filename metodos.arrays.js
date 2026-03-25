const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numeros) => {
    return numeros % 2 === 0;
})

console.log('Todos os numeros: ', numeros)
console.log('Todos os numeros pares: ', numerosPares)

const numerosImpares = numeros.filter((numeros) => {
    return numeros % 2 != 0;
})

console.log('Todos os numeros impares: ', numerosImpares)


const numerosDobrados = numeros.map((numeros) => {
    return numeros * 2
})

console.log('Lista mapeada: ', numerosDobrados)