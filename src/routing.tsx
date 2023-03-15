import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { routes } from './models';
import { ReduxPage } from './pages';
import { ZustandPage } from './pages/zustandPage';

export const router = createBrowserRouter([
  {
    path: `/${routes.HOME}`,
    element: <App />,
    children: [
      {
        path: `${routes.REDUX}`,
        element: <ReduxPage />,
      },
      {
        path: `${routes.ZUSTAND}`,
        element: <ZustandPage />,
      },
    ],
  },
]);
