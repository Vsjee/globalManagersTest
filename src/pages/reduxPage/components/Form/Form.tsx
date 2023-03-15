import { FormEvent, useRef } from 'react';
import { addTodo, reduxKey } from '../../../../stateManagers/redux/todos/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormWrapper from './FormWrapper.css';
import { ITodos } from '../../../../types';
import { AppStore } from '../../../../stateManagers';
import { addLocalStorage } from '../../../../utilities';

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const res = useSelector((state: AppStore) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currVal = inputRef.current?.value;
    dispatch(addTodo({ task: currVal }));

    addLocalStorage<ITodos[]>(reduxKey, res);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default Form;
