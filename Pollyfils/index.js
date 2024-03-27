// This file has definition various pollyfills

// debounce
function debounce(cb, delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            cb(...args)
        },delay);
    };
};

// throttle
function throttle(cb, delay){
    let shouldWait;
    let waitingArgs;
    let timeoutFunc = ()=>{
        if(!waitingArgs){
            shouldWait = false
        }else{
            cb(...waitingArgs)
            shouldWait = true
            setTimeout(timeoutFunc, delay)
        }
    }
    return function(...args){
        if(shouldWait){
            waitingArgs = args
            return
        }
        cb(...args);
        shouldWait = true
        setTimeout(timeoutFunc, delay)
    }

}

// Promise
function myPromise(executor){
    let onResolve
    let onReject
    let isCalled = false;
    let value;
    let err;
    let isFulfilled = false;
    let isRejected = false;

    function resolve(val){
        value = val;
        isFulfilled = true
        if (typeof onResolve === 'function' && !isCalled){
            onResolve(val);
            isCalled = true;
        }

    }
    function reject(val){
        err = val
        isRejected = true
        if (typeof onReject === 'function' && !isCalled){
            onReject(val);
            isCalled = true;
        }
    }
    this.then = function(thenHandler){
        onResolve = thenHandler;
        if (isFulfilled){
            onResolve(value);
            isCalled = true;
        }
        return this
    }
    this.catch = function(catchHandler){
        onReject = catchHandler;
        if (isRejected){
            onReject(value)
            isCalled = true
        }
        return this;
    }
    executor(resolve, reject);
}

// Promise.all
Promise.prototype.myPromiseAll = function(promises){
    return new Promise((resolve, reject) => {
        const resultArray = [];
        for (let i =0 ; i < promises.length ; i++){
            promises[i].then(res=> {resultArray[i] = res}).catch((err)=> reject(err))
            if(resultArray.length === promises.length){
                resolve(resultArray)
            }
        }
    });
}

// Promise.allSettled
Promise.prototype.myPromiseAllSettled = function(promises){
    return new Promise((resolve, reject) => {
        const resultArray = [];
        for (let i =0 ; i < promises.length ; i++){
            promises[i].then(res=> {resultArray[i] = res}).catch((err)=> resultArray[i] = err) 
        }
        if(resultArray.length === promises.length){
            resolve(resultArray)
        }
    });
}

// Promise.race

// call
Function.prototype.myCall = function(context, ...args){
    Object.assign(context,{'getPersonalizedDetail': this});
    context.getPersonalizedDetail(...args);
}

// Bind
Function.prototype.myBind = function(context, ...args){
    return function(...newArgs){
        const newName = this.__name__
        Object.assign(context, {newName: this })
        context.currentFunc(...args, ...newArgs)
    }
}

// map
Array.prototype.myMap = function(cb){
    let resultArr = [];
    for (let index = 0; index <this.length; index++){
        if (this.indexOf(this[index]) > -1){
            resultArr[index]= push(cb(this[index], index, this))
        }    
    }
    return resultArr
}

// reduce

Array.prototype.muReduce = function(cb, initialValue){
    let result = initialValue || undefined ;
    for (let index = 0; index <this.length; index++){
        if (this.indexOf(this[index]) > -1){
            result  = result ? cb(this[index]) : this[index]
        }    
    }
    return result
}

// forEach
Array.prototype.myForEach = function(cb){
    for (let index = 0; index <this.length; index++){
        if (this.indexOf(this[index]) > -1){
            cb(this[index], index, this)
        }    
    }
}

Array.prototype.myFlat = function (arr){
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)){
            result = result.concat(flatten(element));
        }else{
            result.push(element);
        }
    });
    return result;
}

// Object.flatten
const FlattenObject = (obj) => {
    var resultObj ={};
    for (let key in obj){
        let currentKey = key
        if (typeof obj[key] === 'object'){
             let result = FlattenObject(obj[key])
             for(k in result){
                 resultObj[`${currentKey}.${k}`] = result[k]
             }
        }else{
            resultObj[currentKey] = obj[key]
        }
    }
    return resultObj
} 
// const obj = {
//     a: 'jack',
//     b: {
//         c: 'sparrow',
//         d: {
//            e: 'hahaha'
//         }
//     }
// }

// Object.assign