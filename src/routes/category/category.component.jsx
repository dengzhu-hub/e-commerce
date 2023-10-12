import { CategoryContainer, CategoryTitle } from './category.style';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';
import ProductCard from '../../components/product-card/product-card.component';
const Category = () => {
  console.log('render/rendering category component'); 
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState([category]);
  useEffect(() => {
    console.log('effect fired call setProduct')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment key={category}>
      <CategoryTitle key={category}>{category.toUpperCase()}</CategoryTitle>

      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
