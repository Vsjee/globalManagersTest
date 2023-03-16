import { createStore } from 'jotai';
import { atom } from 'jotai/vanilla';
import { ITodos } from '../../types';
import { localInitValues } from '../../utilities';

export const myJotaiStore = createStore();

export const jotaiKey = 'jotai';

const initValues = localInitValues<ITodos[]>(jotaiKey, []);

export const todos = atom<ITodos[]>([...initValues]);
