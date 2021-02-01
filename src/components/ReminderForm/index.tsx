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

  const [hour, setHour] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [color, setColor] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedDay = new Date(infos.day);
    const reminderDay = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      selectedDay.getDate(),
      Number(hour)
    );

    const reminder = {
      uuid: uuidV4(),
      datetime: reminderDay.toISOString(),
      name: name || 'Untitled Reminder',
      city: city,
      color: color
    };

    dispatch(createReminder(reminder));
    extraActionsOnSubmit();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          setValue={(data: string) => setName(data)}
          maxLength={30}
          placeholder="What is this event?"
          required
        >
          Name:
        </Input>
        <Input
          setValue={(data: string) => setCity(data)}
          placeholder="Where will this event be?"
          required
        >
          City:
        </Input>
        <Input
          setValue={(data: string) => setColor(data)}
          placeholder="Type the color name"
        >
          Color:
        </Input>
        <Select setValue={(data: string) => setHour(data)}>Hour:</Select>

        <FormButton type="submit">Create Reminder</FormButton>
      </Form>
    </Container>
  );
};

export default ReminderForm;
