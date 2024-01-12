// for loop-- 

// let favouriteDrinks =  ["coke", "orange", "coffee"]
// for (let i = 0; i < favouriteDrinks.length; i++){
//     console.log(favouriteDrinks[i])
// }

// let multiplesOfTwo = []

// for (let i = 0; i < 20; i++) {
//     if(i %2 == 0){
//         multiplesOfTwo.push(i)
//     }
// }

// console.log(`numbers divisibl by 2 are ${multiplesOfTwo}`)

// while loop--

// let age = 15

// while (age < 18) {
//     console.log("you're a child!")
//     age++
// }

// console.log("you're an adult")


let cards = ["diamond","spade","heart","club"]
let currentcard = "club"

while (currentcard != "spade") { // while currentcard is not "spade" 
    console.log(currentcard)
    currentcard = cards[Math.floor(Math.random()*4)] //It basically rounds down a number to its nearest integer.
}

console.log(currentcard)