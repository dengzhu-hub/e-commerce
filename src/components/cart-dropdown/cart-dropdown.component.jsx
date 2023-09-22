import Button from "../button/button.component";
import "./cart-dropdowm.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to check</Button>
    </div>
  );
};
export default CartDropDown;
