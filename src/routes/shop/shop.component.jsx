import { useContext } from "react";
import "./shop.style.scss";
import { ProductsContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const Shop = () => {
  const { categoriesMap } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default Shop;
