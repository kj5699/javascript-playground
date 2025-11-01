"use strict"
// console.log(this);  // global , window, etc

// // - This in function
// const func = function (){
//     // this value depend on strict/non stict mode
//     console.log(this)
// }
// // In not stict mode - this subsitution 'i.e if value of this is null or undefined it will be subsituted my the global object;

// // this value inside a function depends on how function is called;
// func(); // undefined(strict mode) , window(non strict)/Global
// // window

// // - This in object

// const obj = {
//     a: 'A',
//     b: 'B',
//     func : function(){
//         console.log(this.a , this.b)
//     }
// }
// obj.func();
// const obj2 = {
//     a: 'Aa',
//     b: 'Ba',
// }
// obj.func.call(obj2); // Aa, bb  This is called function borrowing.
// // THis is Arrow Function

// const arrowFunc =  () => console.log(this);
// arrowFunc();
// // Arrow function does not have thier own this binding. they take this of enclosing lexical envioroment. 
// // ie. this inclisede aroow function would have same value which it will
// //  have in it lexical environment in which arrow function exist

let obj3 = {
    func: ()=>{
        console.log(this)
    }
}
obj3.func()

// let obj4 = {
//     name: 'obj4',
//     func: function(){
//         console.log('This here is equl to this inside arrow func', this)
//         return () => console.log(this)
//     }
// }
// obj4.func()()
// function myName() {
//     this.name = "jatin"
//     this.method =  () => { console.log('abc', this)}
// }

// const name = new myName;
// console.log(name.method())


//
const objAsync = {
    value: 42,
    regularMethodAsync : function(){
        console.log("Regular method's this outside settimeout", this.value)
        setTimeout(function(){
            console.log("Regular method's this inside", this.value)
        }, 1000)
    },
    arrowMethodAsync : () => {
        console.log(console.log("Arrow method's this outside settimeout", this.value))
        setTimeout(()=>{
            console.log("Arrow method's this inside", this.value)
        }, 1000)
    },
    arrowMethodAsync2 : function(){
        console.log(console.log("Arrow method's this outside settimeout- 2", this.value))
        setTimeout(()=>{
            console.log("Arrow method's this inside-  2", this.value)
        }, 1000)
    }
}
objAsync.regularMethodAsync()
objAsync.arrowMethodAsync()// it is undefineds

objAsync.arrowMethodAsync2()

//Pointer about arrow function:

//  1. arrow function takes this of thier enclosing lexical environment
// 2 . arrow function this is assigned as soon as the function is created, 
//     not when the function is called, whereas normal function this depends on how it is called

const obj1  ={
    a: 1,
    print: function(){
        function innerPrint(){
            console.log("a > ", this.a)
        }
        innerPrint()
    }
}

const obj2  ={
    a: 1,
    print: function(){
        const innerPrint = () =>{
            console.log("a > ", this.a)
        }
        innerPrint();
    }
}
obj1.print() // this is undefined , because when inner print is called, it has no object assocaited to it so it refers to global objecr, which doesn't has a
obj2.print() // 1