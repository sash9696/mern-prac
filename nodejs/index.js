
//    const fs = require('fs')

//    const os = require('os')

const path = require('path')


//   fs.readFile('data.txt', 'utf-8', (err, data) => {

//     console.log(data)
//   })

// const fs = require('fs/promises')


// fs.readFile('data.txt')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })



// fs.writeFile('output.txt', "hello john!", (err) => {
//     console.log('File written')
// })


//deleting files

// fs.unlink('output.txt', (err) => {

//     if(err) return console.log('File not found')
//     console.log('Deleted')
// })


//create folder

// fs.mkdir()

//read folder contents

// fs.readdir()



// console.log('platform', os.platform())
// console.log('cpus' ,os.cpus())
// console.log('freemem', os.freemem())


// setTimeout(() => console.log('One Time'), 2000)

// setInterval(() => console.log('Repeating'), 1000)



//process

//a global object that gives info about the running node program

// console.log('PID:', process.pid)
// console.log('Platform:', process.platform)
// console.log('Node version:', process.version)


// console.log(process.env.PORT)



// gloal in Node js


// global.name = 'John'

// console.log(global.name)


//__dirname and __filename

// console.log(__dirname)
// console.log(__filename)


// const dataTxtFilePath = path.join(__dirname, "data.txt")

// console.log(dataTxtFilePath)