import { combineReducers } from 'redux';

import reminders, { initialState as remindersState } from './reminders';

export { remindersState };
export default combineReducers({ reminders });
