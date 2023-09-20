import Button from "../button/button.component";
import "./product-card.style.scss";
const ProductCard = ({ product }) => {
  const { title, imageUrl, price } = product;

  return (
    <div className="product-card__container">
      <img className="product-card__img" src={imageUrl} alt={title} />
      <div className="product-card__text">
        <span className="product-card__title">{title}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button  buttonType="inverted">Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
