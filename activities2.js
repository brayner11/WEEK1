// CHALLENGE 1
console.log("CHALLENGE #1")

let favoriteFilms = ["The Matrix", "Spider-man", "Little lie", "Pulp Fiction", "The Dark Knight"]

favoriteFilms.push("Star Wars", "Blade Runner")

// Loop through the array and log each film
for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`Favorite Film ${i + 1}: ${favoriteFilms[i]}`)
}

// CHALLENGE 2 
console.log("CHALLENGE #2")

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate and log 6 random numbers between 1 and 50
for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(1, 50)
    console.log(`Random Number ${i + 1}: ${randomNumber}`)
}

// CHALLENGE 3
console.log("CHALLENGE #3")

// Count from 9 to 0 and log each number
for (let i = 9; i >= 0; i--) {
    console.log(i)
}

// CHALLENGE 4
console.log("CHALLENGE #4")

let films = ["The Matrix", "Spider-man", "Ghostbusters", "Scream"]

// Loop through the array and display each film
for (let i = 0; i < films.length; i++) {
    console.log(`Film ${i + 1}: ${films[i]}`)
}

// Check if the 3rd film is Ghostbusters
if (films[2] === "Ghostbusters") {
    console.log("Yay it's Ghostbusters!")
} else {
    console.log("Boo! We want Ghostbusters!")
}

// CHALLENGE 5
console.log("CHALLENGE #5")

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate and check random numbers
for (let i = 0; i < 6; i++) {
    // Generate a random number between 1 and 30
    let randomNumber = getRandomNumber(1, 30);

    // Check if the number is divisible by 7
    if (randomNumber % 7 === 0) {
        console.log(`${randomNumber} is divisible by 7.`);
    } else {
        console.log(`${randomNumber} is not divisible by 7.`);
    }
}

// CHALLENGE 6
console.log("CHALLENGE #6")

// Arrays of followers
let bobsFollowers = ["Alice", "Bob", "Charlie", "David"];
let hannahsFollowers = ["Charlie", "David", "Eve", "Bob"];

// Iterate over both arrays to find mutual followers
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`Mutual Follower: ${bobsFollowers[i]}`);
        }
    }
}
