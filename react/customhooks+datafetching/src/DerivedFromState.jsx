import React, { useEffect, useState } from 'react'
import './App.css'


//Derived from State

//any value or data that can be calculated from existing state or props
//it should not be stored in  a state
//but it should be computed whenever needed

const products = [
  {
    id: 1,
    name: 'Iphone',
    price: 60000
  },
  {
    id: 2,
    name: 'Mac',
    price: 80000
  },
  {
    id: 3,
    name: 'Apple Watch',
    price: 25000
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 20000
  },
  {
    id: 5,
    name: 'iPad Pro',
    price: 70000
  },
  {
    id: 6,
    name: 'MacBook Air',
    price: 95000
  },
  {
    id: 7,
    name: 'iMac',
    price: 120000
  },
  {
    id: 8,
    name: 'Apple TV',
    price: 15000
  }
];




function App() {


const [search, setSearch] = useState('');
// const [filteredProducts, setFilteredProducts] = useState([])

console.log(search)


//bad case
// useEffect(() => {

//   setFilteredProducts(
//     products.filter(p => (
//       p.name.toLowerCase().includes(search.toLowerCase())
//     ))
//   )

// }, [search])

//derive the filtered prductts uing existing state?

   const filteredProducts =  products.filter(p => (
      p.name.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <div>

      <input 
        placeholder='Search Products'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className='search'
      />

      <h1>Products</h1>

      <ul>
        {filteredProducts.map((product) => {

          return (
            <li key={product.id}>
               <strong>{product.name}</strong> - ₹{product.price}
            </li>
          )
        })}
      </ul>



    </div>
  )
}

export default App