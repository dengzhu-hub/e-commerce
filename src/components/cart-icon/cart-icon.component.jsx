import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShopingIcon, IconCount } from "./cart-icon.style";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShopingIcon />
      <IconCount>{cartCount}</IconCount>
    </CartIconContainer>
  );
};
export default CartIcon;
