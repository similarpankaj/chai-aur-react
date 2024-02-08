import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
// let counter = 15

const addValue = () => {
  setCounter(counter+1)
  console.log('clicked',counter)
}

const removeValue = () => {
  if(counter>1)
  setCounter(counter-1)
}

  return (
  
    <>
    <h1>Chi aur react</h1>
    <h2>Counter value :{counter}</h2>
    <button 
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >remove vlaue</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
