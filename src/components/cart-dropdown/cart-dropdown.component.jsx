import { BUTTON_TYPE_CLASS } from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import {
  CartContainer,
  CartEmptyMessage,
  CartItems,
} from './cart-dropdown.style';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartIsOpen,
  selectCartItems,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
const CartDropdown = () => {
  const isCartOpen = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate('/checkout');
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
