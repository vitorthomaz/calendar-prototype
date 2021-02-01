import styled from 'styled-components';
import theme from '../../styles/theme';

interface ContainerProps {
  background?: string;
}

interface DateIndicatorProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  grid-area: 'day';
  padding: 8px;
  border: 1.5px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.background || '#fff'};
`;

export const DateIndicator = styled.div<DateIndicatorProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color || '#000'};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 1;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  :hover,
  :focus {
    .colorable {
      fill: #3daaff;
      transition: 0.3s;
    }
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;
