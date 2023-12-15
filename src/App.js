import { useState } from 'react'
import "./App.css"

export default function App() {
  let [c, setc] = useState(0)
  let inc = () => {
    setc(c + 1)
  }
  let dec = () => {
    setc(c - 1)
  }
  let [c1, setc1] = useState(0)
  let ran = () => {
    setc1(Math.round(Math.random(c) * 12))
  }

  return (
    <div>
      <div className='div1'>


        <h1 onClick={dec} >-</h1>
        <h1 className='count'>{c}</h1>

        <h1 onClick={inc} >+</h1>
      </div>
      <div className='ran'>

        <h1 className='count'>{c1}</h1>
        <button onClick={ran}>Random</button>

      </div>
    </div>
  )
}
