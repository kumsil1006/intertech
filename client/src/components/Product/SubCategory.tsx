import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  product: any;
}

interface SubCategory {
  name: string;
  imageList: Array<string>
}

const CategoryName = styled.h3`
  font-weight: 600;
`;

const Wrapper = styled.div`
  text-align: center;
  max-width: 100%;
`;

const SubCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
`;

const SubCategoryItem = styled.div`
  border: 1px solid transparent;
  
  &:hover {
    border: 1px solid #c1c1c1;
  }
`;

const SubCategoryImage = styled.img`
  max-width: 100%;
`;

const SubCategoryTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #080808;
`;

const SubCategory = ({ product } : Props) => {
  const { categoryName, subCategory } = product;
  return (
    <Wrapper>
      <CategoryName>{categoryName}</CategoryName>
      <SubCategoryList>
        {subCategory.map((item: SubCategory) => 
          <SubCategoryItem key={item.imageList[0]} >
            <Link to={`/product/${categoryName}/${item.name}`}>
              <SubCategoryImage src={item.imageList[0]} />
              <SubCategoryTitle>{item.name}</SubCategoryTitle>
            </Link>
          </SubCategoryItem>
        )}
      </SubCategoryList>
    </Wrapper>
  );
};
export default SubCategory;