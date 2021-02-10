import { configureStore } from '@reduxjs/toolkit';
import { visibilityFilterReducer } from './visibilityFilterReducer';
import { todoReducer } from './todoReducer';

export const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
    visibilityFilterReducer: visibilityFilterReducer,
  },
});
