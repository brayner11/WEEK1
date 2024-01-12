//1

let breakfast = 'cereals'
let luch = 'chicken with rice'
let dinner = 'fruit salad'

console.log(`Today i had breakfast ${breakfast}, for lunch i had ${luch} and for dinner i ate ${dinner}.`)

//

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