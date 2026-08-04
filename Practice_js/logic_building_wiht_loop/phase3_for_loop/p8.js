//  Print all prime numbers between 1 and 100. 

const prompt=require('prompt-sync')()

const num=100

function isPrime(i){
  if(i===1 || i===2 || i===3){
    return true
  }
  for(let j=3; j<i; j++){
    if(i%j===0){
      return false
    }
  }
  return true
}

for(let i=1; i<=num; i++){
  // factOf(i)
  if(isPrime(i)){
    console.log(i)
  }
}

