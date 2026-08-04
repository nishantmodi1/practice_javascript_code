const prompt = require("prompt-sync")()

const w = Number(prompt(""))
const h = Number(prompt(""))

console.log("BMI: ", (w/(h*h)).toFixed(2))