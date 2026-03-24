const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0


leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá,', nome)
    console.log('Boas vindas ao meu jogo')


    leitor.question('Qual a capital da Italia?\n (a) Cecilia\n (b) Roma\n (c) Milão\n>', (resposta1) => {
        if (resposta1 == 'b') {
            acertos++
        }

        leitor.question('Em qual continente fica a China?\n (a) Asiatico\n (b) Europeu\n (c) Americano\n>', (resposta2) => {
            if (resposta2 == 'a') {
                acertos++
            }

            leitor.question('Qual o nome da montanha mais alta do mundo?\n (a) Machu Picchu\n (b) Everest\n (c) Monte fujji\n>', (resposta3) => {
                if (resposta3 == 'b') {
                    acertos++
                }

                leitor.question('Qual foi o unico clube brasileiro a representar a seleção brasileira?\n (a) São Paulo\n (b) Corinthians\n (c) Palmeiras\n>', (resposta4) => {
                    if (resposta4 == 'c') {
                        acertos++
                    }




                    if (acertos == 4) {
                        console.log('Parabéns, você gabaritou')
                    } else if (acertos == 3) {
                        console.log('Muito bem, continue assim!')
                    } else if (acertos = 2) {
                        console.log('Da pra melhorar, estude mais')
                    } else { console.log('Estude mais cabeção') }

                    leitor.close();
                })
            })


        }
        )
    }
    )
})


