import { createBrowserRouter } from 'react-router-dom';
import { JotaiPage, ReduxPage, ZustandPage } from './pages';
import { routes } from './models';
import App from './App';

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
      {
        path: `${routes.JOTAI}`,
        element: <JotaiPage />,
      },
    ],
  },
]);
