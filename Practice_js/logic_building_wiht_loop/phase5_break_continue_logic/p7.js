// Continuously add numbers in a loop and stop the loop when the sum becomes greater than 100 

const prompt = require('prompt-sync')();

let n;

let flag = true;
let sum=0
while (flag) {
  let n = Number(prompt('Enter n: '));
  sum+=n

  if (sum>100) {
    flag = false;
  }
}
