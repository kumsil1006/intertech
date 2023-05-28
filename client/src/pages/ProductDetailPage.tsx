import ProductNotFound from '@components/Product/ProductNotfound';
import { productList } from '@data/productData';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 20px;
`;

const CategoryName = styled.h3`
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vh;
  align-items: center;
  margin-inline: 50px;
`;

const LeftImageWrapper = styled.div``;

const RightImageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
`;

const Image = styled.img`
  max-width: 45vw;
  max-height: 300px;
`;

const getProductDetail = (categoryName: string, subCategory: string) => {
  const product = productList.find(product => product.categoryName === categoryName);
  return !product?.subCategory ? null : product?.subCategory.find(item => item.name === subCategory);
};

const ProductDetailPage = () => {
  const { productName, subCategory } = useParams();
  const productDetail = getProductDetail(productName ?? '', subCategory ?? '');

  if(!productDetail) {
    return <ProductNotFound />;
  }

  const { name , imageList } = productDetail;
  const firstImage = imageList[0];
  const remainImage = imageList.filter((image, index) => index !== 0);
  
  return (
    <Wrapper>
      <CategoryName>{name}</CategoryName>
      <ImageWrapper>
        <LeftImageWrapper>
          <Image src={firstImage} />
        </LeftImageWrapper>
        <RightImageWrapper>
          {remainImage.map(image => <Image key={image} src={image}/>)}
        </RightImageWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ProductDetailPage;