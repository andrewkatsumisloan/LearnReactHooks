import React from 'react'
import { useReducer, useState } from 'react'

import Todo from './Todo.js'

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todo, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todo, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO: 

  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }

}

const LearnReducer = () => {
  // Takes two arguements, state and action
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todo)
  return (
    <div> 
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}> 
        </input>
      </form>
      {todos.map(todo => {
        return <Todo key={todo} todo={todo} />})}
    </div>


  )
}

export default LearnReducer