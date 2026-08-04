// Count and print the number of digits in the given number. 

const prompt=require('prompt-sync')()

let num=prompt(Number('Enter a number: '))
let count=0
do{
  let d=num%10
  count++
  num=Math.floor(num/10)
}while(num>0)

  console.log(count)