import { Provider } from 'react-redux';
import { myReduxStore } from '../../stateManagers';
import FormR from './components/Form/FormR';
import TodosListR from './components/TodosList/TodosListR';

function ReduxPage() {
  return (
    <>
      <Provider store={myReduxStore}>
        <FormR />
        <TodosListR />
      </Provider>
    </>
  );
}
export default ReduxPage;
