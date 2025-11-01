const Timer = {
   timerID : 1 ,
   queue: [],

   setTimeout: function(cb, delay, ...args){
        let id= this.timerID++;
        this.queue.push({
            id: id,
            time: Date.now() + delay,
            cb: cb,
            args
        })
        this.queue.sort((a,b) => a -b )
        return id
   },
   clearTimeout: function(id){
    this.queue = this.queue.filter(a => a.id === id);
   }
}