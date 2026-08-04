// Check whether the given number is an Armstrong number.

const prompt=require('prompt-sync')()

let num=Number(prompt('Enter a number: '))

let val=num
let as=0
let p=0
do {
  let d=num%10
  p++
  num=Math.floor(num/10)
} while (num!==0);

let pow=p
num=val
console.log(num)
do{
  let d=num%10
  as=as+d**pow
  num=Math.floor(num/10)
}while(num!==0)

console.log(as===val?'armstrong':'not armstrong')