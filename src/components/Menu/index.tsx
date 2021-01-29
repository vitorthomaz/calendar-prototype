import React from 'react';

import { Card } from '../../components';

import { Container } from './styles';

const Menu = () => {
  const handleAddButton = () => {};

  return (
    <Card>
      <Container>
        <button onClick={handleAddButton}>Add Reminder</button>
        <p>// Today Date</p>
        <p>// Reminder List</p>
      </Container>
    </Card>
  );
};

export default Menu;
