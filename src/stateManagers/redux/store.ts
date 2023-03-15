import { configureStore } from '@reduxjs/toolkit';
import { ITodos } from '../../types';
import todosSlice from './todos/todosSlice';

export interface AppStore {
  todos: ITodos[];
}

export const myReduxStore = configureStore<AppStore>({
  reducer: {
    todos: todosSlice,
  },
});
