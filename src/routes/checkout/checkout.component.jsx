import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./check.style.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
    </div>
  );
};

export default Checkout;
