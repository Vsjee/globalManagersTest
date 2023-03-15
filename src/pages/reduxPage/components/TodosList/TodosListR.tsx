import { useSelector } from 'react-redux';
import { AppStore } from '../../../../stateManagers';
import { TodosListWrapper } from '../../../../styles';

function TodosListR() {
  const res = useSelector((state: AppStore) => state.todos);

  return (
    <TodosListWrapper>
      <h3 className='sub'>Todos list</h3>
      <ul className='list'>
        {res.map((todo, i) => {
          return (
            <li key={i} className='list__item'>
              {todo.task}
            </li>
          );
        })}
      </ul>
    </TodosListWrapper>
  );
}
export default TodosListR;
