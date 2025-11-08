

//HOF
//this
//polyfills

//takes another funciton as an argument
//returns a fucntion or does both

// function greet(name){
//   return `hello, ${name}`
// }

// //processUserInput is HOF
// function processUserInput(callback){
//   const name = 'John';
//   console.log(callback(name))
// }

// processUserInput(greet);

//inbuilt HOF's

// const numbers = [10,20,30,40,50];

// //map => transform each element

// const doubled = numbers.map(function(num, index, array){

//   // console.log({num, index, array})
//   return num*2;
// })

//filter => conditional, pick matching elememts

// const users = [
//   {name:'John', active:true},
//   {name:'peter', active:false},
//   {name:'A', active:false},
//   {name:'B', active:true}
// ]

// const activeUsers = users.filter((user, index, array) => user.active)


//reduce = > reduce it to a single value

//acc => accumulator
//curr => currentValue
// const orders = [100,200,300];

// const total = orders.reduce(function(acc, curr){

//   console.log({acc, curr})
//   acc = acc + curr;
//   return acc

// }, 0 )

// const users = [
//   {role:'admin'},
//   {role:'user'},
//   {role:'admin'},
// ]

// const grouped = users.reduce((acc, curr) => {

//   acc[curr.role] = (acc[curr.role] || 0) + 1

//   return acc

// },{})

// {admin:2, user:1} -> grouping


//polyfills

const numbers = [10,20,30,40,50];

// //map => transform each element


Array.prototype.myMap = function(callback){
  const newArray = [];

  console.log(this)

  for(let i = 0; i < this.length; i++){
    const newELement = callback(this[i], i, this);
    newArray.push(newELement)
  }


  return newArray

}

const doubled = numbers.myMap(function(num, index, array){

  // console.log({num, index, array})
  return num*2;
})



//map
//Array.prototype
//takes argument is callback function
//in callback function parameters => currentElement, index, array
//returns a new array


//filter => conditional, pick matching elememts

// const users = [
//   {name:'John', active:true},
//   {name:'peter', active:false},
//   {name:'A', active:false},
//   {name:'B', active:true}
// ]

// const activeUsers = users.filter((user, index, array) => user.active)




const users = [
  {name:'John', active:true},
  {name:'peter', active:false},
  {name:'A', active:false},
  {name:'B', active:true}
]

Array.prototype.myFilter = function(callback){

  const result = [];

  for(let  i =0 ;  i < this.length; i++){

    if(callback(this[i], i, this)){
      result.push(this[i])
    }
  }
  return result;


}

const activeUsers = users.myFilter((user, index, array) => user.active)


//myFilter
//Array.prototype
//it takes a callback and callback takes element, index, array
//returns a new array
//loop through each lement
// if callback() is true then we push in the new array

// const users = [
//   {name:'John', active:true},
//   {name:'B', active:true}
// ]