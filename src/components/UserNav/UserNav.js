import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Welcome, LogOutButton, NavLinkStyled } from './UserNav.styled';

export const UserNav = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <li>
        <NavLinkStyled to="contacts">
          <span>Contacts</span>
        </NavLinkStyled>
      </li>
      <li>
        <Welcome>
          <span>Welcome, {user.name}!</span>
        </Welcome>
      </li>
      <li>
        <LogOutButton type="button" onClick={handleLogout}>
          <span> Log Out</span>
        </LogOutButton>
      </li>
    </>
  );
};
