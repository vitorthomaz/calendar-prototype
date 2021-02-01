import { SET_DAY, OPEN_MODAL, CLOSE_MODAL, IReminder } from '../types';

export const setDay = (day: string) => ({
  type: SET_DAY,
  payload: { day }
});

export const openModal = () => ({
  type: OPEN_MODAL,
  payload: { isVisible: true }
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: { isVisible: false }
});
