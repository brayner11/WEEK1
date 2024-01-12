// CHALLENGE 1
console.log("CHALLENGE # 1")

// function factorial (n) {
//     if ((n === 0)|| (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));


const factorial = (n) => {
    return (n === 0 || n === 1) ? 1 : (n * factorial(n - 1));
};

console.log(factorial(33));

// CHALLENGE 2 
console.log("CHALLENGE # 2")

// let orderCount = 0

// const takeOrder = (topping1) => {
//     console.log(`Pizza with ${topping1}`);
//     orderCount++;
// }

// takeOrder("pineapple")

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`Order count: ${orderCount}`);
}

takeOrder("pineapple", "mushrooms");

// CHALLENGE 3

console.log("CHALLENGE # 3")

let accountBalance = 1000;
let pinNumber = "1234";

const cashMachine = (enteredPin, withdrawalAmount) => {
    if (enteredPin === pinNumber) {
        if (withdrawalAmount <= accountBalance) {
            accountBalance -= withdrawalAmount;
            console.log(`Withdrawal successful! Dispensing $${withdrawalAmount}`);
            console.log(`Remaining balance: $${accountBalance}`);
        } else {
            console.log("Insufficient funds. Please try a lower amount.");
        }
    } else {
        console.log("Incorrect PIN. Please try again.");
    }
};

// Example usage
cashMachine("1234", 200); // Correct PIN and sufficient balance
cashMachine("5678", 300); // Incorrect PIN
cashMachine("1234", 1200); // Correct PIN but insufficient balance
