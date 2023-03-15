import { FormEvent, useRef } from 'react';
import { addTodo } from '../../../../stateManagers/redux/todos/todosSlice';
import { useDispatch } from 'react-redux';
import FormWrapper from './FormWrapper.css';

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currVal = inputRef.current?.value;
    dispatch(addTodo({ task: currVal }));
    console.log(currVal);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default Form;
