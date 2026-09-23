nums = [0, 4, 3, 0]
target = 0

function twoSum() {
    const map={}
    
    for(let i = 0; i < nums.length; i++){
        const need=target - nums[i]
        console.log(need)
        if(map[need] !== undefined){
            console.log(map, [map[need], i])
            return [map[need], i]
        }
        console.log(map)
        map[nums[i]] = i
        
    }
}
twoSum()