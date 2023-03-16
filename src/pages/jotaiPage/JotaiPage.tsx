import { Provider } from 'jotai/react';
import { myJotaiStore } from '../../stateManagers';
import FormJ from './components/Form/FormJ';
import TodosListJ from './components/TodosList/TodosListJ';

function JotaiPage() {
  return (
    <Provider store={myJotaiStore}>
      <FormJ />
      <TodosListJ />
    </Provider>
  );
}
export default JotaiPage;
