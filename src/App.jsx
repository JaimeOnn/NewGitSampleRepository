import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bot from './components/bot'
import { CardB } from './components/bot'
import Welcome from './components/Welcome'
import SMPComp from './components/smpcomp'

import Keybord from './components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <SMPComp></SMPComp>

      {/* function components */}
      <Bot />

      {/* usable components */}
      <CardB>
        <p>TABANG MINATAY NI NGA REACT <br /> lisod kaayo T_T</p>
      </CardB>

      <h1>BULSHIT</h1>
      <Welcome />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
