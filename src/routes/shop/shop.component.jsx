import { useContext } from "react";
import "./shop.style.scss";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-card__container">
      {products.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
export default Shop;
