class EventEmitter{
    constructor(){
        this.subscriptions = {};
    }
    subscribe (event, callback){
        if(subscriptions[event]){
            subscriptions[event].push(callback)
        }else{
            Object.assign(subscriptions, { [event] : [callback]})
        }
    }
    publish (event, data){
        console.log('Event', data, subscriptions);
        if(subscriptions[event] && Array.isArray(subscriptions[event])){
            subscriptions[event].forEach(cb => {
                return cb(data)
            })
        }
    }
}

const subscriber = new EventEmitter();
const subscriber2 = new EventEmitter();
const publisher = new EventEmitter();

subscriber.subscribe("message", (data)=>{
    console.log('This is a message to subscriber 1 from ' , data?.name);
});
subscriber2.subscribe("message", (data)=>{
    console.log('This is a message to subscriber 2 from ' , data?.name);
});

publisher.publish("message",  {name: "publisher 1"});

