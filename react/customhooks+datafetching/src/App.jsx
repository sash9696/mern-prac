import React, { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './useFetch';



function App() {


const [search, setSearch] = useState('');

 const  { data:posts, loading:loadingPosts, error:postsError } =  useFetch('https://jsonplaceholder.typicode.com/posts');

 const  { data:users, loading:loadingUsers, error:usersError } =  useFetch('https://jsonplaceholder.typicode.com/users');

console.log({posts,users})


   const filteredPosts =  posts?.filter(p => (
      p.title.toLowerCase().includes(search.toLowerCase())
    ))



    if(loadingPosts) return <h2>Loading Posts...</h2>
    if(postsError)  return <h2>Error: {postsError}</h2>

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