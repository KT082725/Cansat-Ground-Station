import { useState } from 'react'

import './App.css'
import SerialDataReader from './components/SerialDataReader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SerialDataReader/>
    </>
  )
}

export default App
