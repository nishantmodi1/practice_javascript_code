// Check whether the given number is a Strong number, where the number equals the sum of factorials of its digits.


const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;

    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum += fact;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is a Strong Number");
} else {
    console.log(num + " is not a Strong Number");
}

