// Write a function that accepts two numbers as parameters, and returns the sum.

function add(num1, num2){
    return num1 + num2
}
console.log(add(2, 6))

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

var largest = [16, 22, 08]
function sum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(two(...largest))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
// (Return the string "even" or "odd");

function parameter(num1){
    if(num1 % 2===0){
        return console.log("even")
    }
    else {
        return console.log("odd")
    }
}
console.log(parameter)

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty 

function coke(string){
    if (string.length <= 20){
        return string + string
    }
    else if (string.length > 21){
        var cars = string.slice(0, string.length/2)
        console.log(cars)
    }  
}
console.log(coke)

