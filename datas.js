const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês: ', agora.getMonth())
console.log('Dia: ', agora.getDate())
console.log('Hora: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())


const aniversario = new Date(1997, 9, 18)

console.log(aniversario)

console.log('Data em formato brasileiro: ', aniversario.toLocaleDateString('pt-br'))
console.log('Data em fomato americano: ', aniversario.toLocaleDateString('en-us'))