import { useAtom } from 'jotai/react';
import { FormEvent, useRef } from 'react';
import { jotaiKey, myJotaiStore, todos } from '../../../../stateManagers';
import { FormWrapper } from '../../../../styles';
import { ITodos } from '../../../../types';
import { addLocalStorage } from '../../../../utilities';

function FormJ() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo] = useAtom(todos);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currVal: string | any = inputRef.current?.value;
    if (currVal !== '') {
      const newTodo = {
        id: todo.length + 1,
        task: currVal,
        completed: false,
      };

      myJotaiStore.set(todos, [...todo, newTodo]);

      addLocalStorage<ITodos[]>(jotaiKey, [...todo, newTodo]);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default FormJ;
