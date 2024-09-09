import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overlay from './animaciones/Overlay'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='contenedor'>
      <Overlay/>
      <Navbar/>
      hola
    </div>
  )
}

export default App
