import { createStore } from 'redux';

import reducers, { remindersState, infosState } from './reducers';

const initialState = {
  reminders: remindersState,
  infos: infosState
};
export type IStore = typeof initialState;

export default createStore(reducers, initialState);
