import { CategoryContainer, CategoryTitle } from './category.style';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from '../../store/category/category.selector';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
const Category = () => {
  console.log('render/rendering category component');
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  const { category } = useParams();
  const [products, setProducts] = useState([category]);
  useEffect(() => {
    console.log('effect fired call setProduct');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment key={category}>
      <CategoryTitle key={category}>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner key="2" />
      ) : (
        <CategoryContainer>
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
