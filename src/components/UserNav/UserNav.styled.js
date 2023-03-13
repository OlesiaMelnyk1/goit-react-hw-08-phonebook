import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Welcome = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.darkOlive};
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 200ms ease;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.darkOlive};
  background: ${p => p.theme.colors.sand};
  transition: ${p => p.theme.transition.cubicBezier};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.darkOlive};
    transform: ${p => p.theme.transform.scale};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 200ms ease;
  color: ${p => p.theme.colors.sand};
  transition: ${p => p.theme.transition.cubicBezier};
  text-decoration: none;

  // &.active {
  //   color: ${p => p.theme.colors.darkOlive};
  // }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.sand};
    transform: ${p => p.theme.transform.scale};
  }
`;
