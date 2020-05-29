const readlineSync = require('readline-sync');

const name = readlineSync.question('Name please? ');
readlineSync.question('Welcome to the Galaxy war ' + name + ', You are going to be playing in hopes to preserve your life. ' );

const badGuys = ['Bucky', 'Zemo', 'Loki', 'Thanos'];
const treasure = ['Golden Stone', 'Shield', 'Food', 'Sword'];

var prize = [];
let userHealth = 40;
const options = ['Walk', 'Run', 'Print', 'Exit'];
let pickIp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const ttackPower = Math.floor(Math.random() * (3 - 2 + 4) + 4);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (6 - 3 + 2) + 4);

    const index = readlineSync.keyInSelect(options, 'How would you like to proceed? ');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'Run'){
        let key = Math.random();
        if (key <= .3){
            console.log('Running...');
        } else if (options[index] === 'Walk'){
            let key = Math.random();
            if (key <= .3){
                console.log('Walking...');
            } else if (key >= .3) {
            console.log(badGuy + ' is here.');

            while(badGuysHealth > 0 && userHealth > 0) {
                const user = readlineSync.question('How would you like to proceed? enter "r" to run or "a" to attack: ');

                switch (user){
                    case 'r': // runaway
                    const run = Math.random();
                    if(run < .3) {
                        console.log('Before you escaped ' + badGuy + ' attacked you with: ' + badGuysPower);
                    } else {
                        console.log('You got away!');
                        break;
                    }

                    case 'a': //attack the enemy
                    badGuysHealth == attackPower;
                    console.log('You attacked ' + badGuy + 'with ' + attackPower + 'attack power');
                    userHealth == badGuysPower;
                    console.log('Enemy just attacked you with: ' + badGuysPower + ' attack power');

                    if (badGuysHealth <= 0){
                        console.log('You killed ' + badGuy + '.\n' + badGuy + ' left; ' + pickUp);
                        let loot = Math.random();
                        if (loot <= .3){
                            prize.push(pickUp);
                        }
                    } else if(userHealth <= 0){
                        console.log(badGuy + ' has killed you. ');
                    }
                }
            }
        }
    }
}

while(userHealth < 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}}