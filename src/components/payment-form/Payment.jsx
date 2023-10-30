import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import axios from 'axios';
import { selectCurrentUser } from '../../store/user/user.selector';
import { url } from '../../utils/slice/api';
export default function Payment() {
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const onCheckoutHandler = () => {
    axios
      .post(`${url}/create-checkout-session`, {
        cartItems,
        user: currentUser,
      })
      .then(res => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return <Button onClick={onCheckoutHandler}>check out</Button>;
}
