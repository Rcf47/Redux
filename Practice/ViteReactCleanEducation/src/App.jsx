import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from "react"


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className='grid justify-center content-center grid-cols-2 gap-2'>
      <div className='col-span-2'>{cash}</div>
      <button className='container xl: w-48 h-20' onClick={() => addCash(Number(prompt()))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
    </div>
  )
}

export default App
