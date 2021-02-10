import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: [
    { id: 1, text: 'Sample 1', completed: false },
    { id: 2, text: 'Sample 2', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    deleteTodo: (state, action) => {
      // returning because we are saving a new array
      // that doesn't have the deleted item
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearTodos: (state) => {
      // returning because we are saving a new empty array
      return (state = []);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
  clearTodos,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
