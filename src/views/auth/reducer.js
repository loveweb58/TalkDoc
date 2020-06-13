import { handleActions, createAction } from 'redux-actions';

import { defineLoopActions, requestLoopHandlers } from 'libs/state';
import { setToken, getToken, removeToken } from 'libs/token';

import { REQUEST_STATUS } from 'config/constants';

import {
  SIGNUP,
  LOGIN,
  SELECTAUTHTYPE,
  CHECKINGELIGIBILITY,
} from './actionTypes';

/* Initial state */
const initialState = {
  isSignedupIn: false,
  isLoginedIn: false,
  authType: 'init',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  checkingEligibility: false,
  loginState: REQUEST_STATUS.INITIAL,
};

/* Action creators */

export const {
  start: signup,
  success: signupSuccess,
  fail: signupFail,
} = defineLoopActions(SIGNUP);

export const {
  start: login,
  success: loginSuccess,
  fail: loginFail,
} = defineLoopActions(LOGIN);

export const {
  start: eligibility,
  success: eligibilitySuccess,
  fail: eligibilityFail,
} = defineLoopActions(CHECKINGELIGIBILITY);

export const onSelectAuthType = createAction(SELECTAUTHTYPE);

/* Reducer */

export const authReducer = handleActions(
  {
    ...requestLoopHandlers({
      action: SIGNUP,
      onSuccess: (state, payload) => {
        return {
          ...state,
          isSignedupIn: true,
          email: payload.email,
          first_name: payload.first_name,
          last_name: payload.last_name,
          token: payload.token,
          state: REQUEST_STATUS.SUCCESS,
        };
      },
    }),

    ...requestLoopHandlers({
      action: LOGIN,
      onSuccess: (state, payload) => {
        setToken(payload.token);
        return {
          ...state,
          email: payload.email,
          first_name: payload.first_name,
          last_name: payload.last_name,
          token: payload.token,
          isLoginedIn: true,
          state: REQUEST_STATUS.SUCCESS,
        };
      },
    }),

    ...requestLoopHandlers({
      action: CHECKINGELIGIBILITY,
      onSuccess: (state, payload) => {
        return {
          ...state,
          checkingEligibility: true,
          state: REQUEST_STATUS.SUCCESS,
        };
      },
    }),

    [SELECTAUTHTYPE]: (state, payload) => {
      return {
        ...state,
        authType: payload.payload,
      };
    },
  },
  initialState
);
