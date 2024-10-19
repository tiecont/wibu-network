import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RouterController from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='background'>
        <RouterController />
      </div>
    </>
  )
}

export default App
