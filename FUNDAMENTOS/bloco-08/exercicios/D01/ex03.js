//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
//o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é 
//uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
//Ao final a HOF deve retornar o total da contagem de respostas certas. 
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function avaliador(gabarito, respostas, verificador) {
    const resultado = verificador(gabarito, respostas);
    return console.log(`O resultado da pessoa estudante foi: ${resultado}`);
}

const verificador = (gabarito, resposta) => {
    let resultado = 0;
    resposta.forEach((element, index) => {
        if (element !== 'N.A') {
            if (element === gabarito[index]) {
                resultado += 1;
            } else {
                resultado -= 0.5;
            }
        }
    });
    return resultado
}

avaliador(RIGHT_ANSWERS, STUDENT_ANSWERS, verificador);