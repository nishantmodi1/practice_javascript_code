const prompt = require("prompt-sync")();

// const prompt = require("prompt-sync")();

const l = Number(prompt(""))
console.log("Area: ", (l*l).toFixed(2))
console.log("Perimenter: ", (4*l).toFixed(2))