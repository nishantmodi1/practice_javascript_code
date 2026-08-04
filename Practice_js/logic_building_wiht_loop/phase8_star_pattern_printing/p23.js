// Print Numbers in an Increasing Sequence (Diamond pattern) 


const prompt = require('prompt-sync')()

const num=Number(prompt('Enter a Number: '))

// Approach2
//upper

for (let i = 0; i < 2 * num - 1; i++) {

    let row = i < num ? i : 2 * num - 2 - i;

    let st = "";

    for (let j = 0; j < num - row - 1; j++) {
        st += " ";
    }

    for (let j = 0; j < 2 * row + 1; j++) {
        st += "*";
    }

    console.log(st);
}

// Approach 1
// let k=0
// for (let i = 0; i < num; i++) {
//   let st=""
//   for (let j = 0; j <= num-i-1; j++) {
//     st+=" "
//   }
//   for (let j = 0; j <= i; j++) {
//     st+="*"
//   }
//   for (let j = 0; j < i; j++) {
//     st+="*"
//   }
//   console.log(st)
// }
// for (let i = num-2; i >= 0; i--) {
//   let st=""
//   for (let j = 0; j < num-i; j++) {
//     st+=" "
//   }
//   for (let j = 0; j <= i; j++) {
//     st+="*"
//   }
//   for (let j = 0; j < i; j++) {
//     st+="*"
//   }
//   console.log(st)
// }
