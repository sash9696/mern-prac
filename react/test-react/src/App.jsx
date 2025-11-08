import './App.css'

import { useState } from 'react';



//state -> useState()

function Counter(){
  let [count, setCount] =  useState(0);

  console.log(`Counter rendered ${count} times`)

  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={function(){
       
       debugger
        setCount(count + 1)

      }}>Increment</button>
    </div>
    
  )
}


function App(){

  const containerStyle = {display:'grid', placeItems:'center', marginTop:'100px'}
  console.log(`App rendered`)
  return (
    <div style={containerStyle}>
      <Counter />
    </div>
  )
}

export default App