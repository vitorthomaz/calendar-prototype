import React, { useState } from 'react';

import { Card, CalendarDay, Modal } from '../../components';

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
  const [isVisible, setIsVisible] = useState(false);

  const changeModalVisibility = (visibility: boolean) =>
    setIsVisible(visibility);

  const today = new Date(Date.now());
  const displayedDays = calculateDisplayableDates(today);

  return (
    <Card>
      <Modal isVisible={isVisible} setIsVisible={changeModalVisibility} />
      <Container>
        <Grid>
          {weekdays.map(day => (
            <WeekdayCard key={day}>{day}</WeekdayCard>
          ))}
          {displayedDays.map((day, id) => (
            <CalendarDay
              key={id}
              day={day}
              showModal={() => changeModalVisibility(true)}
            />
          ))}
        </Grid>
      </Container>
    </Card>
  );
};

export default Calendar;
