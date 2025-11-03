/* const myPromiseAll = (promiseArr) => {

  let result = [];
  let completed = 0;
  return new Promise((resolve, reject)=>{
    promiseArr.forEach((promise, index) => {
      promise.then((value)=> {
        result[index] = value;
        completed ++;
        
      }).catch(err => {
        reject(err)
      }).finally(()=> {
        if(completed === promiseArr.length){
          resolve(result);
        }
      });
    });
  });
}

let p1 =  Promise.resolve(4);
let p2 = Promise.resolve(6);
let p3 = Promise.reject("error");
let p4 = new Promise((res, rej)=> {
  setTimeout(()=>{
    res(5)
  }, 2000);
})

myPromiseAll([p1, p2, p4]).then(console.log).catch(console.log);;


window.fetch() */

/* lots of lplaces this call is happening */



let fetchWithMaxLimit = (maxLimit = 5 ) => {
    let activeCalls = 0;
    const waitingArgs = [];
    
    const processNext = () => {
        if(waitingArgs.length > 0 && activeCalls < maxLimit){
          let {args, resolve, reject} = waitingArgs.shift();
          return fetchCall(...args).then(resolve).catch(reject)
        } 
    }
    const fetchCall = async (...args) => {
        try{
        activeCalls++;
        const result = await fetch(...args);
        return result
      }catch(err){
        throw err
      }finally{
        activeCalls--;
        processNext();
      }
    }
    return async  function modifiedFetch(...args){
      if(activeCalls < maxLimit){
          return fetchCall(...args);
      }else{
        return new Promise((res, rej) => {
            waitingArgs.push({args: args, resolve: res, reject: rej});
        })
      }
    }
  } 
  
    
  const fetchWithLimit = fetchWithMaxLimit(1);
  
  async function testFetch() {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://jsonplaceholder.typicode.com/posts/3',
      'https://jsonplaceholder.typicode.com/posts/4',
      'https://jsonplaceholder.typicode.com/posts/5',
    ];
  
    const promises = urls.map(url => fetchWithLimit(url));
    const results = await Promise.all(promises);
    console.log(results);
  }
  
  testFetch();