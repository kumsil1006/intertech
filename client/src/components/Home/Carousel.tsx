import React, { memo } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';

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

const HomeCarousel = ({imageList}: Props) => {
  return (
    <Carousel>
      {imageList.map(image => <Paper key={image.src}>
        <img src={image.src} alt='intertech'/>
        <CompanyName key="companyName" color={image.color}>INTER TECH</CompanyName>
      </Paper>)}
    </Carousel>
  );
};

export default memo(HomeCarousel);