// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
const arr = [1, [2, [3]]]
const depth=2

function flattenWithDepth(arr, depth){
    let result=arr
    
    while(depth>0){
        const newArr = []
        console.log(depth)
        for (let item of result){
            if(Array.isArray(item)){
                newArr.push(...item)
                console.log('newArr1', newArr)
            }else{
                console.log('newArr2', newArr)
                newArr.push(item)
                 console.log('newArr21', newArr)
            }
            
        }
        result=newArr
        depth--
    }
    console.log('newArr3', result)
    return result
}

console.log(flattenWithDepth(arr, depth))
