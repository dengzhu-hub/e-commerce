import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import {
  ProductCardContainer,
  ProductCardImg,
  ProductCardText,
} from './product-card.style';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />
      <ProductCardText>
        <span className="product-card__title">{name}</span>
        <span className="product-card__price">{price}</span>
      </ProductCardText>

      <Button buttonType={BUTTON_TYPE_CLASS.invert} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
