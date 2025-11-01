class Resource{
    constructor(id){
        this.id = id;
        this.lastUsed = Date.now();
    }
    updatelastUsed(){
        this.lastUsed = Date.now()
    }
}

class ResourcePool{
    constructor(creatorFunc , poolSize, evictionInterval ){
        this.creatorFunc = creatorFunc;
        this.pool = [];
        this.inUse = new Set();
        this.maxSize = poolSize;
    }
    acquire(){
        try{
            let resource ;
            if(this.pool.size > 0){
                resource = this.pool.pop();
                resource.lastUsed = Date.now()
            }else if(this.inUse.size < this.maxSize){
                resource = this.creatorFunc();
                resource.lastUsed = Date.now()
            }else{
                throw new Error("No Resource left");
            }
        }catch(err){
            console.log('Error', err)
        }
    }
    release(resource){
        if(this.inUse.has(resource)){
            this.inUse.delete(resource);
            this.pool.push(resource);
        }else {
            throw new Error("Resource not recognized or not in use.");
        }
    }

    manuallyEvict(resource){
        if(this.inUse.has(resource)){
            this.inUse.delete(resource);
            this.pool.push(resource);
        }
    }


    startEvictionTimer(){

    }
    stopEvictionTimer(){

    }

}