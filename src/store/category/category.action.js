import CATEGORIES_ACTION_TYPES from './category.type';
import { createAction } from '../../utils/reducer/createAction';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);