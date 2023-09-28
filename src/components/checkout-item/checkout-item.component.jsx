import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;
const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
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
