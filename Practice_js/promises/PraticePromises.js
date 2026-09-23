// const promise = new Promise((resolve, reject) => {
//   a=1+2
//   if(a==2)
//   resolve(100)
//   else
//   reject(new Error('Something went wrong!'))
// })

// promise.then((value) => console.log(value)).catch((error) => console.log(error.message))

// const promises  = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(120)
//   }, 1000)
// })

// // promises.then((value) => console.log(value), (error) => console.log(error.message))
// console.log(promises)
// promises.then((value) => {
//   console.log(value)
// }).catch(() => 
//   console.log(reject)
// )


const promise1 = new Promise((res, rej) => {
  rej(new Error('Something went wrong!'))
  res(29)
})
const promise2 = new Promise((res, reject) => {
  // rej(new Error('new Error spotted'))
  res('hello')
  reject(new Error('Something went wrong!'))
})
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {

    res(35)
  }, 5000)
})

// const All = Promise.all([promise1, promise2, promise3])
// All.then((value) => console.log(value)).catch(error => console.log(error.message))

const Race = Promise.race([promise3, promise1, promise2])
Race.then((value) => console.log(value)).catch(error => console.log(error.message))
