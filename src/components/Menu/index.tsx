import React from 'react';
import { useDispatch } from 'react-redux';

import { Card, DateDetails, ReminderList } from '../../components';
import { createReminder } from '../../store/actions/reminders';

import { Container } from './styles';

const Menu = () => {
  const dispatch = useDispatch();
  const today = new Date(Date.now());

  const handleAddButton = () => {
    const reminder = {
      uuid: '123124',
      datetime: today.toISOString(),
      name: 'lembrete',
      city: 'sao luis',
      color: '#a0f'
    };

    dispatch(createReminder(reminder));
  };

  return (
    <Card>
      <Container>
        <button onClick={handleAddButton}>Add Reminder</button>
        <DateDetails datetime={today} />
        <ReminderList selectedDatetime={today} />
      </Container>
    </Card>
  );
};

export default Menu;
