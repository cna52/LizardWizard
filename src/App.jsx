import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <h1>Lizard Wizard</h1>
      <iframe
        src="/LizardWizard/index.html"
        width="1280"
        height="720"
        style={{ border: "none", display: "block", margin: "0 auto" }}
        title="LizardWizard"
      />
    </div>
  )
}

export default App
