import React from 'react';

import { Card, CalendarDay } from '../../components';

import { Container, Grid, WeekdayCard } from './styles';

import { calculateDisplayableDates } from '../../utils/datetime';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Calendar = () => {
  const today = new Date(Date.now());
  const displayedDays = calculateDisplayableDates(today);

  return (
    <Card>
      <Container>
        <Grid>
          {weekdays.map(day => (
            <WeekdayCard key={day}>{day}</WeekdayCard>
          ))}
          {displayedDays.map((day, id) => (
            <CalendarDay key={id} day={day} />
          ))}
        </Grid>
      </Container>
    </Card>
  );
};

export default Calendar;
