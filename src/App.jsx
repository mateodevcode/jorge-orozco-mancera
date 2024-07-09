import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Acerca_de_mi from './pages/Acerca-de-mi'
import MisProyectosPage from './pages/MisProyectosPage'

function App() {

  return (
    <BrowserRouter basename="jorge-orozco-mancera">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mis-proyectos" element={<MisProyectosPage />} />
        <Route path="/acerca-de-mi" element={<Acerca_de_mi />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
