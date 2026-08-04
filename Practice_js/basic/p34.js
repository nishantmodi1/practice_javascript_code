// debounce function

function debounce(func, delay){
  let timerId;
  return function(...args){
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const debounceHello = debounce((msg) => {
  console.log(msg)
}, 2000)

debounceHello("A")
debounceHello("B")
debounceHello("C")
debounceHello("D")