const prompt = require("prompt-sync")();

const r = Number(prompt(""))
console.log("Area: ", (3.14*r*r).toFixed(2))
console.log("Perimenter: ", (2*3.14*r).toFixed(2))