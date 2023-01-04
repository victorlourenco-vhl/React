import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Contato from './components/Contato'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App