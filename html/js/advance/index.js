

//fetching the data (5 secs)

//asynchronous programming

//long running tasks to happen in background

//should not wait for slow task. Instead continue executiong other code and 
//when the slow task finishes come back and handle its result



// function x(callback){

//     console.log(10)
//     callback();
// }


// function y(){
//     console.log(20)

// }

// x(y)


// console.log('hello world')

// function runForOneSec(){
//     const start = Date.now();
//     while(Date.now() - start < 2000){
//         //keep on running
//     }

//     console.log('running')
// }

// setTimeout(function(){
//     console.log('timeout called')
// }, 0)

// runForOneSec();
// console.log('end')





//asynchronous

//callbacks

// function getUser(callback){
//     setTimeout(() => {
//         console.log('Fetched user data')
//         callback()
//     }, 1500)
// }
// function getPosts(callback){
//     setTimeout(() => {
//         console.log('Fetched posts')
//         callback()
//     }, 1000)
// }

// function getComments(callback){
//     setTimeout(() => {
//         console.log('Fetched comments')
//         callback()
//     }, 500)
// }
// getUser(() => {
//     getPosts(() => {
//         getComments(() => {
//             console.log('All data fetched')
//         })
//     })
// })

//problems
//it is hard to maintain Callback hell
//inversion of control


//promises


function getUser(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Fetched user data')
            resolve()
        }, 1500)
    })
   
}

function getPosts(){

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Fetched posts')
            resolve()
        }, 1000)
    })

}

function getComments(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Fetched comments')
            resolve()
        }, 500)
    })

}

// getUser()
//     .then(() => getPosts())
//     .then(() => getComments())
//     .then(() => console.log('All data fetched')) //the function runs only once

//promise hells in case of nested promisees


//async await


async function fetchAllData() {
    await getUser();
    await getPosts();
    await getComments()
    console.log('All data fetched')
}

//more elegant way
//feels like synchronous

console.log(fetchAllData());