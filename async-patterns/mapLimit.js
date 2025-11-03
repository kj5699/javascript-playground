/**
 * Read FAQs section on the left for more information on how to use the editor
**/
/** Do not delete or change any function name **/

function getUserById(id, callback) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200;
   
    setTimeout(() => {
      callback("User" + id)
    }, randomRequestTime);
  }
  
  function mapLimit(inputs, limit, iterateeFn, callback) {
  
    const results = [];
    let activeTask = 0;
    let currentIndex = 0;
    let completedTasks =0
  
  
    function processNext(){
      if (completedTasks === inputs.length ){
        return callback(results)
      }
      while (activeTask < limit && currentIndex < inputs.length) {
        const index = currentIndex;
        activeTask++
        iterateeFn(inputs[index], (value) => {
          results[index] = value;
          activeTask--;
          completedTasks++;
          processNext();
        })
        currentIndex++
        processNext()
      }
    }
    processNext();
  }
  
  mapLimit([1,2,3,4,5], 2, getUserById, (allResults) => {
    console.log('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
  })

class Promise{
  constructor(executor){
    this.state = 'pending'
    this.value = null;
    this.reason = null;
    this.successCallbacks = [];
    this.failureCallbacks = [];


    const resolve = (value) => {
      if(this.state === 'pending'){
        this.state = 'fulfilled';
        this.value = value
        this.successCallbacks.forEach(callback =>  callback(this.value));
      }
      
    }
    const reject = (reason) => {

    }

    executor (resolve, reject)

  }
}