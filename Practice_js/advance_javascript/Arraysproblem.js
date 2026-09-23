

function CountVowelsinaString(str){
    
    const match = str.match(/[aeiou]/gi)
    
    return match?match.length:0
    
    // let count=0
    // console.log(str.toLowerCase())
    // newStr=str.toLowerCase()
    // const vowels=['a', 'e', 'i', 'o', 'u'];
    
    // for(let char of newStr){
    //     if(vowels.includes(char)){
    //         count++
    //     }
    //     console.log(vowels.includes(char))
    // }
    // for(let s of str){
    //     if(s==='a' || s==='e' || s==='i' || s==='o' || s==='u'){
    //         count++
    //     }
    //     console.log(s)
    // }
    // return count
}

console.log(CountVowelsinaString('Nishant'))



function findSecondLargestNumber(nums) {
    // way 1:
    let largest= -Infinity
    let secondLargest = -Infinity
    
    for(let num of nums){
        if(num>largest){
            secondLargest=largest
            largest=num
        } if(num<largest && num> secondLargest){
            secondLargest=num
        }
    }
    
    // way 3:
    // for(let num of nums){
    //     if(num>largest){
    //         largest=num
    //     }
    // }
    // for(let num of nums){
    //     if(num< largest && num>secondLargest){
    //         secondLargest=num
    //     }
    // }
    
    return secondLargest
    
    // way 2: 
    // console.log(nums.sort((a, b) => a - b))
    // return nums[nums.length -2]
}

console.log(findSecondLargestNumber([10, 5, 8, 20, 21]))


function makeFirstLetterCaps(str){
    // way: 2
    return str.toLowerCase().split(' ').
        map((s) => (s.charAt(0).toUpperCase() + s.slice(1))).join(' ')
    
    // s.map(() => )
    
    // way: 1
    // const s= str.toLowerCase().split(' ')
    // console.log(s)
    // for(let i=0; i<s.length; i++){
    //     s[i]=s[i].charAt(0).toUpperCase() + s[i].slice(1)
    // }
    // console.log(s.join(' '))
}
console.log(makeFirstLetterCaps("hEllo world"))



function isAnagram(s, t){
  // way 2
  const charCount={}
  for(let i=0; i<s.length; i++){
    const charS = s[i]
    charCount[charS] = (charCount[charS] || 0) + 1
    console.log('S', charCount)
    const charT = t[i]
    charCount[charT] = (charCount[charT] || 0) - 1
    console.log('T', charCount)
  }
  console.log('klfd',charCount)
  
  for(let char in charCount){
    console.log(charCount[char])
    if(charCount[char] !== 0){
      return false
    } 
  }
  return true
  
  // way 1 O(nlogn)
  // if(s.length !== t.length) return false
  // let s1=s.split('').sort().join('')
  // let t1=t.split('').sort().join('')
  // return s1===t1
 }

console.log(isAnagram("listenpp", "silentpp"))


function reverseString(str){
    let left=0
    let right=str.length-1;
    
    while(left<right){
        [str[left], str[right]] = [str[right], str[left]]
        left++
        right--
    }
    return str
    
    // way:3
    // let newArr=[]
    // console.log(str.split(''))
    // for(let i=str.length-1; i>=0; i--){
    //     newArr.push(str[i])
    // }
    // return newArr.join('')
    
    // way:2
    
    // return str.split('').reverse().join('')
}

console.log(reverseString('Nishant'.split('')))



function isDuplicate(nums){
  // way:2
    const set = new Set(nums)
    console.log(set.size)
    return set.size !== nums.length
    
    // way : 1
    // nums.sort((a, b) => a-b)
    // for(let i=1; i<nums.length; i++){
    //     console.log(nums[i])
    //     if(nums[i] === nums[i-1]){
    //         return true
    //     }
    // }
}

console.log(isDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 8]))


function ProductofArrayExceptSelf(arr){

  //<-- optimal -->
  const n=arr.length;
  const result = new Array(n).fill(1)

  //store left product in result directly
  let leftProduct=1
  for(let i=0; i<n; i++){
    console.log(result[i], arr[i])
    result[i]=leftProduct
    leftProduct*=arr[i]
  }

  //Right products
  let rightProduct=1
  for(let i=n-1; i>=0; i--){
    result[i]*=rightProduct
    rightProduct*=arr[i]
  }
  // console.log(result)

  // <-- Better -->
  // const n=arr.length
  // const left=new Array(n).fill(1)
  // const right=new Array(n).fill(1)
  // const result = new Array(n)

  // //left product
  // for(let i=1; i<n; i++){
  //   console.log('jfokdsa',left[i-1],'*',arr[i-1])
  //   left[i]=left[i-1]*arr[i-1]
  // }

  // //right product
  // for(let i=n-2; i>=0; i--){
  //   console.log('fjdsk', right[i+1]*arr[i+1])
  //   right[i]=right[i+1]*arr[i+1]
  // }

  // //product of left*right
  // for(let i=0; i<n; i++){
  //   result[i] =left[i]*right[i]
  // }
  // console.log(result)

  // <-- Brute Force -->
  // let n=arr.length
  // let result = new Array(n).fill(1)
  // console.log(result)
  
  // for(let i=0; i<n; i++){
  //   let prod=1
  //   for(let j=0; j<n; j++){
  //     if(i!==j){
  //       prod*=arr[j]
  //     }
  //   }
  //   result[i]=prod
  // }
  return result
}
console.log(ProductofArrayExceptSelf([1,2,3,4]))

function TopKFrequentElements(arr, k){
  console.log(arr, k)
  //<--Optimal(Bucket sort)-->
  // step 1: count frequency
  let freq={}
  for(let item of arr){
    freq[item]=(freq[item]||0)+1
  }
  console.log(freq)

  //step 2: create bucket
  let buckets=Array(arr.length+1).fill(null).map(()=>[])
  console.log(buckets)
  for(let item in freq){
    let count=freq[item]
    console.log(count)
    // console.log(buckets[count].push(Number(item)))
    buckets[count].push(Number(item))
  }

  //step 3: collect result from hightest frequency
  const result=[]

  for(let i=buckets.length-1; i>=0 && result.length<k; i--){
    console.log('fds',i)
    for(let item of buckets[i]){
      // console.log(buckets[i])
      result.push(item);
      if(result.length===k) break
    }
  }

  //<-- Better -->
  // // step 1: frequency Map
  // let freq={}
  // for(let item of arr){
  //   freq[item]=(freq[item]||0)+1
  // }
  // console.log(freq)

  // //step 2: convert to an array
  // let obj=Object.entries(freq)
  // console.log(obj)

  // //step 3: sort by frequency (decending)
  // console.log(obj.sort((a, b)=> b[1] - a[1]))

  // // step 4: take first k element
  // const result=[]
  // for(let i=0; i<k; i++){
  //   console.log(Number(obj[i][0]))
  //   result.push(Number(obj[i][0]))
  // }

  // <-- Brute Force -->
  // step 1: find frequency

  // let freq={}
  // for(let item of arr){
  //   freq[item]=(freq[item] || 0)+1
  // }
  // console.log(freq)
  // const result=[];

  // for(let i=0; i<k; i++){
  //   let maxFreq=0
  //   let maxKey=null

  //   for(let key in freq){
  //     console.log(freq[key])
  //     if(freq[key]>maxFreq){
  //       maxFreq=freq[key]
  //       maxKey=key
  //     }
  //   }
  //   result.push(Number(maxKey))
  //   delete freq[maxKey]
  // }
  return result;
}
console.log(TopKFrequentElements([1,1,1,2,2,3,3,3], 2))


function GroupAnagrams(arr){

  // <-- Optimal 1 -->
  const map=new Map()
  let obj={}

  for(let item of arr){
    const count = new Array(26).fill(0)
    // console.log(count)

    for(let ch of item){
      // console.log(ch.charCodeAt(0)-'a'.charCodeAt(0))
      count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
      // console.log(count)
    }
    const key=count.join('#')
    // console.log(key)

    // <-- using Object -->
    if(!obj[key]){
      obj[key]=[]
      // console.log('obj', obj)
    }
    obj[key].push(item)
    // console.log('objq', obj)
    // <--using Map method -->
    // if(!map.has(key)){
    //   console.log(map)
    //   map.set(key, [])
    // }
    // map.get(key).push(item)
    // console.log(map)
  }

  // console.log(Array.from(map.values()))
  // return Array.from(map.values())
  // console.log('obj2', Object.values(obj))
  return Object.values(obj)

  // <-- better -->
  // const map= new Map()
  // for(let item of arr){
  //   let sorted = item.split('').sort().join('')
  //   // console.log('sorted', sorted)

  //   // add to the group
  //   if(!map.has(sorted)){
  //     // console.log(map.has(sorted), map.set(sorted, []))
  //     map.set(sorted, [])
  //   }
  //   // console.log(map.get(sorted).push(item))
  //   map.get(sorted).push(item)
  // }
  // // console.log(Array.from(map.values()))
  // return Array.from(map.values())

  // <-- Brute Force --> O(n^2 * m)

  // const result=[]
  // const visited=new Array(arr.length).fill(false)

  // function isAnagrams(arr1, arr2){
  //   if(arr1.length !== arr2.length)  return false
    
  //   const freq={}
  //   for(let ch of arr1){
  //     freq[ch] = (freq[ch]||0) + 1
  //   }

  //   for(let ch of arr2){
  //     if(!freq[ch]) return false
  //     freq[ch]--
  //   }
    
  //   return true
  // }

  // for(let i=0; i<arr.length; i++){
  //   if(visited[i]) continue;

  //   const grouped=[arr[i]]
  //   visited[i]=true

  //   for(let j=i+1; j<arr.length; j++){
  //     console.log(arr[i], arr[j])
  //     console.log('anagram is checking!!!', isAnagrams(arr[i], arr[j]))
  //     if(visited[i] && isAnagrams(arr[i], arr[j])){
  //       grouped.push(arr[j])
  //       visited[j]=true
  //     }
  //   }
  //   result.push(grouped)
  // }
  // return result
}
console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"]))

function ValidAnagram(s, t){
  // with sorting
  if(s.length !== t.length) return false
  s=s.split('').sort().join('')
  t=t.split('').sort().join('')
  console.log(s, t)
  return s===t
  //hashing freq, 
  // let freq={}

  // for(let ch of s){
  //   freq[ch] = (freq[ch] || 0) + 1
  // }
  // console.log(freq)
  // for(let ch of t){
  //   console.log( freq, freq[ch])
  //   if(!freq[ch]) return false
  //   freq[ch]--
  // }
  // console.log(freq)
  // return true
}

console.log(ValidAnagram(s = "anagram", t = "nagaram"))


function ContainsDuplicate(arr){

  let newarr=arr.sort((a, b)=> a-b)

  for(let i=1; i<newarr.length; i++){
    if(arr[i]===arr[i-1]){
      return true
    }
  }
  return false

  // let set=new Set()

  // for(let item of arr){
  //   if(set.has(item)){
  //     return true
  //   }
  //   set.add(item)
  // }
  // return false
}

console.log(ContainsDuplicate([1,2,3,4]))


function SquaredSortedArray(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let result = new Array(n);
  let index = n - 1;

  while (left <= right) {
    let leftSq = arr[left] * arr[left];
    let rightSq = arr[right] * arr[right];

    if (leftSq > rightSq) {
      result[index] = leftSq;
      left++;
    } else {
      result[index] = rightSq;
      right--;
    }
    index--;
  }

  return result;
}


// function SquaredSortedArray(arr){
//   let i=0
//   for(let item of arr){
//     arr[i]=item*item
//     i++
//   }
//   // arr=arr.map((item)=> item*item)
//   console.log(arr.sort((a, b)=> a-b))
//   return arr.sort((a, b)=> a-b)
// }
console.log(SquaredSortedArray([-4, -1, 0, 3, 10]))


let nums=[3,2,2,3]
function RemoveElement(nums, val){
let i=0 
  for(let j=0; j<nums.length; j++){
    if(nums[j]!==val){
      // console.log(nums[item], val)
      nums[i]=nums[j]
      // console.log(nums[i])
      i++
    }
  }
  return i

}
let k=RemoveElement(nums, val=3)
console.log(k)
console.log(nums.slice(0, k))

function MoveZerostoEnd(arr){
  let i=0
  for(let item in arr){
    if(arr[item] !==0){
      arr[i]=arr[item]
      i++
    }
  }
  while(i<arr.length){
      arr[i]=0
      i++
  }
  return arr
}

console.log(MoveZerostoEnd([0, 1, 0, 13, 12]))


function SumofSubarray(arr, k){
  let start=0
  let end=0
  let sum=0; let max=-Infinity

  while(end<arr.length){
    // console.log(arr.length)
    sum=sum+arr[end]
    if(end-start+1<k){
      end++
    }else if(end-start+1===k){
      max=Math.max(max, sum)
      sum=sum-arr[start]
      start++; end++;
    }
  }
  return max
}
console.log(SumofSubarray([2, 1, 5, 1, 3, 2], k=3))

function RemoveDuplicates(arr){
  var newArr=[]
  for(var item of arr){
    if(item in newArr){
      
    }
    else{
      newArr.push(item)
    }
  }
  return newArr
}
console.log(RemoveDuplicates([1, 1, 2, 2, 3]))

function CheckifArrayisSorted(arr){
  return arr===arr.sort()
}

console.log(CheckifArrayisSorted([1, 2, 3, 4]))

function ReverseanArray(arr){
  let revArr=[]
  for(let i=arr.length-1; i>=0; i--){
    revArr.push(arr[i])
  }
  return revArr
}
console.log(ReverseanArray([1, 2, 3, 4]))

function CountPositiveNumbers(arr){
  let count=0
  for(let item of arr){
    if(item>0){
      count++
    }
  }
  return count
}
console.log(CountPositiveNumbers([-2, 3, 4, -1, 0, 5]))

function SecondLargestElement(arr){
  arr.sort()
  return arr[arr.length-2]
}

console.log(SecondLargestElement([10, 5, 8, 20]))

function FindMaximumElement(arr){
  let max=-Infinity
  for(let item of arr){
    max=(max<item) ? item:max
  }
  return max
}
console.log(FindMaximumElement([3, 1, 9, 2]))