const num1 = 2;
const num2 = 5;
const operacao = 'divisao'

if (operacao === 'soma') {
    console.log(num1 + num2)
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2)
} else { console.log('Operação invalida') }

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4000: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 11500;

if (salario >= 11000) {
    console.log(' 3% de bônus ')
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus')
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus ')
} else { console.log('9% de bônus') }

// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2032;

// const ano = 2000
// const ano = 2022
//const ano = 1992

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else { console.log(`${ano} não é Bissexto`) };

///////////////////////////////////////////////////////////////////////////

//Operador switch:

const n = 4

switch (n) {
    case 10:
        console.log('Ótimo')
        break;
    case 9:
        console.log('Parabéns!')
        break;
    case 8:
        console.log('Muito bem')
        break;
    case 7:
        console.log('Foi bem')
        break;
    case 6:
        console.log('Cuidado, passou mas foi por pouco')
        break;
    default:
        console.log('Recomendo que revise o conteudo e tente novamente, não desista')
        break;
}

///////////////////////////////////////////////////////////////////////

//Operador ternário:

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = 'Geraldo'
const nota = 7
const faltas = 2

const recebeBonus = (nota >= 7) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`

console.log(recebeBonus)

///////////////////////////////////////////////////

//Validação de acesso:

const idade = 18

if (idade >= 18) {
    console.log('Acesso permitido')
} else { console.log('Acesso negado!') }

//////////////////////////////////////////////////////

const temperatura = 25

if (temperatura > 25) {
    console.log('Quente')
} else if (temperatura >= 15) {
    console.log('Agradavél')
} else { console.log('Frio') }

////////////////////////////////////////////////////

//Classificação de idades:

let i = 11

if (i >= 18) {
    console.log('Adulto')
} else if (i >= 12) {
    console.log('Juvenil')
} else { console.log('Infantil') }

///////////////////////////////////////////////////

const diaDaSemana = 7

switch (diaDaSemana) {
    case 0:
        console.log('Aberto em horario especial 10:00 ás 14:00')
        break;
    case 1:
        console.log('A loja está aberta em horario normal: 09:00 ás 18:00')
        break;
    case 2:
        console.log('A loja está aberta em horario normal: 09:00 ás 18:00')
        break;
    case 3:
        console.log('A loja está aberta em horario normal: 09:00 ás 18:00')
        break;
    case 4:
        console.log('A loja está aberta em horario normal: 09:00 ás 18:00')
        break;
    case 5:
        console.log('A loja está aberta em horario normal: 09:00 ás 18:00')
        break;
    case 6:
        console.log('Aberto em horario especial 10:00 ás 14:00')
        break;
    default:
        console.log('Caracter inválido para representar o dia da semana, tente novamente, considerando 0 = Domingo e 6 = Sábado')

}

// Outra opção:

const diaSemana = 6;

if (diaSemana === 6 || diaSemana === 0) {
    console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
    console.log("A loja está aberta no horário normal: 9h às 18h.");
}

////////////////////////////////////////////////////////////////////////////

// Usando o tenário:

const usuario = 'adminin';

const mensagem = (usuario === 'admin')
    ? 'Login bem-sucedido!'
    : 'Usúario inválido';

console.log(mensagem);

///////////////////////////////////////////////////////////////////////////

//Compatibilidade da fruta:

const fruta = 'Laranja'

if (fruta === 'Abacaxi' || fruta === 'Laranja') {
    console.log('Fruta compatível com a receita')
} else { console.log('Fruta não compatível com a receita') }

/////////////////////////////////////////////////////////////////////////////

const carrinhoVazio = false;

if (!carrinhoVazio) {
    console.log('Compra efetuada com sucesso')
} else { console.log('Não foi possível efetuar a compra: Carrinho Vazio') }

/////////////////////////////////////////////////////////////////////////////////

//Verificação de nível de jogo:

const pontos = 60;
const vidas = 1;

if (pontos > 50 && vidas > 0) {
    console.log("Próximo nível liberado!");
} else {
    console.log("Não pode avançar para o próximo nível.");
}








