// Example 1 - how a promise is used
const GIHTUB_API = "https://api.github.com/users/octocat"

const user = fetch(GIHTUB_API);
console.log("Promise obkect", user) // user;

const value = user.then(function(data){
    console.log('Data', data);
    return data
}).then((data) => data);
console.log('value', value);


// Example 2 - How to create your own promise

const cart = ['shoes', 'belt', 'socks'];

createOrder(cart).then((orderId) => {
    console.log('Order ID', orderId)
    return proceedToPayment(orderId) // returnin g apromise is important for next then block to work.
}).then(result=> console.log(result)).catch(err => console.log(err));

// then keywork can only be attached to a promise


function createOrder(cart) {
    return new Promise(function(resolve, reject){
        if (cart.length > 0){
            setTimeout(()=>{
                resolve('12345')
            }, 2000)
            
        }else{
            let err = new Error('No items in the cart');
            reject(err)
        }
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve('Payment Succesfull')
    })
}

// Promise APi
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

Promise.all([p1, p2, p3]) // all gets settled after 3 sec . as 3 sec is max time take by a promise. returns an area
Promise.all([p1, p2, p4]) // it gets rejected after 2 sec as p4 gets rejected/
Promise.allSettled([p1, p3, p4]); // it still returns an array with two resolved promises and one resolved arrays.
Promise.race([p1, p3, p4]) // Promise.return the first result (not an array of results). whether succes or failure
Promise.race([p1,p2,p3])

Promise.any([p1, p3, p4]) // Waits for first success , return first value

