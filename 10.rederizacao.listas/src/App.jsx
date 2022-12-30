import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lista from './Lista'

function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <Lista itens={meusItens}/>
      <Lista itens={[1]}/>
    </div>
  )
}

export default App
