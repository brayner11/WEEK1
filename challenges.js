//WEEK 1

//1

let breakfast = 'cereals'
let luch = 'chicken with rice'
let dinner = 'fruit salad'

console.log(`Today i had breakfast ${breakfast}, for lunch i had ${luch} and for dinner i ate ${dinner}.`)

// 2

let num1 = 15

if(num1 % 3 === 0 && num1 % 5 === 0){
    console.log("fizz buzz")
} else if (num1 % 3 === 0){
    console.log("fizz")
} else if (num1 % 5 === 0){
    console.log("buzz")
}else{
    console.log(num1)
}

//3


let num3 = 5
let num4 = 7

let sum = num3 + num4

// Check if the sum is even
if (sum % 2 === 0) {
  console.log(`The sum (${sum}) is even.`)
} else {
  let product = num3 * num4
  console.log(`The product (${product}) of the numbers is returned because the sum is not even.`)
}

//4


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate and log 6 random numbers between 1 and 50
for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(1, 50)
    console.log(`Random Number ${i + 1}: ${randomNumber}`)
}


//5

// Count from 9 to 0 and log each number
for (let i = 9; i >= 0; i--) {
    console.log(i)
}

// WEEK 2 DAY 1

// ACTIVITY 1
let person = {
    name:"brayner",
    age: 23,
    favoriteSongs: [
        "Gorrillaz - feel good inc",
        "eiffel65 - blue (da ba dee da ba dai)",
        "Metronomy - the bay"
    ],
    likesFootball : true,
    sayHi(){
        return `hello my name is ${this.name}`
    },
    doesLikeFotball() {
        if (this.likesFootball){
            return 'leon definitely likes football'
        }
    }
}
console.log(person.sayHi())

// ACTIVITY 2

let pet = {
    name : "boby",
    typeOfPet : "labrador",
    age : 3,
    colour : "white",
    eat : function() {
        return `${this.name} is eating`
    },
    drink : function() {
        return `${this.name} is drinking`
    }
}

console.log(pet.eat())
console.log(pet.drink())

// ACTIVITY 3

let coffeeShop = {
    branch : "java coffe",
    drinks : {
        latte: 3.00,
        capuccino: 2.50,
        espresso: 2.00
    },
    food : {
        sandwich : 3.50,
        croissant : 2.50,
        hashBrown : 4.50
    },
    drinksOrdered: function(order){
        let totalCost = order.reduce((total, item) => total + this.drinks[item], 0)
        return `Drinks Ordered: ${order.join(', ')} | Total Cost: $${totalCost.toFixed(2)}`
    },
    foodOrdered: function(order) {
        let totalCost = order.reduce((total, item) => total + this.food[item], 0)
        return `Food Ordered: ${order.join(', ')} | Total Cost: $${totalCost.toFixed(2)}`
      }
}
let drinkOrder = ["latte",]
let foodOrder = ["croissant"]
console.log(coffeeShop.drinksOrdered(drinkOrder))
console.log (coffeeShop.foodOrdered(foodOrder))

