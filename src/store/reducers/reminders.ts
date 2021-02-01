import {
  IReminder,
  ActionType,
  CREATE_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER
} from '../types';

const localKey = '@redux/reminders';

const initialLocalStorage = localStorage.getItem(localKey) || '[]';
export const initialState: IReminder[] = JSON.parse(initialLocalStorage);

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CREATE_REMINDER:
      createLocal(action.payload);
      return [...state, { ...action.payload }];
    case DELETE_REMINDER:
      deleteLocal(action.payload.uuid);
      return state.filter(
        ({ uuid }: IReminder) => action.payload.uuid !== uuid
      );

    case UPDATE_REMINDER:
      updateLocal(action.payload);
      return state.map(({ uuid, datetime, city, name, color }: IReminder) => {
        if (action.payload.uuid === uuid) return action.payload;

        return { uuid, datetime, city, name, color };
      });

    default:
      return state;
  }
};

const createLocal = ({ uuid, datetime, city, name, color }: IReminder) => {
  const remString = localStorage.getItem(localKey) || '[]';
  const reminders: IReminder[] = JSON.parse(remString);
  const newRem: IReminder[] = [
    ...reminders,
    { uuid, datetime, city, name, color }
  ];
  const updatedRemString: string = JSON.stringify(newRem);

  localStorage.setItem(localKey, updatedRemString);
};

const deleteLocal = (uuid: string) => {
  const remString = localStorage.getItem(localKey) || '[]';
  const reminders: IReminder[] = JSON.parse(remString);
  const filteredRem = reminders.filter(reminder => reminder.uuid !== uuid);
  const updatedRemString = JSON.stringify(filteredRem);

  localStorage.setItem(localKey, updatedRemString);
};

const updateLocal = ({ uuid, datetime, city, name, color }: IReminder) => {
  const remString = localStorage.getItem(localKey) || '[]';
  const reminders: IReminder[] = JSON.parse(remString);
  const updatedRem = reminders.map(reminder => {
    if (reminder.uuid === uuid) return { uuid, datetime, city, name, color };
    return reminder;
  });
  const updatedRemString = JSON.stringify(updatedRem);

  localStorage.setItem(localKey, updatedRemString);
};

export default reducer;
