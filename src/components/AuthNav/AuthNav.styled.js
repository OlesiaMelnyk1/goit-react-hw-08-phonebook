import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkAuth = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 200ms ease;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: ${p => p.theme.transition.cubicBezier};
  // &.active {
  //   color: ${p => p.theme.colors.darkOlive};
  // }
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
