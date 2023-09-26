import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdowm.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick = {checkoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
