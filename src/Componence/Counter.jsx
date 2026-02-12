
import './Counter.css'
import React from 'react'
import {useState} from 'react'

const counter = () => {
 
  const [count,setcount] = useState(0);

  return (
     <div className='counter-container'>
    <p id='para'>you have clicked {count} times</p>
       <button id='button' onClick={() => {setcount(count+1) }}>click me </button>
     </div>
  )
}

export default counter

