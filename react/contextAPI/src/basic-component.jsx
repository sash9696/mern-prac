import './App.css'

function Welcome({name}){

  // console.log('props', props)

  return (
    <h1>Hello {name}</h1>
  )
}
//props are just objects taht are used to pass data from parent component
// to child component and vice versa true
//one way binding
function App(){
  return (
    <div>
      <Welcome name='John' />
      <Welcome name='Peter'/>
      <Welcome name='A' />
      <Welcome name='B' />
    </div>
  )
}

export default App