import React from 'react';
import styled from 'styled-components';

import { Menu, Display } from '../components';

const Calendar = () => {
  return (
    <Container>
      <Menu />
      <Display />
    </Container>
  );
};

const Container = styled.div`
  background: ${props => props.theme.colors.primary};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Calendar;