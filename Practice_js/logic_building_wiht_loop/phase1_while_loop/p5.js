// 5. Print the multiplication table of a given number from n × 1 to n × 10.

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter a number: "));

function printMultiplicationTable(num) {
  if(!num<10){
    console.log('please input value from 1')
  }
  let i=1
  while(i<=10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++
   } 
}

printMultiplicationTable(number);