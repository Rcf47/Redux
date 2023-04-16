import { useDispatch, useSelector } from 'react-redux'


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
      <button className='w-48 h-20 bg-cyan-500 border-2 border-solid text-indigo-600' onClick={() => addCash(Number(prompt()))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
    </div>
  )
}

export default App
