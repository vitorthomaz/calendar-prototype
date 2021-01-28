import React from 'react';
import styled from 'styled-components';

import Calendar from './pages/Calendar';

const App = () => {
  return (
    <Layout>
      <Calendar />
    </Layout>
  );
};

const Layout = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
