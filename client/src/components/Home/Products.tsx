import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { productList } from '@data/productData';
import ItemMainImage from '@components/Home/ItemMainImage';

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
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
  height: 460px;
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
            <ItemMainImage imageSrcList={product.mainImageList} time={time}/>
            <ItemTitle>{product.categoryName}</ItemTitle>
          </Item>
        ))}
      </ItemList>
    </div>
  );
};

export default Products;