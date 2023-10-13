import './checkout-item.style.scss';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <div className="checkout-item__container">
      <div className="image-box">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="title">{name}</span>
      <span className="quantity-container">
        <div onClick={removeItemHandler}>
          <AiOutlineMinusCircle />
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler}>
          <AiOutlinePlusCircle />
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
