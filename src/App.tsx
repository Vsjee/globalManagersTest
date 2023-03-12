import { lazy } from 'react';
import { Route } from 'react-router';
import { routes } from './models';
import { NotFoundRoute } from './utilities';

const Home = lazy(() => import('./pages/home/Home'));
const ReduxPage = lazy(() => import('./pages/reduxPage/ReduxPage'));

function App() {
  return (
    <div className='App'>
      <NotFoundRoute>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.REDUX} element={<ReduxPage />} />
      </NotFoundRoute>
    </div>
  );
}

export default App;
