import React, { FC } from 'react';

import { Container, Day, Month } from './styles';

interface DateDetailsProps {
  datetime: Date;
}

const DateDetails: FC<DateDetailsProps> = ({ datetime }) => {
  const day = datetime.getDate();
  const month = datetime
    .toLocaleString('default', { month: 'short' })
    .replace(/\./g, '');

  return (
    <Container>
      <Day>{day}</Day>
      <Month>{month}</Month>
    </Container>
  );
};

export default DateDetails;
