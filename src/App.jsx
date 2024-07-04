import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Mis_proyectos from './pages/Mis-proyectos'
import Acerca_de_mi from './pages/Acerca-de-mi'

function App() {

  return (
    <BrowserRouter basename="jorge-orozco-mancera">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mis-proyectos" element={<Mis_proyectos />} />
        <Route path="/acerca-de-mi" element={<Acerca_de_mi />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
