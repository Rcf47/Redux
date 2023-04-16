import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className='button__wrapper' >
      <div className='button__info'>
        {cash}
      </div>
      <button className='button' onClick={() => addCash(Number(prompt()))}>Add cash</button>
      <button className='button' onClick={() => getCash(Number(prompt()))}>Get cash</button>
    </div>
  )
}

export default App
