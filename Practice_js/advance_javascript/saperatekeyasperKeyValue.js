// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];

const saperatePeopleByAge=() =>{
    console.log(people)
    const map={}
    
    for(let item of people){
        console.log(item)
        const key = item.age
        console.log(key)
        if(!map[key]) {
            console.log(map)
            map[key] = []
        }
        console.log(map)
        map[key].push(item)
    }
    console.log('mapl', map)
    return map
}

saperatePeopleByAge()