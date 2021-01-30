export interface IReminder {
  uuid: string;
  datetime?: string;
  city?: string;
  name?: string;
  color?: string;
}

export const CREATE_REMINDER = 'CREATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';

interface createReminderAction {
  type: typeof CREATE_REMINDER;
  payload: IReminder;
}

interface deleteReminderAction {
  type: typeof DELETE_REMINDER;
  payload: { uuid: string };
}

interface updateReminderAction {
  type: typeof UPDATE_REMINDER;
  payload: IReminder;
}

export type ActionType =
  | createReminderAction
  | deleteReminderAction
  | updateReminderAction;
