import React, { createContext, useContext } from 'react'

//create the context

//use the provider component to provide the data to the tree 

//use consumer component to consume data


const UserContext = createContext();

console.log({UserContext})

function User3(){

  const user  = useContext(UserContext);

  return (
    <div>
      {/* <UserContext.Consumer>
        {(value) => (
          <h1>Hello {value}</h1>
        )}
      </UserContext.Consumer> */}
       <h1>Hello {user}</h1>
     
    </div>
  )
}

function User2(){

  return (
    <div>
      <User3/>
    </div>
  )
}


function User1(){

  return (
    <div>
      <User2/>
    </div>
  )
}


function User(){

  return (
    <div>
      <User1/>
    </div>
  )
}





function App() {
  return (
    <div>
      <UserContext.Provider value='Peter'>
        <User/>
      </UserContext.Provider>
   
      </div>
  )
}

export default App