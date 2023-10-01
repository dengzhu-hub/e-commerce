import { useContext } from "react";
import { BUTTON_TYPE_CLASS } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  CartEmptyMessage,
  CartItems,
} from "./cart-dropdown.style";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <CartEmptyMessage>your cart is empty</CartEmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASS.invert} onClick={checkoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartContainer>
  );
};

export default CartDropdown;
