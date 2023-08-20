import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../app/features/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {

    dispatch(addTodo(input))
  }

  return (
    <div>
      <h3>TODO_APP</h3>
      <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a Todo...' />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>

  )
}

export default AddTodo