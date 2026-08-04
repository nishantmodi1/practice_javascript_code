// Print all palindrome numbers between 1 and 500. 

const prompt = require("prompt-sync")();

let num = 500

function isPalindrome(n){
  let k=n
  let rev=0
  while(n>0){
    let d=n%10
    rev=rev*10+d
    n=Math.floor(n/10)
  }
  return k===rev
}

for(let i=1; i<=num; i++){
  if(isPalindrome(i)){
    console.log(i)
  }
}