class PromiseScheduler{

	constructor(arrayPromises, configOption){
        this.promises = arrayPromises;
        this.isRunning = false;
        this.paused = false;
        this.currentIndex = configOption?.startIndex || 0 ;
        this.callback = configOption?.callbacks?.onCompleted || null;
        this.results = [];
        this.unexecutedTasks = Array.from({ length: arrayPromises.length }, (_, index) => index);
  }
  #executeCallback(){
  	if(typeof this.callback === "function" && this.results.length === this.promises.length  ){
        console.log('currentIndex', this.currentIndex, this.paused);
    	this.callback(this.results);
    }
  }
  
  async #executePromise(index){
  	try{
      	let func = this.promises[index];
        let result = func();
        if(result instanceof Promise){
      	result = await result;
        this.results[index] = result
        this.unexecutedTasks = this.unexecutedTasks.filter(item=> item !== index);
      }
      }catch(err){
      	console.error(`Promise at index ${index} rejected:`, err);
        this.rejectedTasks.push(index); 
      }
  }
  
  async run(){
    if (this.currentIndex >= this.promises.length || this.isRunning){
    	return
    }
    this.isRunning = true;
    this.paused = false;
    console.log('currentIndex', this.currentIndex);
    while(this.currentIndex <  this.promises.length && !this.paused){
      await this.#executePromise(this.currentIndex);
      this.currentIndex++;
    }
    this.isRunning = false
    this.#executeCallback()
  }
  async pause(){
  	this.paused = true
  }

  getState(){
  	return { status: this.paused? "paused" : this.isRunning? "in-progress" :"completed", unexecutedTasks: this.unexecutedTasks}
  }
  async runAllUnexecutedTask(){
  	if (this.getState().status === "in-progress" || this.unexecutedTasks.length === 0 ){
    	return
    }
    this.isRunning = true;
    this.paused=false;
    while (this.unexecutedTasks.length > 0 && !this.paused){
        this.currentIndex = this.unexecutedTasks[0];
    	await this.#executePromise(this.currentIndex);
    }
    this.isRunning = false;
    if(this.unexecutedTasks.length === 0) this.#executeCallback();
		
  }
}

const createPromise = (value, delay) => {
  return () => new Promise(resolve => {
    setTimeout(() => {
      console.log(`Resolved: ${value}`);
      resolve(value);
    }, delay);
  });
};

const promises = [
  createPromise("Task 1", 1000),
  createPromise("Task 2", 2000),
  createPromise("Task 3", 500),
  createPromise("Task 4", 1500)
];

const callback = (results) => {
  console.log("Callback called with results: ", results);
};

const configOptions1 = {
  startIndex : 2,
  callbacks: {
    onCompleted: callback
  }
}

const promiseSchedulor = new PromiseScheduler(promises, configOptions1);
console.log('Getting state - 0', promiseSchedulor.getState());

promiseSchedulor.run();

setTimeout(()=> {
    promiseSchedulor.pause();

}, 1500)
setTimeout(()=> {
    console.log('Getting state - 1', promiseSchedulor.getState());
}, 3000);
setTimeout(()=> {
    promiseSchedulor.run();
}, 4000);
setTimeout(()=> {
    console.log('Getting state - 2', promiseSchedulor.getState());
}, 4200);
setTimeout(()=> {
    promiseSchedulor.pause();

}, 4500);
setTimeout(()=> {
    console.log('Getting state - 3', promiseSchedulor.getState());
}, 5000);
setTimeout(()=> {
    promiseSchedulor.runAllUnexecutedTask();
}, 5500);
setTimeout(()=> {
    console.log('Getting state - 4', promiseSchedulor.getState());
}, 6000);
setTimeout(()=> {
    console.log('Getting state - 5', promiseSchedulor.getState());
}, 10000);