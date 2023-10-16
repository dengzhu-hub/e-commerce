import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './root.saga';
const persisConfig = {
  key: 'root',
  storage,
  whiteList: ['user'], // 数据持久化白名单。
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persisConfig, rootReducer);
const middleWare = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
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
// then run the saga
sagaMiddleware.run(mySaga);