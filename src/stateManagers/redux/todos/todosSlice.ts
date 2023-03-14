import { createSlice } from '@reduxjs/toolkit';
import { ITodos } from '../../../types';

const emptyInitialState: ITodos[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: emptyInitialState,
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
