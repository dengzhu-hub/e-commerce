import { createAction } from '../../utils/reducer/createAction';
import { USER_ACTION_TYPE } from './user.type';

export const setCurrentUser = user => {
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
