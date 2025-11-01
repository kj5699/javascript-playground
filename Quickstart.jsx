function debounce(cb, validity){
    let timer
    return function (...args){
        if (timer) clearTimeout(timer);
        cb(...args);
        timer = setTimeout(()=> {
            cb.call(this, ...args)
        }, validity)

    }
}

function throttle(cb , validity){
    let isWaiting = false;
    let waitingArgs = null;
    let timeoutFunction = () => {
        if(waitingArgs){
            cb.call(this , ...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunction, validity)
        }else{
            isWaiting = false
        }
    }
    
    return function(...args){
        if (isWaiting){
            waitingArgs = args
            return
        }
        isWaiting = true
        setTimeout(timeoutFunction,validity)
    }
}
