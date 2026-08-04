// Print all Armstrong numbers between 1 and 1000. 

function powno(p){
  let count=0
  while(p>0){
    let d=p%10
    count++
    p=Math.floor(p/10)
  }
  return count
}

function isArmstrong(n){
let t=n
let k=0
  while(n>0){
    let d=n%10
    k=k+d**powno(t)
    n=Math.floor(n/10)
  }
  return t===k
}

for (let i = 1; i <=1000; i++) {
  if(isArmstrong(i)){
    console.log(i)
  }
  
}
