
var shopper = {
    name: "Brenda",
    age: 30,
    hairColor: "black",
    isAlive: true,
    fullName : function(lastName) {
        return this.name + " " + lastName;
      },
    groceryCart: ["rice", "eggs", "milk", "bread"]  
}




console.log(shopper.fullName("Brenda","Jeff"))
console.log(shopper)