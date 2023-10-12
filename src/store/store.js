import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
const middleWare = [logger];
const composeEnhances = compose(applyMiddleware(...middleWare));
//rooter-reducer
export const store = createStore(rootReducer, undefined, composeEnhances);
