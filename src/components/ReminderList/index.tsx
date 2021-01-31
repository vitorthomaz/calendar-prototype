import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store';
import { IReminder } from '../../store/types';

import { Container, Reminder } from './styles';

interface ReminderListProps {
  selectedDatetime: Date;
}

const ReminderList: FC<ReminderListProps> = ({ selectedDatetime }) => {
  const reminderStore = useSelector((store: IStore) => store.reminders);

  const [currDay, setCurrDay] = useState<Date | undefined>(undefined);
  const [todayReminders, setTodayReminders] = useState<IReminder[]>([]);

  useEffect(() => {
    const year = selectedDatetime.getUTCFullYear();
    const month = selectedDatetime.getUTCMonth();
    const date = selectedDatetime.getUTCDate();
    const currDate = new Date(year, month, date);

    setCurrDay(currDate);
  }, [selectedDatetime]);

  useEffect(() => {
    const reminders = reminderStore.filter(reminder => {
      if (!reminder.datetime) return false;

      const datetime = new Date(reminder.datetime);

      const year = datetime.getUTCFullYear();
      const month = datetime.getUTCMonth();
      const date = datetime.getUTCDate();
      const reminderDatetime = new Date(year, month, date);

      const reminderMilis = reminderDatetime.getTime();
      const currMilis = currDay?.getTime();

      if (reminderMilis === currMilis) return true;

      return false;
    });

    setTodayReminders(reminders);
  }, [reminderStore, currDay]);

  return (
    <Container>
      {todayReminders.map((reminder, id) => (
        <Reminder key={id}>{reminder.name}</Reminder>
      ))}
    </Container>
  );
};

export default ReminderList;
