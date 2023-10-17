import { call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import { categoriesSaga } from './category/category.saga';
import { userSagas } from './user/useer.saga';
export function* mySaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
