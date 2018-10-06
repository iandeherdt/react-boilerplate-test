import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOGIN, CANCEL_LOGIN } from './constants';
import { goBack } from 'react-router-redux';

function* handleDone() {
  yield put(goBack());
}

// Individual exports for testing
export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleDone);
}

export function* cancelLoginSaga() {
  yield* takeLatest(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default [
  doLoginSaga,
  cancelLoginSaga,
];
