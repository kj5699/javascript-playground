// Call Usage
function getPersonDetail(result){
   console.log(`${this.name} from  ${this.city} , ${this.state} -  ${result}`  )
}
const person1 = {
    name: 'ABC',
    city: 'ranchi',
    state: 'Jharkhand'
}
// getPersonDetail.call(person1, 'Pass');
let person2 = function(){
    let name = 'fsjklfsdjlk';
    let city ='dskfljdskl'
};
getPersonDetail.call(person2, 'Fail');
const newPersonalizedFunc = getPersonDetail.bind(person1, 'Pass');
newPersonalizedFunc();

Function.prototype.myCall = function(context, ...args){
        Object.assign(context,{'getPersonalizedDetail': this});
        context.getPersonalizedDetail(...args);
}
// getPersonDetail.myCall(person2,'Pass');

// Function Prototype
// console.log(newPersonalizedFunc.__proto__)

Function.prototype.myBind = function(context, ...args){
    let currentFunc = this;
    return function(){
        const newName = currentFunc.__name__
        Object.assign(context, { newName : currentFunc} )
        context.newName(...args);
    }
}
const newPersonalizedFuncMyBind = getPersonDetail.myBind(person1, 'Pass');
newPersonalizedFuncMyBind();