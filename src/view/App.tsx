import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/react.svg'
import './App.css'
import Menu from '../components/menu/menu'
import Workstation from '../components/workstation/workstation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Workstation />
      <Menu />
    </>
  )
}

export default App
