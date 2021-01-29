import React from 'react';

import { Container, Grid, WeekdayCard, DayCard } from './styles';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const monthdays = Array.from(Array(31), (_, x) => x);

const MonthTable = () => {
  return (
    <Container>
      <Grid>
        {weekdays.map(day => (
          <WeekdayCard key={day}>{day}</WeekdayCard>
        ))}
        {monthdays.map(day => (
          <DayCard key={day}>{day}</DayCard>
        ))}
      </Grid>
    </Container>
  );
};

export default MonthTable;
