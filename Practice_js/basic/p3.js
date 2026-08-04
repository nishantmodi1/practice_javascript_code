const prompt = require("prompt-sync")();

const l = Number(prompt(""))
const b = Number(prompt(""))
console.log("Area: ", (l*b).toFixed(2))
console.log("Perimenter: ", (2*(l+b)).toFixed(2))