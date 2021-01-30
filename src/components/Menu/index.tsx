import React from 'react';

import { Card, DateDetails } from '../../components';

import { Container } from './styles';

const Menu = () => {
  const handleAddButton = () => {};

  const today = new Date(Date.now());

  return (
    <Card>
      <Container>
        <button onClick={handleAddButton}>Add Reminder</button>
        <DateDetails datetime={today} />
        <p>// Reminder List</p>
      </Container>
    </Card>
  );
};

export default Menu;
