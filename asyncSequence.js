function createAsyncTask(){
    const value = Math.random()*10;
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(value< 5){
                resolve("Success")
            }else{
                reject("Failure")
            }
        }, 1000)
    })
}

const asyncTasks = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
]

function asyncParallel(tasks, callback){
    const results = [];
    const errors = [];
    const completed = 0

    tasks.forEach(task => {
        task.then(val=> results.push(val)).catch(err => errors.push(err)).finally(() => {
            completed++;
            if(completed === tasks.length){
                callback(results, errors)
            }
        })
    });
}
function asyncSeries(tasks, callback){
    const results = [];
    const errors = [];
    const completed = 0

    tasks.reduce((prev, task) => {
        return prev.finally().then(val=> results.push(val)).catch(err => errors.push(err)).finally(() => {
            completed++;
            if(completed === tasks.length){
                callback(results, errors)
            }
        })
    });
}