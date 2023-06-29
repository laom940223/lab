import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Button type="primary">Button</Button>
  </div>
  )
}

export default App
