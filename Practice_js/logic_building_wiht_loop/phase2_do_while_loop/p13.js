// Keep taking numbers from the user until a negative number is entered, then count how many positive numbers were entered. 

const prompt = require('prompt-sync')()

let num;
let count=0
do {
  num=Number(prompt("Enter a number: "))
  if(num>0){count++}
} while (num>0);

console.log('count: ', count)