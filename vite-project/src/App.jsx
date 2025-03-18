import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Número 1</p> <input type='text'></input>
      <p>Número 2</p> <input type='text'></input>

      <TextBox/>
    </>
  )
}

export default App
