import { TodosListWrapper } from '../../../../styles';

function TodosListZ() {
  return (
    <TodosListWrapper>
      <h3 className='sub'>Todos list</h3>
      <ul className='list'>
        {/* {res.map((todo, i) => {
          return (
            <li key={i} className='list__item'>
              {todo.task}
            </li>
          );
        })} */}
      </ul>
    </TodosListWrapper>
  );
}
export default TodosListZ;
