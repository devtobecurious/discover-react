import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {EmptyNote} from './Buttons/EmptyNote'
import { TryToConnect } from './TryToConnect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmptyNote></EmptyNote>
      <TryToConnect></TryToConnect>
    </>
  )
}

export default App
