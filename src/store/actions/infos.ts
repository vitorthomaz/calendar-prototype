import { SET_DAY } from '../types';

export const setDay = (day: string) => ({
  type: SET_DAY,
  payload: { day }
});
