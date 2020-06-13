/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { saga as authSaga } from 'views/auth/sagas';

export default function* rootSaga() {
  yield all([authSaga()]);
}
