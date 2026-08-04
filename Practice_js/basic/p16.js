const prompt =require("prompt-sync")()

let x = Number(prompt(""))

while(x<1 || x>12){
  console.log("Choose between 1 to 12")
  x = Number(prompt(""))
}

if(x===1 || x===3 || x===5 || x===7 || x===8 || x===10 || x===12) {
  console.log("31 Days")
}else if(x===4 || x===6 || x===9 || x===11){
  console.log("30 Days")
}else if(x===2){
  console.log("28 or 29 Days")
}