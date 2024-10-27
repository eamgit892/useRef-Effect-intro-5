import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [state, setState] = useState([]);

  const firstName = useRef();
  const lastName  = useRef();
  const email     = useRef();

  const saveInputsToState = () => {
      setState([firstName.current.value, lastName.current.value, email.current.value])
  }
  
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
      <h1>Three inputs</h1>
      <p>by Yevhen Mozoliak</p>

      <div className="input-wrapper">
        <input ref={firstName} type="text" placeholder='First name'/>
        <input ref={lastName}  type="text" placeholder='Last name'/> 
        <input ref={email}     type="text" placeholder='email'/> 
        <button
        onClick={saveInputsToState}
        >Save to state</button>
      </div>
    </>
  )
}


