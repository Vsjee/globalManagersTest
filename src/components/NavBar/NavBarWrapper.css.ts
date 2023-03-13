import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;

  .link {
    color: white;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
      color: greenyellow;
    }
  }
`;

export default NavBarWrapper;
