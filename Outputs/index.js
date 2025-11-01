// Call Usage
// function getPersonDetail(result){
//    console.log(`${this.name} from  ${this.city} , ${this.state} -  ${result}`  )
// }
// const person1 = {
//     name: 'ABC',
//     city: 'ranchi',
//     state: 'Jharkhand'
// }
// // getPersonDetail.call(person1, 'Pass');
// let person2 = function(){
//     let name = 'fsjklfsdjlk';
//     let city ='dskfljdskl'
// };
// getPersonDetail.call(person2, 'Fail');
// const newPersonalizedFunc = getPersonDetail.bind(person1, 'Pass');
// newPersonalizedFunc();

// Function.prototype.myCall = function(context, ...args){
//         Object.assign(context,{'getPersonalizedDetail': this});
//         context.getPersonalizedDetail(...args);
// }
// getPersonDetail.myCall(person2,'Pass');

// Function Prototype
// console.log(newPersonalizedFunc.__proto__)

// Function.prototype.myBind = function(context, ...args){
//     let currentFunc = this;
//     return function(){
//         const newName = currentFunc.__name__
//         Object.assign(context, { newName : currentFunc} )
//         context.newName(...args);
//     }
// }
// const newPersonalizedFuncMyBind = getPersonDetail.myBind(person1, 'Pass');
// newPersonalizedFuncMyBind();


// function add1(a, b, c) {
//   return a + b + c + 1;
// }
// function add2(b) {
//   return b + 2;
// }
// function add3(c) {
//   return c + 3;
// }
// console.log(add3(add2(add1(1, 2, 3))));

// function compose(...args) {
//   const Myfunction = function (...myArgs) {
//     let result = null;
//     for (let i = args.length - 1; i >= 0; i--) {
//       if (result === null) {
//         result = args[i](...myArgs);
//       } else {
//         result = args[i](result);
//       }
//     }
//     return result;
//   };
//   return Myfunction;
// }
// console.log(compose(add3, add2, add1)(1, 2, 3));

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => {
//   console.log(res);
//   setTimeout(() => {
//     console.log(7);
//   }, 100);
//   setTimeout(() => {
//     console.log(8);
//   }, 0);
// });
// setTimeout(() => {
//   console.log(4);
// }, 100);
// setTimeout(() => {
//   console.log(9);
// }, 0);
// setTimeout(() => {
//   console.log(5);
// }, -100);
// console.log(6);

// // 1 6 3 8 2 9 5 7 4
// var arr1 = [100, 100, 100];
// console.log(arr1.map(parseInt));
// [parseInt(100,0),parseInt(100,1),parseInt(100,2)]
// [100, NaN, 4];


// https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703

// const arr = [10, 12, 15, 21];

// const ex1 = () => {
//   for (var i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//       console.log("Index: " + i + ", element: " + arr[i]);
//     }, 3000);
//   }
// };

// const ex1_1 = () => {
//   for (var i = 0; i < arr.length; i++) {
//     // pass in the variable i so that each function
//     // has access to the correct index
//     const timerFunc = j => {
//         return () => {
//           console.log("> Index: " + j + ", element: " + arr[j]);
//         };
//       }
//     setTimeout(timerFunc(i),
//       3000
//     );
//   }
// };

// const ex1_2 = () => {
//   for (let i = 0; i < arr.length; i++) {
//     // using the ES6 let syntax, it creates a new binding
//     // every single time the function is called
//     // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//     setTimeout(() => {
//       console.log("> Index: " + i + ", element: " + arr[i]);
//     }, 3000);
//   }
// };

// ex1();
// ex1_1();
// ex1_2();

function job(state){
  return new Promise((resolve, reject) => {
    if(state){
      resolve('success');
    }else{
      reject('failure');
    }
  })
}
const promise = job(true);
console.log(promise);

promise.then(function(data){
  if( data!=='dsfjkjkl'){
    throw 'Defeat'
  }
  console.log(data);
  return job(true)
}).then(function(data){
  console.log(data);
  return job(false)
}).catch(function(err){
  console.log('error1', err)
  return 'Error Caught';
}).then(function(data){
  console.log('data1' , data);
  return job(true)
}).catch(function(err){
  console.log('error2', err)
})

// const p1 = new Promise((resolve, reject)=>{
//   setTimeout(reject, 100, 'p1')
// })

// p1.catch(function(err){return err}).then(data=> console.log('p1 data', data));

// var a = new Promise((resolve, reject) => {
//   let c = 5
//   console.log('First', c );
//   resolve('Hello World')
// });
// (async function iife(){
//   console.log('second')
//   let c = await a;
//   console.log(c)
//   console.log('Finish')
// })()

function outer(){
  function inner(){
    // console.log('Inside', abc)
    return () => abc(12)
  }
  var a =10;
  function abc(b){
    console.log(a, b)
  }
  return inner;
}
const otherName = outer()()
otherName()
console.log(otherName())

