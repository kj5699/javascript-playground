const circuitBreaker = (fn , mintimeDif, maxAllowedCount) => {
    let failedCount = 0
    let isClosed = false;
    let lastFailedTime =0

    return async function (...args){
        if(isClosed){
            if(mintimeDif > Date.now() - lastFailedTime){
                console.log('Service Unavailable')
                return
            }else{
                isClosed = false
                failedCount = 0
            }
        }
        try {
            const res = await fn.call(this, ...args);
            failedCount = 0
            return res

        }catch(err){
            failedCount++;
            lastFailedTime = Date.now();
            console.log('Error', err);
            if(failedCount >=maxAllowedCount){
                isClosed = true
            }
        }
    }
}

const apiCall = async (param) => {
    if (param === 'fail') throw new Error('API Call Failed');
    return `Success: ${param}`;
  };
  
  const protectedApiCall = circuitBreaker(apiCall, 3000, 3);
  
  (async () => {
    try {
      console.log(await protectedApiCall('success'));  // Success
      console.log(await protectedApiCall('fail'));     // Failure 1
      console.log(await protectedApiCall('fail'));     // Failure 2
      console.log(await protectedApiCall('fail'));     // Circuit opens
      console.log(await protectedApiCall('success'));  // Circuit still open
    } catch (err) {
      console.error('Final Error:', err.message);
    }
  })();