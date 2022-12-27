import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SayMyName } from './SayManyName'
import { Pessoa } from './Pessoa'

function App() {

  const name = "João"

  return (
    <div className="App">
      <SayMyName name="Victor"></SayMyName>
      <SayMyName name={name}></SayMyName>
      <Pessoa nome="Victor" idade="18" profissao="Programador" url="https://via.placeholder.com/150"></Pessoa>
    </div>
  )
}

export default App
