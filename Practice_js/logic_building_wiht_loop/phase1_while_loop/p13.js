//  Check whether the given number is a palindrome. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function palindrome(){
  let rev=0
  let n=num
  while(num>0){
    let d=num%10
    rev=rev*10+d
    num=Math.floor(num/10)
  }
  console.log(rev===n?'palindrome':'not palindrome')
}

palindrome()