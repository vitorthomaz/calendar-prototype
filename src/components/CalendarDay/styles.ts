import { ReactNode } from 'react';
import styled from 'styled-components';

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

export const DateIndicator = styled.span<DateIndicatorProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color || '#000'};
  width: 100%;

  flex-shrink: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  justify-content: center;
`;
