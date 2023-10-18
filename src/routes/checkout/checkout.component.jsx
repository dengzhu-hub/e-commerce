import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './check.style.scss';
import { useSelector } from 'react-redux';
import Payment from '../../components/payment-form/Payment';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  console.log(cartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-header__title">
          <span>Product</span>
        </div>
        <div className="checkout-header__title">
          <span>Description</span>
        </div>
        <div className="checkout-header__title">
          <span>Quantity</span>
        </div>
        <div className="checkout-header__title">
          <span>Price</span>
        </div>
        <div className="checkout-header__title">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => {
        return <CheckoutItem cartItem={cartItem} />;
      })}
      <span className="total-price">
        {cartTotal ? `Total: ￡${cartTotal}` : `total: 0`}
      </span>
      <Payment />
    </div>
  );
};

export default Checkout;
