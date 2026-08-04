// Print a pattern where the i-th row prints the value i × i. 

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter number of terms: "));

for (let i = 1; i <= num; i++) {
  console.log(i*i)
  
}