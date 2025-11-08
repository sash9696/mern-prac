



// understanding execution contexts
// var x = 10;
// function outer(){
//     var y = 20;
//     function inner(){
//         var z = 30
//         console.log(x + y + z)
//     }
//     inner()
// }

// outer()


//


// var message = 'hello';


// function greet(name){

//     return `${message} ${name}`

// }


// console.log(greet('John'));





// Hoisting

//variables, functions and classes all are hoisted

// console.log(a);
// var a = 10;

// x();

// function x(){

//     console.log(10)
// }


//throw error
// x();
// var x = function(){
//     console.log(10)
// };




//let const var
//let const var all are hosited

//hoisting

// console.log(a);
// var a = 10;

// console.log(a);
// let a = 10;
// console.log(a);


//temporal deadzone
//the time at which u cannot access variables declared using let and const is temporal deadzone



//scope

//var is function scope

// var a = 10;

// function x(){
//     var a = 20
// }
// x()
// console.log(a);



//let and const are blocked scope

// var a = 10;

// {
//     var a = 20
//     console.log(a);

// }

// console.log(a);

// block -> {}


//redeclare
//yes
// var a = 20;

// var a = 30;

// console.log(a)


//let and const no
// let a = 20;

// let a = 30;

// console.log(a)


//reassign

//yes
// var a = 10;

// a = 20;

//yes
// let a = 10;

// a = 20;

//no

// const a = 10;
// a = 20;
// Uncaught TypeError: Assignment to constant variable.



//attached to th global object (window)

// var globalVar = 10;

// let globalLet = 20;

// const globalConst = 30;


// console.log(window.globalVar)
// console.log(window.globalLet)
// console.log(window.globalConst)






// function test(){

//     if(true){
//         var x = 10
//     }

//     console.log(x)
// }

// test();


// function test(){

//     if(true){
//         let y= 20
//         const z= 30
//     }

//     console.log(y)
//     console.log(z)
// }

// test();



for(let i=0 ; i < 3 ; i++){

    setTimeout(() => {
        console.log(i);
    }, 1000)
}


