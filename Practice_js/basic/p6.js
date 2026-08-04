const prompt = require("prompt-sync")()

const first = Number(prompt(""))
const second = Number(prompt(""))

console.log("Sum: ", first+second)
console.log("Difference: ", first-second)
console.log("Product: ", (first*second).toFixed(2))
console.log("Quotient: ", second===0?"Not Define":(first/second).toFixed(2))
