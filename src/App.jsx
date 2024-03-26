import { useState } from 'react'

import './App.css'
import SerialDataReader from './components/SerialDataReader'
import RotatingCube from './components/Rocketmodel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SerialDataReader/>
      <h1>Rotating Cube</h1>
      <RotatingCube transparentBackground />

    </>
  )
}

export default App
