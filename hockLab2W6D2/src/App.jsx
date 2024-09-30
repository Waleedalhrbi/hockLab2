import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImbCal from './combonents/ImbCal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImbCal></ImbCal>
    </>
  )
}

export default App
