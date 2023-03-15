import { create } from 'zustand';
import { ITodos } from '../../types';
import { localInitValues } from '../../utilities';

interface ITodoState {
  todos: ITodos[];
  addTodo: (textTodo: string) => void;
}

export const zustandKey = 'zustand';

export const myZustandStore = create<ITodoState>((set) => ({
  todos: localInitValues<[]>(zustandKey, []),
  addTodo: (textTodo: string) => {
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, task: textTodo, completed: false }],
    }));
  },
}));
