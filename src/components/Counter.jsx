'use client'
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

const handleClick=()=>{
  setCount(prev => prev + 1)
}

  return (
    <>
    <button onClick={handleClick} className='rounded-md bg-zinc-50 text-slate-800 py-4 px-6'>Clickeame {count}</button>
    </>
  )
}
export default Counter