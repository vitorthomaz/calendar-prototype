import { ActionType, SET_DAY, OPEN_MODAL, CLOSE_MODAL } from '../types';
import { today } from '../../utils/datetime';

export const initialState = {
  day: today().toISOString(),
  isVisible: false
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.payload.day };
    case OPEN_MODAL:
      return { ...state, isVisible: action.payload.isVisible };
    case CLOSE_MODAL:
      return { ...state, isVisible: action.payload.isVisible };
    default:
      return state;
  }
};

export default reducer;
