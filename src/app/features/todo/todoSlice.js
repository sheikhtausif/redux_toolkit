import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: []
}


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        status: false
      }
      state.todos.push(todo)  // First Way
      // state.todos = [...state.todos, todo] // Second Way
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const {addTodo, removeTodo} = todosSlice.actions
export const todoReducer = todosSlice.reducer
// export default todosSlice.reducer