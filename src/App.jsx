import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './App.css'
import Die from './Die'

function App() {
  const [dice, setDice] = useState(rollAllNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameNumber = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameNumber) {
      setTenzies(true)
    }
  }, [dice])

  function randomNum(max) {
    return Math.ceil(Math.random() * max)
  }

  function rollAllNewDice() {
    const rolls = []
    for (let i = 0; i < 10; i += 1) {
      rolls.push({
        id: nanoid(),
        value: randomNum(6),
        isHeld: false,
      })
    }
    return rolls
  }

  function holdDie(id) {
    if (tenzies) return
    setDice((oldDice) =>
      oldDice.map((oldDie) =>
        oldDie.id === id ? { ...oldDie, isHeld: !oldDie.isHeld } : oldDie
      )
    )
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(rollAllNewDice())
    } else {
      setDice((oldDice) =>
        oldDice.map((oldDie) =>
          oldDie.isHeld
            ? oldDie
            : {
                ...oldDie,
                value: randomNum(6),
              }
        )
      )
    }
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      holdDie={holdDie}
      value={die.value}
      id={die.id}
      isHeld={die.isHeld}
    />
  ))

  return (
    <>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">{diceElements}</div>
      <button type="button" onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </>
  )
}

export default App
