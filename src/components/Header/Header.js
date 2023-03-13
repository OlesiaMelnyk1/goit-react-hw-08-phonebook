import { Outlet } from 'react-router-dom';
import { FaAddressBook } from 'react-icons/fa';
import {
  ApplicationName,
  Nav,
  HeaderElement,
  HeaderBar,
  NavLinkStyled,
} from './Header.styled';

import { Container } from 'components/Container/Container.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderElement>
        <Container>
          <Nav>
            <NavLinkStyled to="/">
              <FaAddressBook size="80px" />
              <ApplicationName>PHONEBOOK</ApplicationName>
            </NavLinkStyled>
            <HeaderBar>{isLoggedIn ? <UserNav /> : <AuthNav />}</HeaderBar>
          </Nav>
        </Container>
      </HeaderElement>
      <Outlet />
    </>
  );
};
