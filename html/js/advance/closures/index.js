


// function createCounter(){

//     let count  = 0;

//     return function(){
//         count ++;
//         console.log(count)
//     }
// }


// const counter =  createCounter();

// counter();
// counter();


//closure -> combination of function and its lexical environent (the scope where its defined)

//the closure gives a function persistent  acess to variables from where it was created 
//not from where it was called


// const a = 10;

// function outer(){
//     const b = 20;

//     function inner(){
//         const c  = 30;
//         console.log(a,b,c)
//     }
//     return inner
// }

// outer()()




// function add(a){
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }

// // add(1)(2)(3)
// console.log(add(1)(2)(3)) // 6

// add(1)(2)(3)  //3
// add(1)(2)  //2
// add(1)  //1








// function add(a){

//     return function(b){

//         if(!b){
//             return a
//         }else{
//             return add(a + b);
//         }
//     }
// }


// function add(a){

//     return function(b){

//         return b ? add(a + b) : a;
//     }
// }
// //any number of arguments

// console.log(add(1)(2)(3)(4)())

// console.log(add(1)(2)(4)())

// console.log(add(1)(2)())

// console.log(add(1)()) //1



// console.log(add(1)(2)())

// add(3)() //3


function createCounter(){
    let count  = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    }
}

const counter = createCounter();

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getCount())
console.log(counter.count)