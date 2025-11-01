function pipe(...fn){
    return function (val){
        let result = fn.reduce((prevVal, curfunc )=>{
            return curfunc(prevVal)
        }, val);
        return result
    }
}