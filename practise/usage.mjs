import { MyFlat, curry, debounce, myCall, throttle } from "./practise2.mjs";

// // Example function to debounce
// const logDebouncedMessage = (message) => {
//     console.log(message);
// };
// // Create a debounced version of the logMessage function with a 500ms delay
// const debouncedLogMessage = debounce(logDebouncedMessage, 500);
// // Calling the debounced function multiple times within 500ms will only log the last call
// debouncedLogMessage('Hello');
// debouncedLogMessage('Hello again');
// debouncedLogMessage('Hello once more');
// // Only 'Hello once more' will be logged after 500ms

// const logTHrottledMessage = (message) => {
//     console.log(`${new Date().toLocaleTimeString()}: ${message}`);
//   };
  
//   const throttledLogMessage = throttle(logTHrottledMessage , 2000);
  
//   // Simulate frequent function calls
//   setInterval(() => throttledLogMessage('Hello'), 500);

// Function.prototype.myCall = myCall;

// function greet(type) {
//     console.log(`Hi, I am ${this.name}, from ${this.city}. I have joined as ${type}`);
// }
// let person1 = {
//     name:'Jatin',
//     city: 'Jaipur'
// }
// try{
//     greet.myCall(person1, 'Sde');
// }catch(err){
//     console.log(err)
// }

Array.prototype.MyFlat = MyFlat;

let arr = [1, [2,3], [4,[5,6, [7]], [], [],[]], [8, [9, []]]];
const flattenArr = arr.MyFlat(arr);
console.log(flattenArr)

const join = (a,b,c,d) => {
    return `${a}_${b}_${c}_${d}_`;
}
const curriedJoin = curry(join);
console.log(curriedJoin(1)(2)(3)(4)());

const sum = (...args) => {
    return args.reduce((cur, val) => cur + val, 0 )
}

