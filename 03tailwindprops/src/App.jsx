import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'pankaj',
    age:33
  }
  let myArr = [12,3,4]

  return (
    <>
    <div className='bg-red-500'>
    <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind test</h1>
    </div>
    <Card username='chi aur code' someObj={myObj} newarr={myArr}/>
    <Card/>

    </>
  )
}

export default App
