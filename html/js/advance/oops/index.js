

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
//using shared behaviour __proto__ link
// function createUser(name, score){

//     const user = Object.create(userMethods);
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



function CreateUser(name, score){

    this.name = name;
    this.score = score
}


const user1 = new CreateUser('John', 10);

//but now where do we put the shared methods or create a link



