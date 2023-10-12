import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import './index.scss';
import App from './App';
// import "./App.css";
// eslint-disable-next-line
import { TodoReducer } from './utils/clasj';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './contexts/products.context';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
