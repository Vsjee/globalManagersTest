import { Link } from 'react-router-dom';
import { routes } from '../../models';
import NavBarWrapper from './NavBarWrapper.css';

function NavBar() {
  return (
    <NavBarWrapper>
      <h2 className='home'>
        <Link to={routes.HOME} className='link'>
          Home
        </Link>
      </h2>
      <ul className='list'>
        <li className='list__item'>
          <Link to={routes.REDUX} className='list__item link'>
            Redux
          </Link>
        </li>
        <li className='list__item'>
          <Link to={routes.ZUSTAND} className='list__item link'>
            Zustand
          </Link>
        </li>
        <li className='list__item'>
          <Link to={routes.JOTAI} className='list__item link'>
            Jotai
          </Link>
        </li>
      </ul>
    </NavBarWrapper>
  );
}

export default NavBar;
