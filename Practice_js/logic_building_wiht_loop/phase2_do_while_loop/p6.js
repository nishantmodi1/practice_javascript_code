// Reverse the given number and print the reversed value. 

const prompt=require('prompt-sync')()

let num=Number(prompt('Enter a number: '))
let rev=0
do{
  let d=num%10
  rev=rev*10+d
  num=Math.floor(num/10)
}while(num!==0)

  console.log(rev)