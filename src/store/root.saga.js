import { call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import { categoriesSaga } from './category/category.saga';
import { userSagas } from './user/useer.saga';
import { stripeSaga } from './stripe/stripe.saga';
export function* mySaga() {
  yield all([call(categoriesSaga), call(userSagas)], call(stripeSaga));
}
