import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>this is Website</h2>
      <button className='btn btn-primary'>Button</button>
    </>
  )
}

export default App
