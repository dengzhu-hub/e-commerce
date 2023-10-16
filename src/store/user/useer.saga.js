import { call, all, put, takeLatest } from 'redux-saga/effects';
import USER_ACTION_TYPES from '../user/user.type';
import { signSuccess, signFailure } from './user.action';
import {
  createUserDocumentFromAuth,
  getCurrentUser,
} from '../../utils/firebase/firebase.utils';
export function* getSnapShopFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    console.log(userSnapShot);
    console.log(userSnapShot.data());
  } catch (error) {}
}
export function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShopFromUserAuth, userAuth);
  } catch (errors) {
    yield put(signFailure(errors));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isAuthenticated,);
}
export function* userSaga() {
  yield all([call()]);
}
