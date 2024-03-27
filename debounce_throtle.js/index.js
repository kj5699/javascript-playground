let inputElement = document.querySelector('.input');
const defaultText  = document.querySelector('.default');
const debounceText  = document.querySelector('.debounce');
const throttleText  = document.querySelector('.throttle');

function debounce(cb, delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{cb(args)}, delay)
    }
}
function throttle(cb, delay){
    let shouldWait = false
    let waitingArgs
    let timeoutFunc = ()=>{
        if (waitingArgs === null){
            shouldWait = false
        }else{
            cb(waitingArgs);
            shouldWait = true
            setTimeout(timeoutFunc, delay)
        }
    }

    return function(...args){
        if (shouldWait) {
            waitingArgs = args
            return
        }
        cb(args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}

const debounceTextUpdate = debounce ((text)=> {debounceText.textContent = text}, 1000);
const throttleTextUpdate = throttle ((text)=> {throttleText.textContent = text}, 1000);

inputElement.addEventListener('input', (e) => {
    defaultText.textContent = e.target.value;
    debounceTextUpdate(e.target.value);
    throttleTextUpdate(e.target.value)
});

