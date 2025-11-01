let obj  = {
    name: 'Jatin',
    age : 25
}

const handler = {
    set: function(target, property, value){
        console.log(`${property} was changed from ${target[property]} to ${value}`)
        target[property] = value * 2;
        return 
    }
}
const newObj =  new Proxy(obj, handler);
newObj.age = 31;

console.log(obj);
console.log(newObj);


