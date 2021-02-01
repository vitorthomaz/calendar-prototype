import styled from 'styled-components';

interface IContainer {
  background: string;
}

export const Container = styled.div<IContainer>`
  margin: 2px 0px;
  padding: 4px 2px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background: ${props => props.background};
  border-radius: 4px;
`;

export const Name = styled.span`
  margin: 0px 4px;
  color: black;
`;

export const Button = styled.button`
  float: right;
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
