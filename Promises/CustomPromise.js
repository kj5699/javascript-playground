const STATES = {
    fulfilled : "FULFILLED",
    pending : "PENDING",
    rejected : "REJECTED"
}
class CustomPromise{

    constructor(executorFn){
        this.value = null
        this.error = null
        this.thenCallBacks = [];
        this.catchCallBacks = [];
        this.state = STATES.pending;

        const resolve = (val) => {
            if(this.state !== STATES.pending) return
            if (val instanceof CustomPromise){
                return val.then(resolve, reject)
            }
            this.state = STATES.fulfilled
            this.value = val
            queueMicrotask(() => this.thenCallBacks.forEach(cb => cb(val))) ;
        }

        const reject = (err) =>{
            if(this.state !== STATES.pending) return
            this.state = STATES.rejected
            this.error = err
            queueMicrotask(() => this.catchCallBacks.forEach(cb => cb(err)));
        }
        try{
            executorFn(resolve, reject)
        }catch(err){
            reject(err)
        }
    }

    then (onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            const onHandlefulfilled = (value) => {
                try{
                    if(onFulfilled){
                        const result = onFulfilled(value)
                        if(result instanceof CustomPromise){
                            result.then(resolve, reject)
                        }else{
                            resolve(result)
                        }
                    }else{
                        resolve(value)
                    }
                }catch(err){
                    reject(err)
                }
            }
            const onHandleRejected = (error) => {
                try{
                    if(onRejected){
                        const result = onRejected(error)
                        resolve(result)
                    }else{
                        reject(error)
                    }
                    
                }catch(err){
                    reject(err)
                }
            }
            if(this.state === STATES.fulfilled){
                queueMicrotask(() => onHandlefulfilled(this.value))
            }else if(this.state === STATES.rejected ) {
                queueMicrotask(() => onHandleRejected(this.error))
            }else{
                this.thenCallBacks.push(onHandlefulfilled)
                this.catchCallBacks.push(onHandleRejected)
            }
        })
    }

    catch (onRejected) {
        return this.then(null, onRejected)
        // Can use beloe also
        // return new CustomPromise((resolve, reject) => {
        //     const onHandleRejected = (error) => {
        //         try{
        //             if(onRejected){
        //                 const result = onRejected(error)
        //                 resolve(result)
        //             }else{
        //                 reject(error)
        //             }
                    
        //         }catch(err){
        //             reject(err)
        //         }
        //     }
        //     if(this.state === STATES.rejected) {
        //         queueMicrotask(() => onHandleRejected(this.error))
        //     }else if(this.state === STATES.fulfilled){
        //         queueMicrotask(() => resolve(this.value))
        //     }else {
        //         this.catchCallBacks.push(onHandleRejected)
        //     }
        // })
    }

    static resolve(val) {
        return new CustomPromise(res => res(val))
    }
    static reject(val) {
        return new CustomPromise((_, rej) => rej(val))
    }
}