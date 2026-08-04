// Check whether the given number is a palindrome.

const prompt=require('prompt-sync')()

let num=Number(prompt('Enter a number: '))
let val=num
let rev=0
do {
  let d=num%10
  rev=rev*10+d
  num=Math.floor(num/10)
} while (num!==0);

if(val===rev){
  console.log('is palindrome')
}else{
  console.log('not a palindrome')
}