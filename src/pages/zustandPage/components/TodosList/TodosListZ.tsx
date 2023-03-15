import { myZustandStore } from '../../../../stateManagers/zustand/zustandStore';
import { TodosListWrapper } from '../../../../styles';

function TodosListZ() {
  const [todos] = myZustandStore((state) => [state.todos]);

  return (
    <TodosListWrapper>
      <h3 className='sub'>Todos list</h3>
      <ul className='list'>
        {todos.map((todo, i) => {
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
export default TodosListZ;
