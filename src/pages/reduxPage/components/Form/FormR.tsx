import { FormEvent, useRef } from 'react';
import { addTodo, reduxKey } from '../../../../stateManagers/redux/todos/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../../stateManagers';
import { addLocalStorage } from '../../../../utilities';
import { FormWrapper } from '../../../../styles';

function FormR() {
  const inputRef = useRef<HTMLInputElement>(null);
  const res = useSelector((state: AppStore) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currVal = inputRef.current?.value;
    if (currVal !== '') {
      dispatch(addTodo({ task: currVal }));
      addLocalStorage(reduxKey, [...res, { id: res.length + 1, task: currVal, completed: false }]);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default FormR;
