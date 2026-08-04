const prompt = require("prompt-sync")()

const a = Number(prompt(""))
const i = Number(prompt(""))
const t = Number(prompt(""))

const si = a*(1+(i*t)/100)

console.log("Simple Interest: ", si.toFixed(2))
console.log("Amount: ", si+a)