import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderElement = styled.header`
  padding: 30px 0;
  background: ${p => p.theme.colors.olive};
  box-shadow: ${p => p.theme.shadows.regular};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 1030px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  transition: color 200ms ease;
  color: ${p => p.theme.colors.darkOlive};
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.sand};
  }
  &.active h1 {
    color: ${p => p.theme.colors.sand};
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.sand};
  }
  &:hover h1,
  &:focus h1 {
    color: ${p => p.theme.colors.sand};
  }
`;

export const ApplicationName = styled.h1`
  transition: color 200ms ease;
  font-size: 48px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkOlive};
`;

export const HeaderBar = styled.ul`
  display: flex;
  margin-right: 40px;

  @media (min-width: 320px) {
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    gap: 40px;
  }
`;
