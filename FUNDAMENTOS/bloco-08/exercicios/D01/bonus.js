/* 1 - Crie uma função que retorna o dano do dragão.

O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

2 - Crie uma função que retorna o dano causado pelo warrior .

O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

4 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

5 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

6 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

7 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno. 
 */

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const sort = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dragonDamage() {
    return sort(15, dragon.strength);
}

function warriorDamage() {
    const warriorMaxDamage = warrior.strength + warrior.weaponDmg;
    return sort(warrior.strength, warriorMaxDamage);
}

function mageDamage() {
    const manaTurno = 15;
    const mageMaxDamage = mage.intelligence * 2;
    const mageDamage = sort(mage.intelligence, mageMaxDamage);

    return { mageDamage: mageDamage, manaTurno: manaTurno }

}

const gameActions = {
    warriorTurn: (action) => {
        warrior.damage = action();
        dragon.healthPoints -= warrior.damage;
    },
    mageTurn: (action) => {
        mage.damage = action().mageDamage;
        mage.mana -= action().manaTurno;
        dragon.healthPoints -= mage.damage;
    },
    dragonTurn: (action) => {
        dragon.damage = action();
        warrior.healthPoints -= dragon.damage;
        mage.healthPoints -= dragon.damage;
    },
    endTurn: (players) => {
        console.log(players);
    }
}

function round() {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    gameActions.endTurn(battleMembers);
}

