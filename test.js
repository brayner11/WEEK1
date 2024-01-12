let base = 12
let height= 10

// are of triangle 1/2 × b × h.

function calculateTriangleArea(base, height){
    if (base >= 0 && height >= 0){
        const area =  (base * height) /2;
        console.log(`the are of the triangle with base ${base} and height ${height} is: ${area} `) 
    } else {
        console.log(" invalid input")
    }
    
}

calculateTriangleArea(base,height)

// TEST 2



function findMinMax(numbers) {
    if (numbers.length === 0) {
        console.log("The array is empty.");
        return;
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return { min, max };
}

// Example usage with the given array [5000, 2]
const numberArray = [5000, 2];
const result = findMinMax(numberArray);

if (result) {
    console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
}

// TEST 3

let main = (verb, noun) => {
    return verb + ' ' + noun
}
let cat = main('calm','cat')

console.log(cat)

// Test 4 Celsius to Fahrenheint

const muliplyByNineFiths = (celsius) => {
    return celsius * (9/5)
}
const getFahrenheint = (celsius) => {
    return muliplyByNineFiths (celsius) + 32
}

console.log("The temperature is " + getFahrenheint(15) + "F")


//test 5 Fahrenheit to Celsius

const temp = (fahrenheit) => {
    return fahrenheit - 32;
}
const temp2 = (fahrenheit) => {
    return (temp(fahrenheit) * 5 / 9)
}

console.log(`the temparature is ${temp2(59)}C` )


