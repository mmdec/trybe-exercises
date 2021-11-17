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

