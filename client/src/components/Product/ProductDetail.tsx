import styled from '@emotion/styled';
import React from 'react';

const CategoryName = styled.h3`
  font-weight: 600;
`;

const Wrapper = styled.div`
  text-align: center;
  max-width: 100%;
`;

const SubCategoryList = styled.div``;

const SubCategoryImage = styled.img`
  max-width: 100%;
`;

const ProductDetail = ({ product }: { product: any }) => {
  const { categoryName, imageList } = product;
  return (
    <Wrapper>
      <CategoryName>{categoryName}</CategoryName>
      <SubCategoryList>
        {imageList.map((imageSrc: string) => 
          <SubCategoryImage key={imageSrc} src={imageSrc} />
        )}
      </SubCategoryList>
    </Wrapper>
  );
};

export default ProductDetail;