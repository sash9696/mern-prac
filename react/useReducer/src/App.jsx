import React, { useReducer } from 'react'
import Home from './Home'

//use reducer => for managing complex state

//

const initalCart = {items:[]};

//reducer is a pure function
//for same input it will give same out

//action is an object that describes what u want to do

function cartReducer(state, action){
  switch (action.type){
    case 'ADD_TO_CART':{
      //do something
      console.log({action})

      const item = action.payload;

      //check if the item already exists
      const existing = state.items.find((i) => i.id === item.id)


      //if it exists then we update the quantity

      if(existing){
        return {
          ...state,
          items: state.items.map((i) => i.id === item.id ? {...i, qty: i.qty + 1} : i)
        }
      }


      //else we add it as a new item with qty 1
     return {
      ...state,
      items:[...state.items, {...item, qty:1}]
     }
    }
    case 'DECREASE_QTY':{

      //do something

      const id = action.payload;

      const newItems = state.items.map((i) => (
        i.id === id ? {...i, qty:i.qty-1} : i
      ))

      //filter out those items whose quantity is > than 0

      const filteredItems = newItems.filter((item) => item.qty > 0)


      // return {
      //   ...state,
      //   items: filteredItems
      // }
      return {
        ...state,
        items: state.items.map((i) => (
          i.id === id ? {...i, qty:i.qty-1} : i
        )).filter((item) => item.qty > 0)
      }
    }
    case 'REMOVE_FROM_CART':{
      //do something
      const id = action.payload;
      return {
        ...state,
        items:state.items.filter(i => i.id !== id)
      }
    }
    case 'CLEAR_CART':{
      //do something
      return {items:[]}
    }
    default:
      return state;
  }

}

const addToCart = (item) => ({
  type : 'ADD_TO_CART',
  payload: item
})

function ShoppingCart(){

     const [state, dispatch]  = useReducer(cartReducer, initalCart);
     console.log({state});
     //dispatch an action
    const products = [
      {
        id:1, name:'Iphone', price: 60000
      },
      {
        id:2, name:'Mac', price: 80000
      }
    ];

  return(
    <div style={{padding:20}}>

      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{padding:10, margin:'10px 0', border:'1px solid'}}>
          <strong>{p.name}</strong>

          <button style={{marginLeft:10}} 
          
          onClick={() => dispatch(addToCart(p))}
          >Add to cart</button>
        </div>
      ))}

      <hr/>

      <h2 style={{marginTop:20}}>Your Cart</h2>


      {state.items.length === 0 && <p>No items yet</p>}

      {state.items.map((item) => (
        <div key={item.id} style={{
          display:'flex',
          gap:20,
          alignItems:'center',
          margin:'10px 0'
        }}>

          <strong>{item.name}</strong>
          <span>QTY: {item.qty}</span>

          <button
          onClick={() => dispatch({type:'DECREASE_QTY', payload:item.id})}
          >-</button>
          
          <button
          onClick={() => dispatch(addToCart(item))}
          >+</button>

          <button
            onClick={() => dispatch({type:'REMOVE_FROM_CART', payload:item.id})}
          >Remove</button>
          
        </div>
      ))}

      {state.items.length > 0 && (
        <button
        onClick={() => dispatch({type:'CLEAR_CART'})}
        >
          Clear Cart
        </button>
      )}


    </div>
  )
}


function App() {
  return (
    <div>
      <ShoppingCart />
    </div>
  )
}

export default App