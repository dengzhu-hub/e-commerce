import Button from "../button/button.component";
import "./cart-dropdowm.style.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">
        <Button>Go to check</Button>
      </div>
    </div>
  );
};
export default CartDropDown;
