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