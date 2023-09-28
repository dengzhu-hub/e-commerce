import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";
import React from "react";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview__container">
      <h2 className="title">
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
