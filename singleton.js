function Counter(){
    console.log('this', this)
    this.count = 0
    this.increment = () => {
        this.count++;
    }
    this.decrement = () => {
        this.count--;
    }
}
// const counter = new Counter();
// const counter2  = new Counter()
// console.log(counter === counter2);

const counterSingleton = (function (){
    let instance;
    return {
        getInstance : ()=> {
            if(!instance){
                instance= new Counter()
            }
            return instance
        }
    }
})();
const counter = counterSingleton.getInstance();
const counter2  = counterSingleton.getInstance();
console.log(counter === counter2);


