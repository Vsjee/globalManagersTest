import { FormEvent, useRef } from 'react';
import { FormWrapper } from '../../../../styles';

function FormZ() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currVal = inputRef.current?.value;
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='add todo' />
      <input type='submit' className='submit' />
    </FormWrapper>
  );
}
export default FormZ;
