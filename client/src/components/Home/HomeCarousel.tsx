import React, { memo } from 'react';
import styled from '@emotion/styled';
import CommonCarousel from '@components/common/CommonCarousel';

interface ImageWithFontColor {
  src: string;
  color?: string;
}

interface Props {
  imageList: Array<ImageWithFontColor>;
}

const CompanyName = styled.h2`
  z-index: 100000;
  display: block;
  margin: 0px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.color ? props.color : '#c1c1c1'};
`;

const HomeCarousel = ({ imageList }: Props) => {
  return (
    <CommonCarousel imageList={imageList.map(image => image.src)}>
      <CompanyName key="companyName" >INTER TECH</CompanyName>
    </CommonCarousel>
  );
};

export default memo(HomeCarousel);