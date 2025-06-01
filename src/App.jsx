import { useState } from 'react'
import './App.css'

function App() {
  const [to, setTo] = useState("World");

  const handleClick = () => {
    setTo("Vercel");
  }

  return (
    <>
      Hello, <span onClick={handleClick}>{to}</span>!
    </>
  )
}

export default App
