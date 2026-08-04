// Print all Perfect numbers between 1 and 1000. 


function powno(p){
  let count=0
  while(p>0){
    let d=p%10
    count++
    p=Math.floor(p/10)
  }
  return count
}

function isPerfect(n){
  let t=n
  let count=0
  for(let i=1; i<n; i++){
    if(n%i===0){
      count+=i
    }
  }
  return t===count
}

for (let i = 1; i <=1000; i++) {
  if(isPerfect(i)){
    console.log(i)
  }
  
}
