var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var number1 = readlineSync.questionInt('What is your first number? ')

var number2 = readlineSync.questionInt('What is your second number? ')
   var result
var operation = readlineSync.question('What is your operation add, sub, mult, or div? ')
function addNumbers(num1,num2){
 
    return result=num1 + num2
}

function substractNumbers(num1,num2){
 
    return result=num1 - num2
}
function multiplyNumbers(num1,num2){
 
    return result=num1 * num2
}
function divideNumbers(num1,num2){
 
    return result=num1 / num2
    
}

if (operation==="add"){
  addNumbers(number1,number2)
   console.log("the result is "+result); 
} else if (operation==="sub"){
    substractNumbers(number1,number2) 
    console.log("the result is "+result); 
  } else if (operation==="mult"){
    multiplyNumbers(number1,number2)  
    console.log("the result is "+result);
  } else if (operation==="div"){
    divideNumbers(number1,number2) 
    console.log("the result is "+result); 
} else (console.log("something went wrong")) 






