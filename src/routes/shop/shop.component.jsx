import { Fragment, useContext } from "react";
import "./shop.style.scss";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { categoriesMap } = useContext(ProductsContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2 className="category-title">{title}</h2>
          <div className="products-card__container">
            {categoriesMap[title].map(product => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};
export default Shop;
