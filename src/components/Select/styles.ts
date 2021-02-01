import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;
`;

export const Label = styled.div`
  font-weight: bold;
`;

export const Select = styled.select`
  margin-left: 4px;
  border: none;
  border-bottom: 3px solid #aaa;
  border-radius: 2px;
  background: transparent;
  outline: none;
`;

export const Option = styled.option`
  background: ${props => props.theme.colors.pageBackground};
`;
