import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  ProductCardImg,
  ProductCardText,
} from "./product-card.style";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);

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
