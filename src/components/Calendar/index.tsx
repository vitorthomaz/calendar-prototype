import React from 'react';

import { Card, MonthTable } from '../../components';

import { Container } from './styles';

const Calendar = () => {
  return (
    <Card>
      <Container>
        <p>Weather Details</p>
        <MonthTable />
      </Container>
    </Card>
  );
};

export default Calendar;
