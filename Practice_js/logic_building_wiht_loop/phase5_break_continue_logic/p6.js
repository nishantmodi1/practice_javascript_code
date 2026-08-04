// Skip all odd numbers and print only the even numbers.

const prompt = require('prompt-sync')();

let n;

let flag = true;
while (flag) {
  let n = Number(prompt('Enter n: '));

  if (n%2!==0) {
    flag = false;
  } else {
    console.log(n);
  }
}
