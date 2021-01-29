import {
  IReminder,
  CREATE_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER
} from '../types';

export const createReminder = ({
  uuid,
  datetime,
  city,
  name = '',
  color = '#ffffff'
}: IReminder) => ({
  type: CREATE_REMINDER,
  payload: { uuid, datetime, city, name, color }
});

export const deleteReminder = ({ uuid }: IReminder) => ({
  type: DELETE_REMINDER,
  payload: { uuid }
});

export const updateReminder = ({
  uuid,
  datetime,
  city,
  name = '',
  color = '#ffffff'
}: IReminder) => ({
  type: UPDATE_REMINDER,
  payload: { uuid, datetime, city, name, color }
});
