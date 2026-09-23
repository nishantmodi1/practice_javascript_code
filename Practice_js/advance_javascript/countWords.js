const countWords=(input) => {
    console.log(input)
    const map={}
    const arr=input.split(' ')
    console.log(arr)
    for(let item of arr){
        console.log(item)
        const key=map[item]
        console.log('key', key)
        {map[item]=(map[item] || 0) +1
    }
    console.log(map)
    return map
}
}
countWords("js is fun and js is powerful")