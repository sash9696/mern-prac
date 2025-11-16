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
const [posts, setPosts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([])
const [error, setError] = useState(null);

const [loading, setLoading] = useState(true);


console.log(posts)

// useEffect(() => {

//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => setPosts(data))
//     .catch((err) => console.error(err))

// }, [])


useEffect(() => {


  async function loadPosts() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      const data = await response.json();

      setPosts(data)
      
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
  }

  loadPosts();

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((data) => setPosts(data))
  //   .catch((err) => console.error(err))

}, [])



//derive the filtered prductts uing existing state?

   const filteredPosts =  posts.filter(p => (
      p.title.toLowerCase().includes(search.toLowerCase())
    ))



    if(loading) return <h2>Loading Products...</h2>
    if(error)  return <h2>Error: {error}</h2>

  return (
    <div>

      <input 
        placeholder='Search Posts'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className='search'
      />

      <h1>Posts</h1>

      <ul>
        {filteredPosts.map((post) => {

          return (
            <li key={post.id} style={{border:'1px solid', padding:20, margin:10}}>
               <strong>{post.title}</strong>
               <p>{post.body}</p>
            </li>
          )
        })}
      </ul>



    </div>
  )
}

export default App