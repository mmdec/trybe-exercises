//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
//recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

const juiz = (chosenNumber, number) => {
    if(chosenNumber === number){
        return console.log('Parabéns você ganhou!!');
    }
    return console.log('Tente novamente');
}
const sort = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function sorteio(number, juiz) {
    const sortedNumber = sort(1, 5);
    console.log(`O numero sortido foi: ${sortedNumber}`);
    juiz(number, sortedNumber);
}

sorteio(5, juiz);