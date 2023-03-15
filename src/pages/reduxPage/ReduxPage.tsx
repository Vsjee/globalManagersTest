import { Provider } from 'react-redux';
import { myReduxStore } from '../../stateManagers';
import Form from './components/Form/Form';
import TodosList from './components/TodosList/TodosList';

function ReduxPage() {
  return (
    <>
      <Provider store={myReduxStore}>
        <Form />
        <TodosList />
      </Provider>
    </>
  );
}
export default ReduxPage;
