import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Name, Button } from './styles';
import { Pencil, Trash } from '../../assets/icons';
import { IReminder } from '../../store/types';
import { deleteReminder } from '../../store/actions/reminders';

interface ReminderProps {
  reminder: IReminder;
}

const Reminder: FC<ReminderProps> = ({ reminder }) => {
  /**
   * TODO: Add update reminder function
   */
  const { uuid, datetime, color, name } = reminder;
  const dispatch = useDispatch();

  const reminderTime = new Date(datetime);
  const hour = reminderTime.getHours();

  const getFormat = (hour: number) => (hour < 12 ? 'am' : 'pm');

  const onDelete = (uuid: string) => {
    dispatch(deleteReminder(uuid));
  };

  return (
    <Container background={color || '#aaaaaa'}>
      <Name>
        {name}, {hour}:00{getFormat(hour)}
      </Name>
      <Button>
        <Pencil />
      </Button>
      <Button onClick={() => onDelete(uuid)}>
        <Trash />
      </Button>
    </Container>
  );
};

export default Reminder;
