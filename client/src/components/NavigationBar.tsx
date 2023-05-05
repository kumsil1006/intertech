import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '@images/logo.png';

const LogoButton = styled.img`
  max-width: 200px;
  max-height: 80px;
`;

const LinkContainer = styled.div`
  a {
    font-weight: 600;
    font-size: 16px;
    color: #02020A;
    border-bottom: 2px solid white;
    padding-inline: 15px;
    padding-block: 10px;
  }
  a:hover {
    color: #BBB8B2;
    border-bottom: 3px solid #545454;
  }
`;

const Wrapper = styled.div`
  width: 99vw;
  height: max-content;
  position: fixed;
  z-index: 10000;
  background-color: white;
`;

const NavigationBar = () => {
  return (
    <Wrapper>
      <Box sx={{ m: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <LogoButton src={Logo} alt="Intertech Logo" loading="lazy" />
        </Link>
        <LinkContainer>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Link to="/">HOME</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/product">PRODUCT</Link>
            <Link to="/announce">공지사항</Link>
            <Link to="/map">오시는 길</Link>
          </Box>
        </LinkContainer>
      </Box>
    </Wrapper>
  );
};

export default NavigationBar;