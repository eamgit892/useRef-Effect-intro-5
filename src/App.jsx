import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ShowTime from './ShowTime'

export default function App() {

  const getTimeString = () => {
    let t = new Date();
    let hh = t.getHours(),
        mm = t.getMinutes(), 
        ss = t.getSeconds(); 

    return `${hh}:${mm}:${ss}`
  }

  const [time, setTime] = useState(getTimeString());

  useEffect(() => {
    let timer = setInterval(() => {
        setTime(getTimeString())
    }, 1000)
    return () => clearInterval(timer);
  });
  
  
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
      <h1>Changing props example</h1>
      <p>by Yevhen Mozoliak</p>

      <div className="input-wrapper">
        <p>{time}</p>
      </div>
      <ShowTime hours={time}/>
    </>
  )
}


