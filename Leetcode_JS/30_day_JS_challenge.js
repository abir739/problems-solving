// Prob 1: "Hello World"
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".

const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
}

const f = createHelloWorld();
console.log(f());

// Prob 2: Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:
// Input: n = 10  Output: [10,11,12]

const createCounter = function(n) {
    return function() {
        return n++;
    };
};

const conter = createCounter(10);
console.log(conter());
console.log(conter());
console.log(conter());

// In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes.
// The combination of the function and it's environment is known as a closure.


// Prob 3: 2665. Counter II
const createCounter2 = function(init) {
    let count = init;

const increment = () => ++count;


const  reset = () => {
    count = init;
    return count;
}
const  decrement=() => --count;


return {
    increment,
    reset,
    decrement,

} 
}
// const createCounter2 = function(init) {
//     let count = init;
//     function increment() {
//     return ++count;
// };

// function reset() {
//     count = init;
//     return count;
// }
// function decrement() {
// return --count;
// };

// return {
//     increment: increment,
//     reset: reset,
//     decrement: decrement,

// } 
// }


// use Class
class CounterClass {
    constructor(init) {
        this.init = init;
        this.counter = init;
    }
    increment() { return ++this.counter;}
    decrement() {return --this.counter;}
    reset() {this.counter = this.init;
        return this.counter;
    }
}

const obj = new CounterClass(7);
console.log(obj.increment());
console.log(obj.decrement());
console.log(obj.reset());

const counter2 = createCounter2(5);
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());

// Prob 4: Apply Transform over each Element in Array (Transform) - Leetcode 2635
var map = function(arr, fn) {
    // const newArray = new Array(arr.length);
    let newArray = [];
    for(let i in arr) {
        // newArray[i] = fn(arr[i], Number(i));
        newArray.push(fn(arr[i], Number(i)));
    }
    return newArray;
};

// var map = function(arr, fn) {
//     return arr.map(fn);
// };


// Prob 5: Filter Elements from Array (Transforms) - Leetcode 2634
var filter = function(arr, fn) {
    let newArr = [];
    for(const i in arr) {
        if(fn(arr[i], Number(i))) {
          newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Prob 5: Array Reduce Transformation (Transforms) - Leetcode 2626
// result is achieved through the following 
// operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.
var reduce = function(nums, fn, init) {
    let val = init;
    for(const n of nums){
        val = fn(val, n);
    }
return val;

// return nums.reduce(fn, init);
};