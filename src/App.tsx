import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <NavBar />
      <Outlet />
      {location.pathname === '/' ? <Home /> : null}
    </div>
  );
}

export default App;
