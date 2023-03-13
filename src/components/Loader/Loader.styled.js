import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  z-index: 2;
  position: fixed;
  justify-content: center;
  top: 20px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
