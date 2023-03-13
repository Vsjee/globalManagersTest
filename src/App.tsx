import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  let location = useLocation();

  return (
    <div className='App'>
      <NavBar />
      <Outlet />
      {location.pathname === '/' ? <Home /> : null}
    </div>
  );
}

export default App;
