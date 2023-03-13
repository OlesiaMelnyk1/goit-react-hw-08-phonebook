import styled from 'styled-components';

export const LoginRegister = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkOlive};
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  width: 180px;
  padding: 16px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.blue};
  margin: 20px auto 0;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    box-shadow: ${p => p.theme.shadows.regular};
    transform: ${p => p.theme.transform.scale};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
  @media (min-width: 480px) {
    width: 440px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  line-height: ${p => p.theme.lineHeights.another};
  color: ${p => p.theme.colors.darkOlive};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const FormInput = styled.input`
  border-radius: ${p => p.theme.radii.normal};
  padding: 10px;
  border: ${p => p.theme.borders.normal};
  outline: transparent;

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadows.regular};
  }
`;

export const LoginSection = styled.section`
  margin: 32px auto;
  padding: 12px;
  background: ${p => p.theme.colors.sand};
  box-shadow: ${p => p.theme.shadows.regular};
  @media (min-width: 480px) {
    width: 440px;
  }
`;
