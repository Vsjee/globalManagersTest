import { useAtom } from 'jotai/react';
import { todos } from '../../../../stateManagers';
import { TodosListWrapper } from '../../../../styles';

function TodosListJ() {
  const [todo] = useAtom(todos);

  return (
    <TodosListWrapper>
      <h3 className='sub'>Todos list</h3>
      <ul className='list'>
        {todo.map((todo, i) => {
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
export default TodosListJ;
