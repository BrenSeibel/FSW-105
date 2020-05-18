var readlineSync = require('readline-sync');

//Read Player's Name
var userName = readlineSync.question('May I have your name? ');

const strWelcome = `Welcome ${userName} to the Escape Room Simulation!`;
console.log(strWelcome);

let isPlayerAlive = true;

while(isPlayerAlive === true)
{
    const myGameMenuOptions = readlineSync.keyIn('Enter 1 to Put hand in hole \nEnter 2 to Find the  key \nEnter 3 to Open the door:', {limit: '$<1-3>'});
    
    if (myGameMenuOptions == 1)
    {
        //User Dies
        console.log(`Sorry ${userName}! You are now dead, game is over!`);
        isPlayerAlive = false;
    }
    else if (myGameMenuOptions == 2 && hasKey == false)
    {
        //first time selecting option 2,player never had access to the key
        console.log('${userName}, you found the key successfully!');
        hasKey = true;
    }
    else if (myGameMenuOptions == 2 && hasKey == true)
    {
        //Player selected option 2, player already had access to the key
        console.log('${userName}, you already had the key from earlier selection!');
    }
    else if (myGameMenuOptions == 3 && hasKey == false)
    {
        //first time selecting option 3, player does not have the key
        console.log('${userName} - you need to find the key first!');
        hasKey = true;
    }
    else if (myGameMenuOptions == 3 && hasKey == true)
    {
        //player selected option 3, player does have the key
        console.log('${userName}, you already have the key, and you opened the door, game is over!');
        isPlayerAlive = false;
    }
}    
