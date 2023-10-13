import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
const persisConfig = {
  key: 'root',
  storage,
  whiteList: ['user'],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);
const middleWare = [
  process.env.NODE_ENV === 'development' && logger,
  thunk ,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhances = composeEnhancer(applyMiddleware(...middleWare));
console.log(process.env);

//rooter-reducer
export const store = createStore(persistedReducer, undefined, composeEnhances);
export const persistStor = persistStore(store);
