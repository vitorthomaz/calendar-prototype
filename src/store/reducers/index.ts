import { combineReducers } from 'redux';

import reminders, { initialState as remindersState } from './reminders';
import infos, { initialState as infosState } from './infos';

export { remindersState, infosState };
export default combineReducers({ reminders, infos });
