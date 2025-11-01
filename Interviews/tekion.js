// console.log("Start");

// function waitFor(duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Waited for ${duration} milliseconds.`);
//     }, duration);
//   });
// }

function logger(string) {
  console.log(string);
}

async function runAsyncTasks() {
  await Promise.resolve(logger("STRING"));
  console.log("logged the STRING");

  const result = await waitFor(1000);
  console.log(result);
}

runAsyncTasks();

console.log("End");

// //Start 
// // STRING
// //Logged the string
// // End
// // Waited for ${1000} milliseconds.

// const input = "abc";
// output = ["", "a", "b", "c", "ab", "bc", "abc"];
// result = [""]
// for (let k= 1; k<=input.length ; k++){
//     for (let i= 0; i < input.length ; i++){
//         if ((i + k) <= input.length){
//             result.push(input.slice(i,i+k))
//         }
//     }
// }
// console.log(result);


function curried(a) {
    return function (b) {
        if(!b){
            if (Array.isArray(a)){
                return [...a]
            }else{
                return [a]
            }
            
        }else{
            if (Array.isArray(a)){
                return curried([b, ...a])
            }else{
                return curried([b, a])
            } 
            
        }
        
    };
}

// console.log(curried(2)(3)(4)(5)());
// function sum(a, b) {
//     return a + b;
//   }
  
//   const curriedSum = function (a) {
//     return (b) => {
//       return a + b;
//     };
//   };
  
//   let val = curriedSum(2)(3);
//   let sumBy2 = curriedSum(2);
  
//   console.log(sumBy2(3));
  
//   function curried(a) {
//     return function (b) {
//       return function (c) {
//         return [c, b, a];
//       };
//     };
//   }
  
//   console.log(curried(3)(2)(1));
  
//   const join = (a, b, c) => {
//     return `${a}_${b}_${c}`;
//   };
//   const curriedJoin = curry(join);
//   console.log(curriedJoin(1)(2, 3));
//   //1_2_3console.log(curriedJoin(1,2)(3)); //1_2_3
  
//   function curry(cb){ 
//       return function
//   }

// function curry(cb){ 
//     return function(...args1){
//     	return function(...args2){
//       	return cb(...args1, ...args2);
//       }
//     }
// }
// const join = (a, b, c, d) => {
//   return `${a}_${b}_${c}_${d}`;
// };
// const sum = (a,b) =>{
// 	return a+b

// }
// const curriedJoin = curry(join);
// console.log(curriedJoin(1,4)(2, 3));
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2));


function infiniteCurry(fn) {
    return function curryInner(...args) {
      // if (args.length >= fn.length) return fn(...args);
      console.log(args)
      if (!args.length) return ''
      return (...args2) => {
        if(args2.length){
          return curryInner(...args, ...args2);
        }else{
          return fn(...args)
        }
      }
    };
  }
  const join = (...args) => {
     return args.join("_")
  }
  
  const curriedJoin = infiniteCurry(join)

  curried



