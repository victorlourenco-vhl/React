import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer/>
    </div>
  )
}

export default App
