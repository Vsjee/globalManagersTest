import { FormEvent, useRef } from 'react';
import { FormWrapper } from '../../../../styles';

function FormJ() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default FormJ;
