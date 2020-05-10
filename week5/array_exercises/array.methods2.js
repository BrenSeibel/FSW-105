//Use the built-in .reduce() method on arrays to solve all of these problems:
//1. Turn an array of numbers into a total of all the numbers.
function total(arr){
    const result = arr.reduce(function(finalNum, num){
        return finalNum = finalNum + num;
    });
    return result;
}
console.log("Output from .reduce req. #1: " + total([1,2,3])); 

//2. Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    const result = arr.reduce
    (function(final,num ){
            return final.concat(num)
            }," ")
            return result
        }
console.log(stringConcat([1,2,3]));

//3. Turn an array of voter objects into a count of how many people voted.
function totalVoters(arr){
    const result = arr.reduce
    (function(final,voters){
        if(voters.voted){final++}
            return final
             },0)
    return result
};
const voters = [
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
    const result = arr.reduce
    (function(final,item){
        return final+item.price
        },0)
        return result
};
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist));  //227005

//5. Given an array of arrays, flatten them into a single array.
function flatten(arr){
    const result = arr.reduce
    (function(final,flat)
    {return final.concat(flat)})
        return result
};
const arrays = [
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
// var voters = [
//     {name: 'Bob', age: 30, voted: true},
//     {name: 'Jake', age: 32, voted: true},
//     {name: 'Kate', age: 25, voted: false},
//     {name: 'Sam', age: 20, voted: false},
//     {name: 'Phil', age: 21, voted: true},
//     {name: 'Ed', age: 55, voted: true},
//     {name: 'Tami', age: 54, voted: true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zach', age: 19, voted: false}
// ];
// function votersResults(arr){
//     const result = arr.reduce
//     (function(final,age){
//                 if(age.voted && age.age
//     > 18 && age.age < 25)
//     final.youngVotes++
//                 if(age.age > 18 && age.
//     age > 26)final.youth++
//                 if(age.voted && age.age
//     > 26 && age.age < 35)
//     final.midVotes++
//                 if(age.age > 26 && age.
//     age < 35)final.mids++
//                 if(age.voted && age.age
//     > 36 && age.age < 56)
//     final.oldVotes++
//                 if(age.age > 36 && age.
//     age < 56)final.olds++
//                 return final
//             },
//         {youngVotes:0,youth:0,
//     midVotes:0,mids:0,oldVotes:0,
//     olds:0})
//         return result;        
// }
// console.log(voterResults(voters));

// //console.log(voterResults(voters)); //Returned value shown below
// /*
// { younVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4
// }

// */
//Use built-in .sort() method on arrays to solve all of these problems:
//1. Sort an array from smallest number to largest.
function leastToGreatest(arr){
    const result = arr.sort
    (function(a, b){
                return a-b});
                arr[0];
                return result
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); //[1, 2, 3, 5, 20, 90]

//2. Sort an array from largest number to smallest.
function greatestToLeast(arr){
    const result = arr.sort
    (function(a, b)
            {return b-a});
            arr[0];
            return result;
} 
console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); //[90, 20, 5, 3, 2, 1]

//3. Sort an array from shortest string to lomgest
function lenghtSort(arr){
    const result = arr.sort
    (function(a, b)
            {return a.length-b.length});
            return result
}
console.log(lenghtSort(["dog", "wolf", "by", "family", "eaten"]));
//["by", "dog", "wolf", "eaten", "family"]

// // //4. Sort an array alphabetically.
// // function alphabetical(arr){

// // }
// // console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
// // //["by", "dog", "eaten", "family", "wolf"]

//.5 Sort the objects in the array by age.
function byAge(arr){
    const result = arr.sort
    (function(a, b)
             {return(a.age-b.age)})
             return result;
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
