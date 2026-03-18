//Estrutura do laço de repetição FOR

for(let contador =1; contador <=10; contador++) {console.log('Numero atual: ', contador)
}

for(let numero =0; numero <=20; numero++) {if (numero % 2 == 0) console.log("Numero par encontrado: ", numero)
}

for(let numero =0; numero <=20; numero++) {if (numero % 2 > 0) console.log("Numero impar encontrado: ", numero)
}

//Contador de caracteres
//.length = Condição para contar os caracteres

const palavra = 'Proparoxitona'

for(let contador = 0; contador <palavra.length; contador++){
console.log(palavra[contador])
}