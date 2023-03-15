import { create } from 'zustand';
import { ITodos } from '../../types';

interface State {
  todos: ITodos[];
}

interface Actions {
  addTodo: (todo: State['todos']) => void;
}

export const myZustandStore = create<State & Actions>((set) => ({
  todos: [],
  addTodo: (todo) => set(() => ({ todos: todo })),
}));
