export const debounce = (func, delay) =>{
    var timer;
    return function(...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(() =>func.call(this, ...args),delay)
    }
}

export const throttle = (func, delay) => {
    let isWaiting;
    let waitingArgs; 
    var timeoutFunc =  (context) =>{
        if(!waitingArgs){
            isWaiting = false
        }else{
            func.call(context, ...waitingArgs)
            isWaiting = true;
            waitingArgs = null
            setTimeout(() => timeoutFunc(context), delay)
        }
    }
    return function(...args){
        if (isWaiting){
            waitingArgs = args
            return
        }
        func.call(this, ...args)
        isWaiting = true
        setTimeout(() => timeoutFunc(this), delay, delay)
    }
}

export const myCall = function(context, ...args) {
    if (typeof context !== 'object' || context === null) {
        context = Object.create(null);
    }
    let uid = `function_${Math.random()*100}`;
    while(context.hasOwnProperty(uid)){
        uid = `function_${Math.random()*100}`;
    }
    Object.assign(context,{[uid] : this});
    let result = context[uid](...args);
    delete context[uid]
    return result
}
export const myApply = function(context, args) {
    if (typeof context !== 'object' || context === null) {
        context = Object.create(null);
    }
    let uid = `function_${Math.random()*100}`;
    while(context.hasOwnProperty(uid)){
        uid = `function_${Math.random()*100}`;
    }
    Object.assign(context,{[uid] : this});
    let result = context[uid](...args);
    delete context[uid]
    return result
}

export const myBind = function(context, ...args) {
    const oldContext = this;
    if (typeof context !== 'object' || context === null) {
        context = Object.create(null);
    }
    return function(...functionArgs){
        return oldContext.apply(context, [...args, ...functionArgs])
    }
}

export const once = function(cb, context) {
    let isCalled = false;
    let result 
    return function onlyOnceCb(...args){
        if(isCalled){
            return result
        }else{
            isCalled = true
            return result = cb(...args)
        }
    }
}

export const memoize = function(func, context){
    let cache = { }
    return function memoizedFunction (...args){
        let key = JSON.stringify(args);
        if (key in cache){
            return cache[key]
        }else{
            return cache[key]= func.apply(context, args);
        }
    }
}

export const MyFlat = function(){
    if(!Array.isArray(this)){
        throw new TypeError('Value is not an Err')
    }
    if(this.length === 0){
        return this
    }
    let result = []
    this.forEach(el => {
        if(this.indexOf(el) !== -1){
            if(typeof el ==='object' && Array.isArray(el) ){
                result = result.concat(el.MyFlat())
            }else{
                result.push(el)
            }
        }
    })
    return result
}

export const curry = function(cb) {
    return function curriedFunc(...args){
        if(args.length === cb.length){
            return cb(...args)
        }else{
            return curriedFunc.bind(this, ...args);
        }
    }
}

export const curryInfinite = function(cb) {
    let prevArgs =[];
    return function curriedFunc(...args){
        if(args.length === prevArgs.length){
            return cb(...args)
        }else{
            prevArgs = args;
            return curriedFunc.bind(this, ...args);
        }
    }
}

function CustomPromise(executor){

    let onResolve;
    let onReject;
    let isFulfilled = false , isRejected = true;
    let isHandled = false;
    let value;
    let error;
    
    function resolve(val) {
        if(!isFulfilled && !isHandled){
            value = val;
            isFulfilled = true
            if(typeof onResolve === 'function'){
                onResolve(val)
                isHandled = true
                
            }
        }else{
            return
        }
    }
    function reject(err) {
        if(!isRejected && !isHandled){
            value = val;
            isRejected = true
            if(typeof onReject === 'function'){
                onReject(val)
                isHandled = true
            }
        }else{
            return
        }
        
    }

    this.then = function (thenHandler){
        return new CustomPromise((resolve, resolve) => {
            onResolve = (val) =>{
                const result = thenHandler(val)
                resolve(result)
            } 
            if(isRejected && !isHandled){
                onResolve(value);
                isHandled = true;
            }
        })
    }
    this.catch = function (catchHandler){
        return new CustomPromise((resolve, resolve) => {
            onReject = (reason) => {
                const result = thenHandler(reason)
                reject(reason)
            };
            if(isRejected && !isHandled){
                onReject(error);
                isHandled = true
            }
        })
    }
    executor(resolve, reject)
}



