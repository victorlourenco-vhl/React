import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Evento from './Evento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Teste</h1>
      <Evento/>
    </div>
  )
}

export default App
