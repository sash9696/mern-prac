


// getData((result) => {
//     processData(result, (processed) => {
//         saveData(processed, () => {
//             console.log('Done')
//         })
//     })
// })

//callback hell
//inversion of control


//promises

//promise is an object represents eventual completion or failure of async operation

//3 states of promise

//pending
//fulfilled
//rejected 

//promises are immutable

//settled-> either fulfilled or rejected

//create a new promise

// const promise = new Promise(function(resolve, reject){

//     //async operation

//     const error = true

//     if(error){
//         reject('Something went wrong')
//     }

//     setTimeout(() => {
//         resolve("Data fetched successfully")
//     }, 1000)

// });

// console.log(promise)

// promise
//     .then((data) => console.log('Success:', data))
//     .catch((error) => console.error("Error: ", error))


//ordering some food online and food will arive later,
//js will keep on running other work while waiting that means 
//it does not block the main thread

// const orderFood = new Promise((resolve, reject) => {
//     console.log('Restaurant recieved your order...')

//     setTimeout(() => {
//         const foodReady = false;

//         if(foodReady){
//             resolve('Your order is ready')
//         }else{
//             reject("Sorry, we are closed")
//         }

//     }, 2000)
// })

// orderFood
//     .then((message) => {
//         console.log('Customer: ', message)
//     })
//     .catch((error) => {
//         console.log('Customer: ', error)

//     })
//     .finally(() => {
//         console.log('Order processed')
//     })

// console.log('Waiting for food')


//Multi step process, promise chaining

//take order
//prepare food
//deliver the food


// function takeOrder(){
//     return new Promise((resolve) => {
//         console.log('Taking your order...')
//         setTimeout(() => resolve('Order taken!'), 1000)
//     })
// }

// function prepareFood(orderStatus){
//     return new Promise((resolve) => {
//         console.log('Preparing your food...')
//         setTimeout(() => resolve(`${orderStatus} -> Food prepared`), 2000)
//     })
// }

// function deliverFood(prepStatus){
//     return new Promise((resolve,reject) => {
//         console.log('Delivering food...')
   
//         setTimeout(() => {

//             const delivered = false;
//             if(delivered){
//                 resolve(`${prepStatus} -> Food delivered`)

//             }else{
//                 reject("Delivery failed due to some technical issues")
//             }

//         }, 1500)
//     })
// }

//promise chaining

// takeOrder()
//     .then((orderStatus) => prepareFood(orderStatus))
//     .then((prepStatus) => deliverFood(prepStatus))
//     .then((finalStatus) =>console.log('Customer: ', finalStatus))
//     .catch((error) => console.error('Customer: ', error))
//     .then((error) => showErrorInUI(error))
//     .finally(() => console.log('process complete...'))


// console.log('script starts')

// setTimeout(() => console.log('settimeout'), 0)

// Promise.resolve('Promise 1 resolved')
//     .then((msg) => {
//         console.log(msg)
//     })
//     .then(() => {
//         console.log('chained msg')
//     })

// console.log('script end')



console.log('script starts')

setTimeout(() => console.log('settimeout'), 0)

const promise = new Promise((resolve) => {
    console.log('Inside promise (sync part)')
    setTimeout(()  => {
        console.log('settimeout callback inside promise')
        resolve('Promise resolved')
    }, 0)
})
promise.then((msg) => console.log('.then callback', msg))

setTimeout(()  => {
    console.log('outer settimeout callback')
}, 0)
console.log('script end')

//console
// 'script starts'
// 'Inside promise (sync part)'
// 'script end'
// 'settimeout'
// 'settimeout callback inside promise'
// .then callback Promise resolved
// 'outer settimeout callback'

// micro task queue - []
// macro task queue - []

//Promise methods
//promise.all
//promise.settled
//promise.race


//ex of fetch()
//facade or a two way function  -> 
//1. it initiates some task in the background
//2. immediately return an promise object 



