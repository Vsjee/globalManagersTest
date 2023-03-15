import { FormEvent, useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { myZustandStore, zustandKey } from '../../../../stateManagers';
import { FormWrapper } from '../../../../styles';
import { ITodos } from '../../../../types';
import { addLocalStorage } from '../../../../utilities';

function FormZ() {
  const [todos, addTodo] = myZustandStore((state) => [state.todos, state.addTodo], shallow);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currVal: string | any = inputRef.current?.value;
    if (currVal !== '') {
      addTodo(currVal);
      addLocalStorage<ITodos[]>(zustandKey, todos);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default FormZ;
