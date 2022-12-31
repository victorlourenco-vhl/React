import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nome from './Nome'
import Saudacao from './Saudacao'

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <Nome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  )
}

export default App
