import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';

import { Input, Select } from '../../components';
import { createReminder } from '../../store/actions/reminders';
import { IStore } from '../../store';

import { Container, Form, FormButton } from './styles';

interface ReminderFormProps {
  extraActionsOnSubmit?: () => void;
}

const ReminderForm: FC<ReminderFormProps> = ({
  extraActionsOnSubmit = () => {}
}) => {
  const dispatch = useDispatch();
  const infos = useSelector((store: IStore) => store.infos);

  const [hour, setHour] = useState(0);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [color, setColor] = useState('');

  const clearFields = () => {
    setHour(0);
    setName('');
    setCity('');
    setColor('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedDay = new Date(infos.day);
    const reminderDay = new Date(
      selectedDay.getUTCFullYear(),
      selectedDay.getUTCMonth(),
      selectedDay.getUTCDate(),
      hour
    );

    const reminder = {
      uuid: uuidV4(),
      datetime: reminderDay.toISOString(),
      name: name,
      city: city,
      color: color
    };

    console.log(reminder);

    dispatch(createReminder(reminder));
    clearFields();
    extraActionsOnSubmit();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input setValue={(data: string) => setName(data)} maxLength={30}>
          Name:
        </Input>
        <Input setValue={(data: string) => setCity(data)}>City:</Input>
        <Input setValue={(data: string) => setColor(data)}>Color:</Input>
        <Select setValue={(data: number) => setHour(data)}>Hour:</Select>
        <FormButton type="submit">Create Reminder</FormButton>
      </Form>
    </Container>
  );
};

export default ReminderForm;
