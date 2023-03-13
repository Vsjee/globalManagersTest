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
        <Link to={routes.REDUX} className='list__item link'>
          Redux
        </Link>
      </ul>
    </NavBarWrapper>
  );
}

export default NavBar;
