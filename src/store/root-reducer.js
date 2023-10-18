import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './category/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { stripeReducer } from './stripe/stripe.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoriesReducer,
  cart: cartReducer,
});
