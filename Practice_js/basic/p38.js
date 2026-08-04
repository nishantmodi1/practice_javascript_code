// lcm
// pending
let prompt = require("prompt-sync")()

let a = Number(prompt(""))
let b = Number(prompt(""))
let n
if(a>b){
  n=a
}else{
  n=b
}

let p=0

for(let i=2; i<=n; i++){
  if(a%i===0 && b%i===0){
    p=i
    break
  }
}

if(p==0 ){
  console.log(a*b)
}else{
  console.log(p)
}

