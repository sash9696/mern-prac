
// js is dynamically or loosely  typed lang
// console.log('hello world')


//variables

//store the data or some info eg. cartInfo, orders


// let name = 'John';

// const year = 2025;

// var city = 'Delhi'


// data types

// primitive -> string, number , boolean, undefined , null, symbol, bigint

//non primitive  ->  object



// let message = 'hello';

// message = 23324;


// Number

// let num = 123;

// num = 12.345;

// console.log(num)

//special numeric values

// console.log(10/0);

// console.log(Infinity);


// console.log(-Infinity);


//NaN -> not a number

// console.log('Hello world'/ 10)

// console.log(NaN * 8)

// console.log(NaN ** 0) //exception



// BigInt

//numbers cannot represent integers greater than (2^53 - 1) and smaller than -(2^53 - 1)

//youtube views count
//microsecond precision values

// let bigInt = 1234567890123456789012345678901234567890n;

// console.log(typeof bigInt)

// console.log(typeof 10)
// console.log(typeof 'hello')

// String

// let message = 'hello';

// let message = "hello";

// `` -> entended functionality -> allows variables and expressions into the string

// let age = 20;
// let sentence = "My age is " + age;

// let sentence = `My age is ${age}`

// let sentence = `My age is ${10 + 20}`

// console.log(sentence)

// console.log("")

//type coercions
// console.log('1' + 1)
// console.log('1' * 5)


//boolean

// let isAdmin = true;

// console.log(4 > 2)


//null

//value unknown , nothing, empty

// let age = null;


//undefined

//value that is not assigned

// let age;

// let age  = 30;

// age = undefined; //not recommend


// symbols and obj



//conditionals


// let temp = 22;

// if(temp > 30) console.log('Too Hot');
// else console.log('Moderate')

// if(temp > 30){
//    console.log('Too Hot');
// } 
// else if(temp > 20){
//     console.log('Moderate')
// }
// else{
//     console.log('cold')
// }


// loops


// for(let i = 0; i <= 10; i++){
//     // console.log(i)
// }


// let n = 1;

// // while (n <= 5){
// //     console.log(n);
// //     n++;
// // }

// do{
//     console.log(n);
//     n++;
// }while (n <= 5)


//functions

//functional declaration

// function greet(name,age){
//     console.log(`Hello ${name} and my age is ${age}`)
// }

// //call or invoke a function
// greet('John', 20);
// greet('Peter', 10);


// function add(a,b=0){

//     return a + b
// }

// console.log(add(10,20));

// console.log(add(10));



//arrays


// let arr = [];

// let arr1 = new Array();


// let cart = ['iphone', 'laptop', 'tshirt'];

// console.log(cart[0])

// array methods

// cart.push('earphones') //add end
// cart.pop() //remove end

// cart.shift() //remove start
// cart.unshift("book") //add start

// cart[999] = 10;
// console.log(cart)

//Object

//represent entities
//key value pairs



// let obj = {};

// let obj1 = new Object();
//any data type
// let user = {
//     name: 'John',
//     age:30,
    
// }

// let student = {
//     name: 'John',
//     age:30,
//     address:{
//         city:'Mumbai',
//         state:'Maharashtra',
//         pincode:1233
//     },
//     subjects:['eng', 'javascript', 'python'],
//     greet(){
//         console.log(`Hi ${this.name}, welcome back`)
//     },
//     "likes chess": true
// }

// student.greet();
// console.log(student.name)
// console.log(student['age'])
// delete student.name

// console.log(student['likes chess'])



// let user = {};


// user.name = 'John';

// user['age'] = 20


// console.log(user)


// let user1={
//    name : 'John',
//    age: 20
// }

// let user2={
//     name : 'peter',
//     age: 30
//  }


// function createUser(name, age){

//     const newUser = {
//         name:name,
//         age:age
//     }

//     return newUser
// }

// function createUser(name, age){
//     return {
//         name,
//         age
//     }
// }

// let user1 = createUser("John", 30);
// let user2 = createUser("Peter", 20);



// let user={
//    name : 'John',
//    age: 20
// }


// for(let key in user ){
//     console.log(key)
//     console.log(user[key])
// }