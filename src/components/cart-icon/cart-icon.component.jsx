import { useDispatch, useSelector } from 'react-redux';
import { CartIconContainer, ShopingIcon, IconCount } from './cart-icon.style';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartCount,
  selectCartIsOpen,
} from '../../store/cart/cart.selector';
const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShopingIcon />
      <IconCount>{cartCount}</IconCount>
    </CartIconContainer>
  );
};
export default CartIcon;
