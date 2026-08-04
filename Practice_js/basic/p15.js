const prompt = require("prompt-sync")()

let x = Number(prompt(""))

while(x<1 || x>7){
  console.log("choose between 1 to 7")
  x = Number(prompt(""))
}

if(x===1){
  console.log("Monday")
}else if(x===2){
  console.log("Tuesday")
}else if(x===3){
  console.log("Wednesday")
}else if(x===4){
  console.log("Thursday")
}else if(x===5){
  console.log("Friday")
}else if(x===6){
  console.log("Saturday")
}else{
  console.log("Sunday")
}