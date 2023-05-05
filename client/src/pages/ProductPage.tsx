import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductNotFound from '@components/Product/ProductNotfound';
import CommonCarousel from '@components/common/CommonCarousel';
import SubCategory from '@components/Product/SubCategory';
import { productList } from '@data/productData';
import ProductDetail from '@components/Product/ProductDetail';

const getProductData = (productName : string | undefined) => {
  const product = productList.find((product) => {
    return product.categoryName === productName;
  });
  return product ?? undefined;
};

const Wrapper = styled.div`
  display: flex;
  min-height: 600px;
  gap: 10px;
  margin-inline: 20px;
`;

const LeftSection = styled.div`
  flex-basis: 50%;
  height: 400px;
`;

const RightSection = styled.div`
  align-items: center;
  flex-basis: 48%;
`;

const ProductPage = () => {
  const { productName } = useParams();
  const product = getProductData(productName);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  if(!product) {
    return <ProductNotFound />;
  }

  return (
    <Wrapper>
      <LeftSection>
        <CommonCarousel imageList={product.leftImageList} height='500px'/>
      </LeftSection>
      <RightSection>
        {product.subCategory ? <SubCategory product={product}/> : <ProductDetail product={product}/>}
      </RightSection>
    </Wrapper>
  );
};



export default ProductPage;