// Array.prototype.functionName
// Array, function, this + prototype

const arr=[1, 2, 3, 4, 5]
Array.prototype.myName = function(){
  for(let i=0; i<this.length; i++){
    console.log(this[i])
  }
  return this[0]
}

// arr.myName()
console.log(arr.myName())