import { call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import { categoriesSaga } from './category/category.saga';
import { userSaga } from './user/useer.saga';
export function* mySaga() {
  yield all([categoriesSaga(), userSaga()]);
}
