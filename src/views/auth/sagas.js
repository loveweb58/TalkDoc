import { takeLatest, call, put } from 'redux-saga/effects';
import { registerUser, loginUser } from 'api/methods/auth';

import { SIGNUP, LOGIN, CHECKINGELIGIBILITY } from './actionTypes';

import {
  signupSuccess,
  signupFail,
  loginSuccess,
  loginFail,
  // eligibilitySuccess,
  // eligibilityFail,
} from './reducer';

function* signup(action) {
  action.payload.type = 'PATIENT';
  //Register Api Call
  const response = yield call(registerUser, action.payload);
  if (response.status_code === 2000) {
    yield put(signupSuccess(response.payload));
  } else {
    yield put(signupFail());
    setTimeout(() => {
      console.log('talkDoc', response.Message);
    }, 200);
  }
}

function* login(action) {
  //Login Api Call
  const response = yield call(loginUser, action.payload);
  console.log(response);
  if (response.status_code === 2000) {
    yield put(loginSuccess(response.payload));
    // yield call(navigateToEligibility);
    if (response.payload.is_user_eligible) {
    } else {
    }
  } else {
    yield put(loginFail());
    setTimeout(() => {
      console.log('talkDoc', response.Message);
    }, 200);
  }
}

// function* eligibility(action) {
//   //Eligibility Api Call
//   const userToken = yield getToken();
//   const response = yield call(checkingEligibility, action.payload, userToken);
//   if (response.status_code === 2001) {
//     yield put(eligibilitySuccess(response.payload));
//     if (response.payload.is_eligible) {
//       yield call(navigateToFinal);
//     } else {
//       yield call(navigateToFailure);
//     }
//   } else {
//     yield put(eligibilityFail());
//     setTimeout(() => {
//       Alert.alert('talkDoc', response.Message);
//     }, 200);
//   }
// }

export const saga = function*() {
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(LOGIN, login);
  // yield takeLatest(CHECKINGELIGIBILITY, eligibility);
};
