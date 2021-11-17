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