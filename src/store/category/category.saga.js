import { call, put, all, takeLatest } from 'redux-saga/effects';
import CATEGORIES_ACTION_TYPES from '../category/category.type';
import { fetchCategoriesSuccess, fetchCategoriesFail } from './category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}

export function* watchFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(watchFetchCategories)]);
}
