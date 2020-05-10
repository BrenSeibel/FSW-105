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
        return younger < 18 });
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
    var num = arr.toString();
    return result;
}
console.log(stringItUp([2, 5, 100]));

//3. Capitalize each of an array of names.
function capitalizeNames(arr){
    var result = arr.map(function(names){
        return names.toUpperCase
        ;})
        return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//["John", "Jacob", "Jingleheimer", "Schmidt"]

//4. Make an array of strings of the names.
function namesOnly(arr){

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


//Use the built-in .reduce() method on arrays to solve all of these problems:
//1. Turn an array of numbers into a total of all the numbers.
function total(arr){
    const result = arr.reduce(function(finalNum, num){
        finalNum = finalNum + num;
    });
    return result;
}
console.log("Output from .reduce req. #1: " + total([1,2,3])); 

//2. Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){

}
console.log(stringConcat([1,2,3]));

//3. Turn an array of voter objects into a count of how many people voted.
function totalVoters(arr){

}

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zach', age: 19, voted: false}
];
console.log(totalVoters(voters)); 
//Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

//4. Given an array of all your wishlist items, figure out how much if would cost to just buy everything at once.
function shoppingSpree(arr){

}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist));  //227005

//5. Given an array of arrays, flatten them into a single array.
function flatten(arr){

}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));    //["1", "2", "3", true 4, 5, 6];

//Note: Take a look at Array.concat() to help with this one.

//6. Given an array of potential voters, return an object representing the results of the vote include
//how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
//and how many of each of those age ranges actually voted. The resulting object containing this data 
//should have 6 properties. See the example output at the bottom.
var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zach', age: 19, voted: false}
];
function votersResults(arr){

}

//console.log(voterResults(voters)); //Returned value shown below
/*
{ younVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
//Use built-in .sort() method on arrays to solve all of these problems:
//1. Sort an array from smallest number to largest.
function leastToGreatest(arr){

}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); //[1, 2, 3, 5, 20, 90]

//2. Sort an array from largest number to smallest.
function greatestToLeast(arr){

} 
console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); //[90, 20, 5, 3, 2, 1]

//3. Sort an array from shortest string to lomgest
function lenghtSort(arr){

}
console.log(lenghtSort(["dog", "wolf", "by", "family", "eaten"]));
//["by", "dog", "wolf", "eaten", "family"]

//4. Sort an array alphabetically.
function alphabetical(arr){

}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
//["by", "dog", "eaten", "family", "wolf"]

//.5 Sort the objects in the array by age.
function byAge(arr){

}
console.log(byAge([
    { name: "Quiet Samirai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 },
]));
// [{ name: "Misunderstood Observer", age: 2 }]
// [{ name: "Quiet Samirai", age: 22 }]
// [{ name: "Unlucky Swami", age: 77 }]
// [{ name: "Arrogant Ambassador", age: 100 }]
