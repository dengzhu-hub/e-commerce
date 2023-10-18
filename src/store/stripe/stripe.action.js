import { STRIPE_ACTION_TYPES } from './stripe.type';
import { createAction } from '../../utils/reducer/createAction';

export const fetchPublishableKeyStart = () =>
  createAction(STRIPE_ACTION_TYPES.FETCH_STRIPE_START);
export const fetchPublishableKeySuccess = () =>
  createAction(STRIPE_ACTION_TYPES.FETCH_STRIPE_SUCCESS);

export const fetchPublishableKeyFailed = error =>
  createAction(STRIPE_ACTION_TYPES.FETCH_STRIPE_FAILURE, error);
