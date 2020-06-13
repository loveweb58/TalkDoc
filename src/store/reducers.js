/*
 * combines all th existing reducers
 */

import { combineReducers } from 'redux';
import { authReducer } from 'views/auth/reducer';

const appReducers = combineReducers({
  auth: authReducer,

  // but its referenced here
});

export default appReducers;
