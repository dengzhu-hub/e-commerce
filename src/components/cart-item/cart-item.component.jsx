import "./cart-item.style.scss";
const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item__container">
      <h1 className="cart-title">{name}</h1>
      <span className="cart-count">{quantity}</span>
    </div>
  );
};
export default CartItem;
