const prompt = require("prompt-sync")()

let n = Number(prompt(""))
let k =n
let c=0
while(n>0){
  let d=n%10
  c = c*10 +d 
  n=Math.floor(n/10)

}
if(c===k){
  console.log("Palindrome")
}else{
  console.log("Not Palindrome")
}