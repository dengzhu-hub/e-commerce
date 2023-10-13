import CATEGORIES_ACTION_TYPES from './category.type';
import { createAction } from '../../utils/reducer/createAction';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = categories =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = categories =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFail = error =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);
export const fetchCategoriesAsync = () => {
  return async dispatch => {
    dispatch(fetchCategoriesStart());
    try {
      const categories = await getCategoriesAndDocuments('categories');
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFail(error));
    }
  };
};
