const propmt = require("prompt-sync")();

const x= Number(propmt(""))
console.log("In Meter: ", (x/100).toFixed(2), "meter")
console.log("In Foot: ", (x/30.48).toFixed(2), "Foot")
