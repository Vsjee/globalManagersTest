import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  input {
    width: 300px;
    padding: 0.5rem;
  }

  .submit {
    cursor: pointer;
    width: 100px;
  }
`;

export default FormWrapper;
