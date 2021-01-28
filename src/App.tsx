import React from 'react';
import styled from 'styled-components';

import Home from './pages/Home';

const App = () => {
  return (
    <Layout>
      <Home />
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
