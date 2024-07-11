import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Acerca_de_mi from './pages/Acerca-de-mi'
import MisProyectosPage from './pages/MisProyectosPage'
import MisProyectosAntonella from './pages/Mis-proyectos-ayuca'
import MisProyectosAyuca from './pages/Mis-proyectos-ayuca'

function App() {

  return (
    <BrowserRouter basename="jorge-orozco-mancera">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mis-proyectos" element={<MisProyectosPage />} />
        <Route path="/mis-proyectos-antonella" element={<MisProyectosAntonella />} />
        <Route path="/mis-proyectos-ayuca" element={<MisProyectosAyuca />} />
        <Route path="/mis-proyectos-roca-vertical" element={<MisProyectosAntonella />} />
        <Route path="/acerca-de-mi" element={<Acerca_de_mi />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
