//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp",
"computer", "lamp", "stapler", "computer", "computer"]
var count2 = 0
for(var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count2++      
    }
}
console.log("there are "+count2 +" computers") 

//var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
//var count = 0

// for (var i = 0; i < officeItems.length; i++){
//    if (officeItems[i] === "computer"){
//         count++
//     }
// }
// console.log(count)  // -> 4



//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
      console.log("not old enough");
    } else {
      console.log("old enough");
    }
  }

  isOldEnough();
  console.log()



// Log to the console a personalized message like:
// Mike is not old enough to see Mad Max or Madeline is old enough to see Mad Max.

function isOldEnoughPersonalMessage(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to watch Mad Max");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to watch Mad Max");
        }
    }
}

isOldEnoughPersonalMessage();
console.log()



// Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see Mad Max Fury Road, don't let HIM in or Madeline is old enough. SHE'S good to see Mad Max Fury Road.

function isFemaleOrMalePersonalMessage(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is old enough, let it in");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is not old enough, do not let in");
        }
    }
}

isFemaleOrMalePersonalMessage();
console.log()



// Create a for loop that iterates through 101 numbers (from 0 - 100).
// If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".








