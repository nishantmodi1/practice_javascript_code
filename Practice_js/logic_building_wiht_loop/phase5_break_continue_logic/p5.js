// Keep taking numbers from the user and print them until a negative number appears, then stop the loop. 

const prompt = require("prompt-sync")();

let n

let flag=true
while (flag) {
    let n = Number(prompt("Enter n: "));

    if (n < 0) {
        flag = false;
    } else {
        console.log(n);
    }
}

