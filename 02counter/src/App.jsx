import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
// let counter = 15

const addValue = () => {
// setCounter(counter+1) //if we do this 4 times it only gets updated one times coz fiver send in the bunch, to do it 4 times we need to do below approach
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  
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
