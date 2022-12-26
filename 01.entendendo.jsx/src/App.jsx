import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const name = "Victor"
  const url = 'https://via.placeholder.com/150'
  

  return (
    <div>
      <img src={url} alt="" />
      <h1>Olá, {name}!</h1>
      <p>Alterando o JSX</p>
    </div>
  )
}

export default App
