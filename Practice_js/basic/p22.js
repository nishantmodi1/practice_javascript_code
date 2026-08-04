const prompt = require("prompt-sync")()

const x = Number(prompt(""))

let l = x===1?"One": x===2?"Two": x===3?"Three": x===4?"Four": x===5?"Five": "must be between 1 to 5"
console.log(l)