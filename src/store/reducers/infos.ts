import { ActionType, SET_DAY } from '../types';
import { today } from '../../utils/datetime';

const localKey = '@redux/day';

export const initialState = { day: today().toISOString() };

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_DAY:
      localStorage.setItem(localKey, action.payload.day || '');
      return { ...state, day: action.payload.day };
    default:
      return state;
  }
};

export default reducer;
