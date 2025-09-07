import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bot from './components/bot'
import { CardB } from './components/bot'
import Welcome from './components/Welcome'
import SMPComp from './components/smpcomp'
import {AplyButton} from './components/bot'
import { Commentb } from './components/bot'
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

      {/* reusable components */}
      <AplyButton>
        Reusable Button
        using function components
      </AplyButton>
      
      {/* usable components */}
      <CardB>
        <h1>Usable Card using funcion components with CSS</h1>
      </CardB>

      <h1>STASH SAMPLE</h1>

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
      <Commentb>
        Add your Comment
      </Commentb>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
