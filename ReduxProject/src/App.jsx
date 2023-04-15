import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  return (
    <div className='button__wrapper' >
      <button className='button'>Add cash</button>
      <button className='button'>Get cash</button>
    </div>
  )
}

export default App
