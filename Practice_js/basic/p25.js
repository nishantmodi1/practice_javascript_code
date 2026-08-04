// Ugly Number

const prompt = require("prompt-sync")()

const n = Number(prompt('Enter a number: '));

function checkPrime(n){
  if (n==2 || n==3 || n==5 || n==7){
    return true
  }
  for(let i=2;i<n;i++){
    if(n%i==0){
      return false
    }
  }
  return true
}

function uglyNo(n){
  for(let i=2;i<n;i++){
    if(n%i==0 && !checkPrime(i)){
      return false
    }
    return true
  }
    
}

console.log(uglyNo(n))