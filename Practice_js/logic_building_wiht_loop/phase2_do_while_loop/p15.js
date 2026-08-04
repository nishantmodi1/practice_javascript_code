// Calculate and print the sum of even digits and the sum of odd digits of the given number separately. 

const prompt=require('prompt-sync')()

let num=Number(prompt("Enter a number: "))
let oddsum=0
let evensum=0

do {
  let d=num%10;
  if(d%2===0){
    evensum+=d
  }else{
    oddsum+=d
  }
  num=Math.floor(num/10)
} while (num!==0);

console.log("odd sum are: ", oddsum, "even sum are: ", evensum)