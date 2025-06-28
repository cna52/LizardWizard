import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My React + Unity App</h1>
      <iframe
        src="/LizardWizard/index.html"
        width="960"
        height="600"
        style={{ border: "none" }}
        title="LizardWizard Game"
      ></iframe>
    </div>
  )
}

export default App
