import { STRIPE_ACTION_TYPES } from './stripe.type';

export const STRIPE_INITIAL_STATE = {
  publishableKey: null,
  isLoading: false,
  error: null,
};

export const stripeReducer = (state = STRIPE_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case STRIPE_ACTION_TYPES.FETCH_STRIPE_START:
      return {
        ...state,
        publishableKey: payload,
        isLoading: true,
      };
    case STRIPE_ACTION_TYPES.FETCH_STRIPE_SUCCESS:
      return {
        ...state,
        publishableKey: payload,
        isLoading: false,
      };
case STRIPE_ACTION_TYPES.FETCH_STRIPE_FAILURE:
return {
        ...state,
        isLoading: false,
        error: payload,
      }
    default:
      return state;
  }
};
