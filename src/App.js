import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

import Checkout from './routes/checkout/checkout.component';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action';
function App() {
  const dispatch = useDispatch();
  // console.log(jsonData);
  console.log('hello world');

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
