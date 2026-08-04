// Group people by age

function groupBy(arr){
  let obj={}
  for(let i=0; i<arr.length; i++){
    console.log(arr[i].age)
    if(!obj[arr[i].age]){
      obj[arr[i].age]=[]
      console.log(obj)
    }
  }
}

console.log(groupBy([
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 21 }
]))

// obj[ch] = (obj[ch] || 0)+1