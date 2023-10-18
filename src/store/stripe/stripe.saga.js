import { call, put, all, takeLatest } from 'redux-saga/effects';

import { STRIPE_ACTION_TYPES } from './stripe.type';
export function* fetchPublishableKeySaga() {
  try {
    const response = yield call(fetch, '/config');
    const { publishableKey } = yield response.json();
    yield put(STRIPE_ACTION_TYPES.FETCH_STRIPE_SUCCESS(publishableKey));
  } catch (error) {
    yield put(STRIPE_ACTION_TYPES.FETCH_STRIPE_FAILURE(error));
  }
}

export function* watchFetchPublishableKey() {
  yield takeLatest(
    STRIPE_ACTION_TYPES.FETCH_STRIPE_START,
    fetchPublishableKeySaga
  );
}

export function* stripeSaga() {
  yield all([call(watchFetchPublishableKey)]);
}
