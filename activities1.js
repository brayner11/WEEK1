// CHALLENGE #1
console.log ("CHALLENGE #1")
let age = 18
let country = "qatar"
if (age ==18 && country == "qatar"){
    console.log("yes i can serve you")
} else if (age == 18 && country == manchester){
    console.log("you aren't old enought")
}


// CHALLENGE #2
console.log ("CHALLENGE #2")
let topping = "cheese"


if (topping === "mushrooms" || topping === "tomato" || topping === "cheese") {
  console.log("These are important ingredients for my pizza.")
} else if (topping === "Pepperoni") {
  console.log(`I don't mind having ${topping} on my pizza.`)
} else {
  console.log(`${topping} should not be on a pizza.`)
}

// CHALLENGE #3
console.log ("CHALLENGE #3")
let password = "javascript"

if(password.length < 8){
    console.log("the password is too short.")
} else {
    console.log(`password: ${password}`)
}

// CHALLENGE #4
console.log ("CHALLENGE #4")
let num = "30"

if(num % 3 === 0 || num % 5 === 0){
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("This numer is not divisible by 3 or 5")
}

// CHALLENGE #5
console.log ("CHALLENGE #5")
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

// CHALLENGE #6
console.log ("CHALLENGE #6")
let num2 = 1221

// Convert the number to a string for comparison
let numStr = num.toString()

// Check if the number is a palindrome
if (numStr === numStr.split().reverse().join()) {
  console.log(`${num2} is a palindrome.`)
} else {
  console.log(`${num2} is not a palindrome.`)
}

// CHALLENGE #7
console.log ("CHALLENGE #7")
let time = 7
let placeOfWork = "office"
let townOfHome = "home"

if (time === 6) {
    console.log(`At ${time}:00 I'm at ${townOfHome}.`)
  } else if (time === 7) {
    console.log(`At ${time}:00 I'm commuting.`)
  } else if (time === 8) {
    console.log(`At ${time}:00 I'm at ${placeOfWork}.`)
  } else {
    console.log(`At ${time}:00 I'm somewhere else.`)
  }

  // CHALLENGE #8
  console.log ("CHALLENGE #8")
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// Function to check if a character is a vowel
function isVowel(char) {
  return /[aeiou]/i.test(char)
}

// Find the index of the last vowel in the string
let lastIndex = -1
for (let i = 0; i < str.length; i++) {
  if (isVowel(str[i])) {
    lastIndex = i
  }
}

console.log("Index of the last vowel:", lastIndex)

// CHALLENGE #9
console.log ("CHALLENGE #9")
// Example string
let word = "coding"

// Check if the last letter is the same as the first
// .charAt returns the character at the specified index
if (word.length > 0 && word.charAt(0) === word.charAt(word.length - 1)) {
  console.log(true)
} else {
  console.log(false)
}

// CHALLENGE #10
console.log ("CHALLENGE #10")

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