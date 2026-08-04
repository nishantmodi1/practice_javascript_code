// Search for a specific number in a list of inputs, and terminate the loop immediately when the number is found. 

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter n: "));
let num;
let ar=[]
console.log("Enter the elements: ")
while(n>0){
  num = Number(prompt("Enter num: "));
  ar.push(num)
  n--
}

const searchnum = Number(prompt("Enter search number: "));
let found = false;

for (let i = 0; i < ar.length; i++) {
    if (ar[i] === searchNum) {
        console.log(searchNum, "value found");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Not found");
}


// approach 2/
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter n: "));
const searchNum = Number(prompt("Enter search number: "));

let found = false;

while (n > 0) {
    let num = Number(prompt("Enter number: "));

    if (num === searchNum) {
        console.log("Value found");
        found = true;
        break;
    }

    n--;
}

if (!found) {
    console.log("Not found");
}