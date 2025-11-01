// constructor
var Middleware = function() {
    this.isRunning = false
    this.queue = [];
   
  }
  
  var middleware = new Middleware();
  Middleware.prototype.use = function(cb){
        var context = this;
        var processNext = (context) => {
             this.isRunning = false;
             if(this.queue.length){
               var nextCb = this.queue.shift();
               nextCb.call(context, processNext )
             }
        }
        if(this.isRunning){
          this.queue.push(cb.bind(this));
        }else{
           this.isRunning = true;
           cb.call(context, () => processNext(context));
        }
        var context = this;
  }
  Middleware.prototype.go = function(cb){
        if(this.isRunning){
          this.queue.push(cb.bind(this));
        }else{
           this.isRunning = true;
           cb.call(this);
        }
  }
  middleware.use(function(next) {
    var self = this;
    setTimeout(function() {
      self.hook1 = true;
      next();
    }, 100);
  });
  
  middleware.use(function(next) {
    var self = this;
    setTimeout(function() {
      self.hook2 = false;
      next();
    }, 50);
  });
  
  middleware.go(function() {
    console.log(this.hook1); // true
    console.log(this.hook2); // true
  });