import {ChangeEvent, useState} from 'react';

import logo from './logo.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';

function App() {
  const [inputValue, setInputValue] = useState<number | string>(0)
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(incremented())
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const convertedUserInput = parseInt(e.target.value, 10);
    if (e.target.value === '') {
      setInputValue('')
    } else if (Number.isNaN(convertedUserInput)) {
      e.preventDefault()
    } else {
      setInputValue(convertedUserInput)
    }
  }

  const handleAddAmountClick = () => {
    if (typeof inputValue === 'number') {
      dispatch(amountAdded(inputValue))
    }
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <section className="mainSection">
        <button type="button" onClick={handleClick} className="incrementButton">
          increment by 1
        </button>

        <section className="countButtonSection">
          <input type="text" value={inputValue} onChange={handleInputChange} />

          <button type="button" onClick={handleAddAmountClick}>
            add <span>"{inputValue}"</span> to count
          </button>
        </section>

        <div className="result">Count is: {count}</div>
      </section>
    </div>
  )
}

export default App
