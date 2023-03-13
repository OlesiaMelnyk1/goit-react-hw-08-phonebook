import { NavLinkAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <li>
        <NavLinkAuth to="login">
          <p>Login</p>
        </NavLinkAuth>
      </li>
      <li>
        <NavLinkAuth to="register">
          <p>Register</p>
        </NavLinkAuth>
      </li>
    </>
  );
};
