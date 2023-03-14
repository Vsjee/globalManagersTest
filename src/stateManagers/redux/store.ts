import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { ITodos } from '../../types';
import todosSlice from './todos/todosSlice';

interface AppStore {
  todos: ITodos[];
}

export const myStore = configureStore<AppStore>({
  reducer: {
    todos: todosSlice,
  },
});
