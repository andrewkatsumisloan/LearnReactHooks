import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
        <span style={{ color: todo.complete ? '#AAA' : '#000'}}> </span>
        <button> Toggle </button>
        <button> Delete </button>
    </div>
  )
}

export default Todo