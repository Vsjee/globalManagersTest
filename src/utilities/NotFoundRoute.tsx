import { Route, Routes } from 'react-router';

interface IRoutes {
  children: JSX.Element | JSX.Element[];
}

function NotFoundRoute({ children }: IRoutes) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>Route not found, try again.</h1>} />
    </Routes>
  );
}
export default NotFoundRoute;
