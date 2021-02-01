export interface IReminder {
  uuid: string;
  datetime: string;
  city?: string;
  name?: string;
  color?: string;
}

export const CREATE_REMINDER = 'CREATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';

export const SET_DAY = 'SET_DAY';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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

interface setInfoAction {
  type: typeof SET_DAY;
  payload: {
    day: string;
  };
}

interface openModal {
  type: typeof OPEN_MODAL;
  payload: {
    isVisible: true;
  };
}

interface closeModal {
  type: typeof CLOSE_MODAL;
  payload: {
    isVisible: false;
  };
}

export type ActionType =
  | createReminderAction
  | deleteReminderAction
  | updateReminderAction
  | setInfoAction
  | openModal
  | closeModal;
