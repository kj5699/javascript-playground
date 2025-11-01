class RateLimiter{
    constructor(maxCount, timeDuration){
        this.requests = {}
        this.maxCount = maxCount;
        this.timeDuration = timeDuration;
    }
    
    isAllowed(clientId){
        const timeInSecs = Math.floor(Date.now() /  1000);
        let lastTimeinSec = timeInSecs - 1;
        let recentRequests = this.requests[clientId].filter(item => item > lastTimeinSec);
        this.requests[clientId].push(timeInSecs)
        if(recentRequests.length > 100) {
            return false;
        }else{
            return true;
        }

    }
}
const limiter = new RateLimiter();

// Simulate requests from a client
const clientId = 'client1';
for (let i = 0; i < 110; i++) {
    console.log(`Request ${i + 1}: Allowed? ${limiter.isAllowed(clientId)}`);
}