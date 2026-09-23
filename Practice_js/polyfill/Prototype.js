// // ============================================================================
// // COMPLETE POLYFILLS INTERVIEW PREPARATION
// // ============================================================================

// // ============================================================================
// // 1. ARRAY.MAP POLYFILL
// // ============================================================================
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    console.log("Check", typeof callback, this, thisArg)
    // Error handling
    if (this == null) {
      throw new TypeError('Array.prototype.myMap called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    console.log('O', O)
    const len = O.length >>> 0;
    console.log('len', O.length>>>0)
    const result = new Array(len);
    console.log('result', result)
    for (let i = 0; i < len; i++) {
      if (i in O) {
        console.log('callback', callback.call(thisArg, O[i], i, O), O[i])
        result[i] = callback.call(thisArg, O[i], i, O);
      }
    }
    
    return result;
  };
}

// // Test Cases for map
console.log('=== ARRAY.MAP TESTS ===');
console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
console.log([1, , 3].myMap(x => x * 2)); // [2, empty, 6]
const obj1 = { multiplier: 10 };
console.log([1, 2].myMap(function(x) { return x * this.multiplier; }, obj1)); // [10, 20]

Array.prototype.myMap1 = function(callback, thisArg){
  const O = Object(this);
  const len = O.length >>> 0

  const result = new Array(len)

  for( let i=0; i<len; i++){

  }
}

// // ============================================================================
// // 2. ARRAY.FILTER POLYFILL
// // ============================================================================
// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function(callback, thisArg) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.myFilter called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
    
//     const O = Object(this);
//     const len = O.length >>> 0;
//     const result = [];
    
//     for (let i = 0; i < len; i++) {
//       if (i in O) {
//         const value = O[i];
//         if (callback.call(thisArg, value, i, O)) {
//           result.push(value);
//         }
//       }
//     }
    
//     return result;
//   };
// }

// // Test Cases for filter
// console.log('\n=== ARRAY.FILTER TESTS ===');
// console.log([1, 2, 3, 4].myFilter(x => x > 2)); // [3, 4]
// console.log([1, , 3, , 5].myFilter(x => x > 2)); // [3, 5]

// // ============================================================================
// // 3. ARRAY.REDUCE POLYFILL
// // ============================================================================
// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function(callback, initialValue) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.myReduce called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
    
//     const O = Object(this);
//     const len = O.length >>> 0;
    
//     let k = 0;
//     let accumulator;
    
//     // If initialValue is provided
//     if (arguments.length >= 2) {
//       accumulator = initialValue;
//     } else {
//       // Find first existing element as accumulator
//       let kPresent = false;
//       while (k < len && !kPresent) {
//         kPresent = k in O;
//         if (kPresent) {
//           accumulator = O[k];
//         }
//         k++;
//       }
      
//       if (!kPresent) {
//         throw new TypeError('Reduce of empty array with no initial value');
//       }
//     }
    
//     // Iterate through array
//     while (k < len) {
//       if (k in O) {
//         accumulator = callback(accumulator, O[k], k, O);
//       }
//       k++;
//     }
    
//     return accumulator;
//   };
// }

// // Test Cases for reduce
// console.log('\n=== ARRAY.REDUCE TESTS ===');
// console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val, 0)); // 10
// console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val)); // 10
// console.log([1, 2, 3].myReduce((acc, val) => acc * val, 1)); // 6

// // Advanced: Flatten array
// console.log([[1, 2], [3, 4], [5]].myReduce((acc, val) => acc.concat(val), [])); // [1,2,3,4,5]

// // ============================================================================
// // 4. PROMISE.ALL POLYFILL
// // ============================================================================
// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     // Edge case: empty array
//     if (!Array.isArray(promises)) {
//       return reject(new TypeError('Argument must be an array'));
//     }
    
//     if (promises.length === 0) {
//       return resolve([]);
//     }
    
//     const results = [];
//     let completedCount = 0;
    
//     promises.forEach((promise, index) => {
//       // Convert to promise in case it's not
//       Promise.resolve(promise)
//         .then(value => {
//           results[index] = value;
//           completedCount++;
          
//           // All promises completed
//           if (completedCount === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(error => {
//           // First rejection rejects entire Promise.all
//           reject(error);
//         });
//     });
//   });
// }

// // Test Cases for Promise.all
// console.log('\n=== PROMISE.ALL TESTS ===');
// const p1 = Promise.resolve(3);
// const p2 = 42; // Non-promise value
// const p3 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));

// myPromiseAll([p1, p2, p3]).then(values => {
//   console.log(values); // [3, 42, "foo"]
// });

// // Test rejection
// const p4 = Promise.resolve(1);
// const p5 = Promise.reject('Error!');
// const p6 = Promise.resolve(3);

// myPromiseAll([p4, p5, p6])
//   .then(values => console.log(values))
//   .catch(error => console.log('Caught:', error)); // Caught: Error!

// // ============================================================================
// // 5. FUNCTION.BIND POLYFILL
// // ============================================================================
// if (!Function.prototype.myBind) {
//   Function.prototype.myBind = function(context, ...boundArgs) {
//     if (typeof this !== 'function') {
//       throw new TypeError('Bind must be called on a function');
//     }
    
//     const originalFunction = this;
    
//     return function(...args) {
//       // Combine bound arguments with called arguments
//       return originalFunction.apply(context, [...boundArgs, ...args]);
//     };
//   };
// }

// // Test Cases for bind
// console.log('\n=== FUNCTION.BIND TESTS ===');
// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // undefined (this is global/undefined)

// const boundGetX = unboundGetX.myBind(module);
// console.log(boundGetX()); // 42

// // With arguments
// function multiply(a, b) {
//   return a * b * this.multiplier;
// }
// const multiplyBy2 = multiply.myBind({ multiplier: 2 }, 3);
// console.log(multiplyBy2(4)); // 3 * 4 * 2 = 24

// // ============================================================================
// // 6. FUNCTION.CALL POLYFILL
// // ============================================================================
// if (!Function.prototype.myCall) {
//   Function.prototype.myCall = function(context, ...args) {
//     if (typeof this !== 'function') {
//       throw new TypeError('myCall must be called on a function');
//     }
    
//     // Handle null/undefined context (should be global object)
//     context = context || globalThis;
    
//     // Convert primitives to objects
//     if (typeof context !== 'object') {
//       context = Object(context);
//     }
    
//     // Create unique property to avoid collisions
//     const fnSymbol = Symbol('fn');
//     context[fnSymbol] = this;
    
//     // Call function with context
//     const result = context[fnSymbol](...args);
    
//     // Clean up
//     delete context[fnSymbol];
    
//     return result;
//   };
// }

// // Test Cases for call
// console.log('\n=== FUNCTION.CALL TESTS ===');
// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.name}${punctuation}`;
// }

// const person = { name: 'Alice' };
// console.log(greet.myCall(person, 'Hello', '!')); // Hello, Alice!

// // ============================================================================
// // 7. FUNCTION.APPLY POLYFILL
// // ============================================================================
// if (!Function.prototype.myApply) {
//   Function.prototype.myApply = function(context, argsArray) {
//     if (typeof this !== 'function') {
//       throw new TypeError('myApply must be called on a function');
//     }
    
//     // Handle null/undefined context
//     context = context || globalThis;
    
//     // Convert primitives to objects
//     if (typeof context !== 'object') {
//       context = Object(context);
//     }
    
//     // Handle missing or invalid argsArray
//     if (argsArray == null) {
//       argsArray = [];
//     }
    
//     if (!Array.isArray(argsArray) && typeof argsArray[Symbol.iterator] !== 'function') {
//       throw new TypeError('CreateListFromArrayLike called on non-object');
//     }
    
//     const fnSymbol = Symbol('fn');
//     context[fnSymbol] = this;
    
//     const result = context[fnSymbol](...argsArray);
    
//     delete context[fnSymbol];
    
//     return result;
//   };
// }

// // Test Cases for apply
// console.log('\n=== FUNCTION.APPLY TESTS ===');
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.myApply(null, numbers);
// console.log(max); // 7

// console.log(greet.myApply(person, ['Hi', '?'])); // Hi, Alice?

// // ============================================================================
// // 8. DEBOUNCE FUNCTION
// // ============================================================================
// function debounce(func, delay) {
//   let timeoutId;
  
//   return function(...args) {
//     const context = this;
    
//     // Clear previous timeout
//     clearTimeout(timeoutId);
    
//     // Set new timeout
//     timeoutId = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// }

// // Advanced Debounce with immediate option
// function debounceAdvanced(func, delay, immediate = false) {
//   let timeoutId;
  
//   return function(...args) {
//     const context = this;
//     const callNow = immediate && !timeoutId;
    
//     clearTimeout(timeoutId);
    
//     timeoutId = setTimeout(() => {
//       timeoutId = null;
//       if (!immediate) {
//         func.apply(context, args);
//       }
//     }, delay);
    
//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// }

// // Test Cases for debounce
// console.log('\n=== DEBOUNCE TESTS ===');
// let debounceCount = 0;
// const debouncedFunc = debounce(() => {
//   debounceCount++;
//   console.log('Debounced function called:', debounceCount);
// }, 300);

// // Simulate rapid calls
// debouncedFunc();
// debouncedFunc();
// debouncedFunc();
// // Only last call executes after 300ms

// // ============================================================================
// // 9. THROTTLE FUNCTION
// // ============================================================================
// function throttle(func, limit) {
//   let inThrottle;
  
//   return function(...args) {
//     const context = this;
    
//     if (!inThrottle) {
//       func.apply(context, args);
//       inThrottle = true;
      
//       setTimeout(() => {
//         inThrottle = false;
//       }, limit);
//     }
//   };
// }

// // Advanced Throttle with trailing call option
// function throttleAdvanced(func, limit, options = {}) {
//   let timeoutId;
//   let lastRan;
//   let lastFunc;
  
//   return function(...args) {
//     const context = this;
    
//     if (!lastRan) {
//       // First call
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       // Clear existing timeout
//       clearTimeout(timeoutId);
//       lastFunc = () => func.apply(context, args);
      
//       // Set new timeout
//       timeoutId = setTimeout(() => {
//         if (Date.now() - lastRan >= limit) {
//           lastFunc();
//           lastRan = Date.now();
//         }
//       }, Math.max(limit - (Date.now() - lastRan), 0));
//     }
//   };
// }

// // Test Cases for throttle
// console.log('\n=== THROTTLE TESTS ===');
// let throttleCount = 0;
// const throttledFunc = throttle(() => {
//   throttleCount++;
//   console.log('Throttled function called:', throttleCount);
// }, 1000);

// // Simulate rapid calls
// throttledFunc(); // Executes immediately
// throttledFunc(); // Ignored
// throttledFunc(); // Ignored
// setTimeout(() => throttledFunc(), 1100); // Executes after limit

// // ============================================================================
// // BONUS: PROMISE.RACE POLYFILL
// // ============================================================================
// function myPromiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       return reject(new TypeError('Argument must be an array'));
//     }
    
//     if (promises.length === 0) {
//       return; // Never settles
//     }
    
//     promises.forEach(promise => {
//       Promise.resolve(promise)
//         .then(resolve)
//         .catch(reject);
//     });
//   });
// }

// // Test Cases for Promise.race
// console.log('\n=== PROMISE.RACE TESTS ===');
// const pRace1 = new Promise((resolve) => setTimeout(() => resolve('slow'), 500));
// const pRace2 = new Promise((resolve) => setTimeout(() => resolve('fast'), 100));

// myPromiseRace([pRace1, pRace2]).then(value => {
//   console.log(value); // "fast"
// });

// // ============================================================================
// // BONUS: ARRAY.FOREACH POLYFILL
// // ============================================================================
// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function(callback, thisArg) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.myForEach called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
    
//     const O = Object(this);
//     const len = O.length >>> 0;
    
//     for (let i = 0; i < len; i++) {
//       if (i in O) {
//         callback.call(thisArg, O[i], i, O);
//       }
//     }
    
//     // forEach returns undefined
//   };
// }

// // Test Cases for forEach
// console.log('\n=== ARRAY.FOREACH TESTS ===');
// [1, 2, 3].myForEach(val => console.log(val * 2)); // 2, 4, 6

// // ============================================================================
// // BONUS: ARRAY.FIND POLYFILL
// // ============================================================================
// if (!Array.prototype.myFind) {
//   Array.prototype.myFind = function(callback, thisArg) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.myFind called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
    
//     const O = Object(this);
//     const len = O.length >>> 0;
    
//     for (let i = 0; i < len; i++) {
//       if (i in O) {
//         const value = O[i];
//         if (callback.call(thisArg, value, i, O)) {
//           return value;
//         }
//       }
//     }
    
//     return undefined;
//   };
// }

// // Test Cases for find
// console.log('\n=== ARRAY.FIND TESTS ===');
// console.log([1, 2, 3, 4].myFind(x => x > 2)); // 3
// console.log([1, 2, 3, 4].myFind(x => x > 10)); // undefined

// // ============================================================================
// // PRACTICAL INTERVIEW SCENARIOS
// // ============================================================================

// console.log('\n=== PRACTICAL SCENARIOS ===');

// // Scenario 1: Search bar with debounce
// const searchInput = {
//   value: '',
//   addEventListener: function(event, handler) {
//     this.handler = handler;
//   },
//   simulateTyping: function(text) {
//     for (let char of text) {
//       this.value += char;
//       if (this.handler) this.handler();
//     }
//   }
// };

// const apiCall = debounce((query) => {
//   console.log(`API call with query: "${query}"`);
// }, 500);

// searchInput.addEventListener('input', () => apiCall(searchInput.value));

// // Scenario 2: Scroll event with throttle
// let scrollCount = 0;
// const handleScroll = throttle(() => {
//   scrollCount++;
//   console.log('Scroll event handled:', scrollCount);
// }, 200);

// // Scenario 3: Chaining custom methods
// const result = [1, 2, 3, 4, 5, 6]
//   .myFilter(x => x > 2)
//   .myMap(x => x * 2)
//   .myReduce((acc, val) => acc + val, 0);

// console.log('Chained result:', result); // (3+4+5+6) * 2 = 36
