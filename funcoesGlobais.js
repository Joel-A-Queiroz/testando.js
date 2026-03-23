function saudacao(){
        console.log('Olá Joel, tudo bem?')
}

//setTimeout(saudacao, 8000) //ms

let contador = 0

const id = setInterval (() => {
contador++
console.log('Tempo decorrido(Em segundos)', contador)
if(contador == 10) {
    clearInterval(id)
}
}, 1000)