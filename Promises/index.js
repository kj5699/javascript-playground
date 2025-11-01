// Example 1 - how a promise is used
const GIHTUB_API = "https://api.github.com/users/octocat"

const user = fetch(GIHTUB_API);
// console.log("Promise obkect", user) // user;

// const value = user.then(function(data){
//     console.log('Data', data);
//     return data
// }).then((data) => data);
// console.log('value', value);


// Example 2 - How to create your own promise

// const cart = ['shoes', 'belt', 'socks'];

// createOrder(cart).then((orderId) => {
//     console.log('Order ID', orderId)
//     return proceedToPayment(orderId) // returnin g apromise is important for next then block to work.
// }).then(result=> console.log(result)).catch(err => console.log(err));

// // then keywork can only be attached to a promise


// function createOrder(cart) {
//     return new Promise(function(resolve, reject){
//         if (cart.length > 0){
//             setTimeout(()=>{
//                 resolve('12345')
//             }, 2000)
            
//         }else{
//             let err = new Error('No items in the cart');
//             reject(err)
//         }
//     })
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve, reject){
//         resolve('Payment Succesfull')
//     })
// }

// Promise APi
// let p1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve('P1 reolves')
//     }, 3000)
// })
// let p2 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve('P2 reolves')
//     }, 1000)
// })
let p3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('P3 reolves')
    }, 2000)
})
let p4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject('P4 rejects')
    }, 2000)
})

// Promise.all([p1, p2, p3]) // all gets settled after 3 sec . as 3 sec is max time take by a promise. returns an area
// Promise.all([p1, p2, p4]) // it gets rejected after 2 sec as p4 gets rejected/
// Promise.allSettled([p1, p3, p4]); // it still returns an array with two resolved promises and one resolved arrays.
// Promise.race([p1, p3, p4]) // Promise.return the first result (not an array of results). whether succes or failure
// Promise.race([p1,p2,p3])

// Promise.any([p1, p3, p4]) // Waits for first success , return first value


// If the function passed as handler to then returns a Promise, an equivalent Promise will be exposed to the subsequent then in the method chain. The below snippet simulates asynchronous code with the setTimeout function.


// Promise.resolve("foo")
//   // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
//   .then(
//     (string) =>
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           string += "bar";
//           resolve(string);
//         }, 1);
//       }),
//   )
//   // 2. receive "foobar", register a callback function to work on that string
//   // and print it to the console, but not before returning the unworked on
//   // string to the next then
//   .then((string) => {
//     setTimeout(() => {
//       string += "baz";
//       console.log(string); // foobarbaz
//     }, 1);
//     return string;
//   })
//   // 3. print helpful messages about how the code in this section will be run
//   // before the string is actually processed by the mocked asynchronous code in the
//   // previous then block.
//   .then((string) => {
//     console.log(
//       "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
//     );

//     // Note that `string` will not have the 'baz' bit of it at this point. This
//     // is because we mocked that to happen asynchronously with a setTimeout function
//     console.log(string); // foobar
//   });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz




///Async Await 

let p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('P1 reolves')
    }, 3000)
})
let p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('P2 reolves')
    }, 1000)
})

//Javascrit is syncronous , doesn't wait for anyone even for the hottest chicks on the planet.


// async function handlePromise(){             // function comes into call stck
//     console.log("before Promise Execution") // executes this line

//     let val1 = await p1;    // 1.  sees there is a unresolved promise. function removed from call stact, main thread unblockedked.
//     console.log('After Promise') // After first promise gets resolved function back in call, stack, synchronous exucutes the next few lines
//     console.log('Value', val1) // executes


//     let val2 = await p2; // again similar to 1 if promise is unresolved. if this promise gets reolved before p1. it will continue the execution otherwise habdle promsie is again removed from call stack until this promise resolves
//     console.log('After Promise 2') // similar step as above
//     console.log('Value', val2)

// }
// handlePromise();
// console.log('Outside asunc function'); // Executes ins ynchronous manner

const myPromiseAll = function(promises){
    return new Promise((resolve, reject) => {
        const resultArray = [];
        let index = 0 
        if (promises?.length === 0){
            return promises
        }
        const [firstPromsise, ...rest] = promises;
        firstPromsise.then(firstRes=>{
            firstRes
            myPromiseAll(promises.splice(0,1))
            resolve
        }).catch(err => reject(err))
    });
}
// const newPromiseAll =(promises)=>{
//     let results = []
//     return new Promise((resolve, reject)=>{
//        promises.forEach((promise,index) => {
//            promise.then(res=>{
//                 results.push(res);
//            }).catch(err=> reject(err));
//            if(index=== promises.length-1){
//                 resolve(results);
//            }
//        });
//     });
// }
newPromiseAll([p1,p2,p3, p4]).then(res => console.log(res)).catch(err => console.log(err));



