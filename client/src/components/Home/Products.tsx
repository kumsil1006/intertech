import React, { memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { productList } from '@data/productData';
import ItemMainImage from '@components/Home/ItemMainImage';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
`;

const Item = styled.div`
  flex-basis: 24.5%;
`;

const ItemTitle = styled.p`
  font-size: 16px;
  color: black;
  text-align: center;
`;

const ItemList = styled.div`
  display: flex;
  height: 360px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

const Products = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Title>PRODUCTS</Title>
      <ItemList>
        {productList.map(product => (
          <Item key={product.categoryName}>
            <Link to={`/product/${product.categoryName}`}>
              <ItemMainImage imageSrcList={product.mainImageList} time={time}/>
              <ItemTitle>{product.categoryName}</ItemTitle>
            </Link>
          </Item>
        ))}
      </ItemList>
    </div>
  );
};

export default memo(Products);