import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo} from '../app/features/todo/todoSlice'


const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  console.log("todos", todos)

  return (
    <div>
      <h4>Todos</h4>
      {todos.map(todo => (
        <div key={todo.id} style={{display: 'flex', gap: '20px'}}>
          <p>{todo.text}</p>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todos