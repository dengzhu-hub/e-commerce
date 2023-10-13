import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';

const loggerMiddleWare = store => next => action => {
  if (!action.type) {
    return next(action);
  }
  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentUser', store.getState());
  next(action);
  console.log('next state', store.getState());
};
const middleWare = [loggerMiddleWare];
const composeEnhances = compose(applyMiddleware(...middleWare));
//rooter-reducer
export const store = createStore(rootReducer, undefined, composeEnhances);
