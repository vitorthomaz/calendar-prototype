import React from 'react';
import styled from 'styled-components';

import { Menu, Calendar } from '../components';

const Home = () => {
  return (
    <Container>
      <Calendar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Home;
