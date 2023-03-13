import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ReduxPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'reduxState',
        element: <ReduxPage />,
      },
    ],
  },
]);
