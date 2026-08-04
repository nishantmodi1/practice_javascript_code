const prompt = require("prompt-sync")()

const x = Number(prompt(""))
let count=0; let n = 2
while(n<x){
  for(let i = 2; i<=n/2; i++){
    if(n%i===0){
      count++
    }
  }
  if(count===0){
    console.log(n)
  }
  count=0
  n++
}

// for(let i = 2; i<=x; i++){
//   let count=0;
//   for(j=2; j<=x; j++){
//     if(i%j===0){
//       count++
//     }
//   }
//   if(count===1){
//     console.log(i)
//   }

// }