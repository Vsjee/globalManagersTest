import { createSlice } from '@reduxjs/toolkit';
import { ITodos } from '../../../types';

const emptyInitialState: ITodos[] = [];

export const reduxKey = 'redux';

const todosSlice = createSlice({
  name: 'todos',
  initialState: localStorage.getItem(reduxKey)
    ? JSON.parse(localStorage.getItem(reduxKey) as string)
    : emptyInitialState,
  reducers: {
    addTodo: (state, payload) => {
      const newTodo = {
        id: payload.payload.id,
        task: payload.payload.task,
        completed: false,
      };
      return [...state, newTodo];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
