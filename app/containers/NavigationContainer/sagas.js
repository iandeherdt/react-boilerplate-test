// import { take, call, put, select } from 'redux-saga/effects';

import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}


function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (error) {
    yield put(requestTopicsFailed(error));
  }
}

// Individual exports for testing
export function* fetchTopicSage() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

export function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// All sagas to be loaded
export default [
  fetchTopicSage,
  selectTopicSaga,
];
