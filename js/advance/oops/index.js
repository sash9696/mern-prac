//function programming

//OOPS => classes
// functions associated with their data is OOPS

// a game

// users

// const user1 = {
//     name:'John',
//     score: 10,
//     increment: function(){
//         this.score++
//     }
// }

// const user2 = {
//     name:'Peter',
//     score: 5,
//     increment: function(){
//         this.score++
//     }
// }

//solution1
//factory functions

//1 million users
// function createUser(name, score){
//     return {
//         name,
//         score,
//         increment: function(){
//             this.score++
//         }
//     }
// }

// const user1 = createUser('John', 10)
// const user2 = createUser('John', 5)

//easy to reuse
// for x million users it will create x million copies of increment

//ideally there should 1 copy

//solution2
//what if the functionality could be shared

//1 copy for x users
// const userMethods = {
//     increment(){
//         this.score++
//     },
//     login(){
//         console.log(`${this.name} logged in`)
//     }
// }
// //using shared behaviour __proto__ link
// function createUser(name, score){
//     // const user  = {};
//     const user = Object.create(userMethods);
//     // user.__proto__ = userMethods dont use it due to performance reason
//     console.log(name, user)
//     user.name = name;
//     user.score  = score;
//     return user
// }

// const user1 = createUser('John', 10)
// const user2 = createUser('Peter', 5)

//problem
//still some redudancy left like creating a user
//assign the key values pairs

// new keyword

//it automatically creates an empty object and assigns the object to this keyword
// and returns object
//solution3

// function CreateUser(name, score) {
//   this.name = name;
//   this.score = score;
// }

// CreateUser.prototype.increment = function () {
//   this.score++;
// };

// CreateUser.prototype.login = function () {
//   console.log(`${this.name} logged in`);
// };

// const user1 = new CreateUser("John", 10);

//but now where do we put the shared methods or create a link

// function sum(a,b){

//     const result = a + b;
//     return result
// }
// sum.prototype.result = 10

// console.log(sum.result)

//prototype is an empty object present in the object version of javascript

//solution4
//ES6 classes

class CreateUser {
 #age = 0;
  constructor(name, score, age) {
    this.name = name;
    this.score = score;
    this.#age = age
  }

  getAge(){
    return this.#age
  }

  increment() {
    this.score++;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
}

const user1 = new CreateUser('John', 10, 20);

console.log(user1.#age)

class BankAccount {
    #balance = 0; // Private field
  
    constructor(initialBalance) {
      if (initialBalance >= 0) {
        this.#balance = initialBalance;
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount(100);
  console.log(myAccount.getBalance()); // 100
  console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class