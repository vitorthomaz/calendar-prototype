import { createStore } from 'redux';

import reducers, { remindersState } from './reducers';

const initialState = {
  reminders: remindersState
};
export type IStore = typeof initialState;

export default createStore(reducers, initialState);
