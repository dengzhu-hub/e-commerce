import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryPreviewItem,
} from "./category-preview.style";
import React from "react";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle>
        <Link to={title}>{title.toUpperCase()}</Link>
      </CategoryTitle>
      <CategoryPreviewItem>
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItem>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
