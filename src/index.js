import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

import App from './App';
// import "./App.css";
// eslint-disable-next-line
import { TodoReducer } from './utils/clasj';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistStor } from './store/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistStor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
