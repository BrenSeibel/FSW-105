//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if(num >= 5){
         return num;
    }
    });
    return result;
}
console.log("Output from Requirement #1: " + fiveAndGreaterOnly([3, 6, 8, 2]));

//2. Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const result = arr.filter(function(num){
        if (num % 2 === 0){
            return num;
        }
    });
    return result;
}
console.log("Output from req. #2: " + evensOnly([3, 6, 8, 2]));

//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(function(num){
        if (num.length <= 5){
            return true;
        }
    });
    return result;
}
console.log("Output from req. #3: " + fiveCharactersOrFewerOnly([" dog", " wolf", " by", " family", " eaten", " camping"]));

//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr) {
    const result = arr.filter(function(object){
        if (object.member === true){
            return object;
        }
    });
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false},
    { name: "Paris Hilton", member: true},
    { name: "Kanye West", member: false},
    { name: "Bod Ziroll", member: true}
]));

// [   { name: 'Angelina Jolie', member: true },
//     { name: 'Paris Hilton', member: true },
//     { name: 'Bob Ziroll', member: true } ]

//.5 Make a filtered list of all the people who are old enough to see The Matrix (younger than 18).
function ofAge(arr){
    const oldEnough = arr.filter(function(younger){
        return younger.age > 18 });
        return oldEnough;
} 
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

// [ { name: 'Angelina Jolie', age: 80 },
//   { name: 'Bob Ziroll', age: 100 } ]


//Use the built-in .map() method on arrays to solve all of these problems:
//1. Make an array of numbers that are doubles of the first array.
function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num + num;
    });
    return result;
};
console.log("Output from .map req. #1: " + doubleNumbers([2, 5, 100]));

//2. Take an array of numbers and make them strings.
function stringItUp(arr){
    const num = arr.toString();
    return num;
}
console.log(stringItUp([2, 5, 100]));

//3. Capitalize each of an array of names.
function capitalizeNames(arr){
    const result = arr.map(function(names){
        return names.charAt(0).toUpperCase().concat(names.substring(1).toLowerCase())
        }); 
        return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//["John", "Jacob", "Jingleheimer", "Schmidt"]

//4. Make an array of strings of the names.
function namesOnly(arr){
    const result = arr.map(function
        (names){
                return names.name
        });
        return result;
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eirc Jones", "Paris Hilton", "Kanye West", "Bob Ziroll"]

//5. Make an array of strings of the names saying whether or not they can go to The Matrix.
function makeStrings(arr){
    const result = arr.map
    (function(names){
        if(names.age >= 18)
            {
            return names.name + " can Go To Matrix"
            }else{
            return names.name + " is under age!!"
            }
        });
    return result;
}
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kanye West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//6. Make an array of the names in h1s, and the ages in h2s.
function readyToPutInTheDOM(arr){
    return arr.map(function
        (obj) {
            return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age +"</h2>"});
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie", 
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


