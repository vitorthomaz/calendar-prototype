import styled from 'styled-components';

export const Container = styled.section`
  margin: 8px;
  padding: 8px;
  border-radius: 8px;

  background: ${props => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
