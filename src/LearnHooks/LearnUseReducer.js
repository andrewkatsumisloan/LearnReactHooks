import React from 'react'
import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function countReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      throw new Error('Unexpected action')
  }
}

const LearnReducer = () => {
  // Takes two arguements, state and action
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT})
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT})
  }

  return (
    <div> 
      <h1 className=''> Learning useReducer Hook </h1>
      <div>
        <button onClick={decrement}> - </button>
        <span> { state.count }</span>
        <button onClick={increment}> + </button>
      </div>
    </div>


  )
}

export default LearnReducer