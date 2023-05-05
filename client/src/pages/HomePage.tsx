import styled from '@emotion/styled';
import React from 'react';

import Home1 from '@images/home1.png';
import Home2 from '@images/home2.png';
import Home3 from '@images/home3_1.png';
import Home4 from '@images/home4_1.png';

import Products from '@components/Home/Products';
import Location from '@components/Home/Location';
import HomeCarousel from '@components/Home/Carousel';

const Wrapper = styled.div`
  width: 100vw;
  height: 1500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    position: relative;
  }
`;

const imageList = [{src: Home1, color: '#848484'}, {src: Home2}, {src: Home3}, {src: Home4}];

const HomePage = () => {
  return (
    <Wrapper>
      <HomeCarousel imageList={imageList}/>
      <Products />
      <Location />
    </Wrapper>
  );
};

export default HomePage;