import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon__container" onClick={toggleCartOpen}>
      <ShopIcon className="icon-img" />
      <span className="icon-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
