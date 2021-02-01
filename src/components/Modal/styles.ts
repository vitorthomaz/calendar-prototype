import styled from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Background = styled.div<ContainerProps>`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.primary};

  border-radius: 8px;
  padding: 16px;
  width: 40%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  :hover,
  :focus {
    .colorable {
      fill: #000;
      transition: 0.3s;
    }
  }
`;
