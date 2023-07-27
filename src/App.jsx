import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
        <div className="die">5</div>
      </div>
      <button type="button">Roll</button>
    </>
  )
}

export default App
