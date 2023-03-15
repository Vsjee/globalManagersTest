import styled from 'styled-components';

const TodosListWrapper = styled.section`
  display: grid;
  place-content: center;

  .sub {
    text-align: center;
  }

  .list {
    padding: 0.5rem 2rem;
    overflow: scroll;
    list-style: space-counter;
  }
`;

export default TodosListWrapper;
