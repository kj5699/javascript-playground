// // // Polyfill for Promise.all()
// // let promise1 = Promise.resolve(1);
// // let promise2 = async function(){
// //     return 'async promise';
// // }();
// // let promise3 = new Promise((res,rej)=>{
// //     setTimeout(()=>{
// //         res('Promise 3');
// //     },1000)
// // })

// // function promiseAllPolyfill(promises){
// //     const result = [];
// //     return new Promise((resolve, reject)=>{
// //         promises.forEach((promise, index) => {
// //             promise.then(res => {result.push(res)}).then(() => {
// //                 if(index === promises.length -1){
// //                     resolve(result);
// //                 }
// //             })
// //         });
// //     })
// // }

// // // console.log(promise2())
// // const promises = [promise1, promise2, promise3];
// // promiseAllPolyfill(promises).then(result =>  console.log(result));

// let obj = {
//     a : '2',
//     b : {
//         c : '3',
//         d : {
//             e : '4',
//             f : '5'
//         }
//     }
// }

// function flattenObj (obj) {
//     let result = {}

//     for (let key in obj){
//         if (typeof obj[key] === 'object'){
//             const temp = flattenObj(obj[key])
//             for (let k in temp){
//                 result[`${key}.${k}`] = temp[k]
//             }
//         }else{
//             result[`${key}`] = obj[key]
//         }
//     }
//     return result

// }


// let flattenedOb = flattenObj(obj)
// console.log(flattenedOb);
// let flattenedObj = { a: '2', 'b.c': '3', 'b.d.e': '4', 'b.d.f': '5' }

// function expand(obj){
//     let result = {}

//     function setValue(arr, value, cur, result){
//         if (arr.length === 0){
//             result[cur] = value
//             return result
//         }else{
//             const [child, ...rest] = arr
//             result[cur] =  result[cur] ? result[cur] : {}
//             result[cur] = setValue(rest,value, child , result[cur])
//             return result
//         }
       
//     }
    
//     for (let key in obj){
//         const [cur, ...rest] = key.split(".")
//         result = setValue(rest,obj[key], cur, result)


//     }
//     return result

// }
// const expanded = expand(flattenedObj);
// console.log(expanded, obj, expanded === obj);

// function compareObj(obj1, obj2) {
//     for (let key in obj1){
//         if(!(key in obj2) || (typeof obj1[key] !== typeof obj2[key])){
//             return false
//         }else if (typeof obj1[key] === 'object'){
//             if (!compareObj(obj1[key], obj2[key])){
//                 return false
//             }
//         }else if(obj1[key] !== obj2[key]){
//             return false
//         }
//     }
// }

// function CustomPromise(executorFunction){
//     let isFulfilled = false;
//     let onResolve;
//     let onReject;
//     let value;
//     let isHandlerCalled = false
//     function resolve(val){
//         isFulfilled = true;
//         this.value = val
//         if (typeof onResolve === 'function' && !isHandlerCalled){

//             onResolve(val)
//             isHandlerCalled = true
//         }
//     }
//     function reject(val){
//         isFulfilled = true;
//         this.value = val
//         if (typeof onReject === 'function' && !isHandlerCalled){
//             onReject(val)
//             isHandlerCalled = true
//         }
//     }

//     this.thenHandler = (callback)=>{
//         onResolve = callback
//         if (isFulfilled && !isHandlerCalled){
//             value= onResolve(value)
//             isHandlerCalled = true

//         }
//         return this
//     }
//     this.catchHandler=(callback)=>{
//         onReject = callback
//         if (isFulfilled && !isHandlerCalled){
//             onReject(value)
//             isHandlerCalled = true
//         }
//         return this
//     }
//     executorFunction(resolve, reject)


// }
// function QuickSort(unsortedArray) {
//     if (unsortedArray.length <= 1) {
//       return unsortedArray;
//     }
    
//     const pivotValue = parseInt(unsortedArray.pop());
//     const lowerValues = [];
//     const higherValues = [];
  
//     for (let i = 0; i < unsortedArray.length; i++) {
//       if (parseInt(unsortedArray[i]) < pivotValue) {
//         lowerValues.push(parseInt(unsortedArray[i]));
//       } else {
//         higherValues.push(parseInt(unsortedArray[i]));     
//       }
//     }
    
//     return [...QuickSort(lowerValues), pivotValue, ...QuickSort(higherValues)];
//   }
  
//   // Test the QuickSort function with the provided array
//   const unsortedArray = [-8, -7, -6, -5, 0, 0, 0, 0, 1, 2, 3];
//   const sortedArray = QuickSort(unsortedArray);
//   console.log(sortedArray);

//   function getPosOnBoard( val , n){
//     let row = n - parseInt((val - 1) / n) - 1
//     let col = (n -row) % 2 ===0 ?  n - ((val -1) % n) - 1 : (val -1) % n
//     return [row, col]
//   }
  
//   let val = getPosOnBoard(25, 5)
//   console.log(val);


Array.prototype.myMap = function(cb){
    let result = []

    for (let i = 0; i< this.length; i++){
        if (this.indexOf(this[i]) !== -1){
            result.push(cb(this[i]))
        }
    }
    return result
}
Array.prototype.myForEach = function(cb){
    for (let i = 0; i< this.length; i++){
        if (this.indexOf(this[i]) !== -1){
            cb(this[i])
        }
    }
}
Array.prototype.MyReduce = function(cb, intitalValue){
    let result  = intitalValue || undefined
    for (let i = 0; i< this.length; i++){
        if (this.indexOf(this[i]) !== -1){
            if(i===0){
                result  = result ? cb( result, this[i]) : this[i]
            }else{
                result = cb( result, this[i])
            }
            
        }
    }
    return result
}

// let arr = [5, 2 ,3,4]

// // const res = arr.MyReduce((acc, next) =>  (acc + (next * next) ))

// const res = arr.reduce((acc, next) =>  (acc + (next * next)), 0)
// console.log(res);

// Promise.prototype.myAll = function(promiseArray) {
//     const result = []
//     const [cur, ...rest] = promiseArray
    
//     return new Promise((resolve, reject) => {
//         cur.then(val => {
//             if(rest.length > 0){
//                 Promise.myAll(rest).then(restResults => {
//                     resolve([cur, ...restResults])
//                 })
//             }
//         })
//     })

//     cur.then((val) => {
//         result.push(val) 
//         result = []
//     })

//     return result
// }

// Function.prototype.myCall = function(context, ...args){
//     let newName = this.name
//     Object.assign(context, {newName : this })
//     context.newName(...args);
// }

// let obj1 = {
//     a: 1,
//     b: 2,
//     getSum : function(c){
//         console.log(this.a + this.b + c)
//     }
// }
// let obj2 = {
//     a: 3,
//     b: 4
// };
// let obj3 = {
//     a : 5,
//     b: 4
// }

// obj1.getSum.myCall(obj2)
// obj1.getSum.myCall(obj3, 5);
// Function.prototype.myApply = function(context, args=[]){
//     let newName = this.name
//     Object.assign(context, {newName : this })
//     context.newName(...args);

// }
// obj1.getSum.myApply(obj2, [5])

// obj1.getSum.myApply(obj3, [6]);

// Function.prototype.myBind =  function(context, ...args){
//     let onlContext = this
//     return function(...newArgs){
//         onlContext.myCall(context, ...args, ...newArgs);
//     }
// }
// let getSumBind = obj1.getSum.myBind(obj2, 3)

// getSumBind();

// const join = (a , b , c) =>{
//     return a + b + c;
// }

function curry(func, context){
    return function curriedFunc(...args){
        if (args.length >= func.length){
            return func(...args)

        }
        return curriedFunc.bind(context || this, ...args)
    }
}
const sum = (a, b, c, d) => a + b + c + d;
const curriedSum = curry(sum);
console.log('Summmm', curriedSum(1)(2)(3)(4))


// const curriedJoin = curry(join)

// console.log('Curried', curriedJoin(1,2)(3));




// function customOnce(func, context){
//     let isCalled = false;
//     return function(){
//         if(!isCalled){
//             isCalled = true
//             return func.apply(context || this, arguments);
//         }
//     }
// }
// let hello = customOnce(() => console.log('hello')) ;
// hello();
// hello();
// hello();
// hello();

// const heavyCalculation = (num1 , num2) => {
//     for (let i=0 ; i< 1000000000; i++){

//     }
//     return num1 + num2
// }
// function memoize(func, context){
//     let cache = {}
//     return function(){
//         let key = JSON.stringify(arguments)
//         if( key in cache){
//             return cache[key]
//         }else{
//             cache[key] = func.apply(context || this, arguments)
//             return cache[key]
//         }
//     }
// }
// let memoizedHeavyCal =  memoize(heavyCalculation)
// console.time('First Call')
// console.log( memoizedHeavyCal(2,4))
// console.timeEnd('First Call')

// console.time('SecondCall')
// console.log( memoizedHeavyCal(2,4))
// console.timeEnd('SecondCall')

const value = { number : 20}
const multiply = (x = {...value}) => {
    
    console.log(x.number *= 2)
}
multiply(value);
multiply(value);

function infiniteCurry(fn) {
    return function curryInner(...args) {
      // if (args.length >= fn.length) return fn(...args);
    //   if (!args.length) return ''
      return (...args2) => {
        if(args2.length){
          return curryInner(...args, ...args2);
        }else{
          return fn(...args)
        }
      }
    };
  }
  function infiniteCurry(fn, args = []) {
    return (...newArgs) => 
      newArgs.length 
        ? infiniteCurry(fn, [...args, ...newArgs]) 
        : fn(...args);
  }
  
  const join = (...args) => {
     return args.join("_")
  }
  
  const curriedJoin = infiniteCurry(join)

  console.log(curriedJoin(1)(2)(3)(4)(5)())

  
