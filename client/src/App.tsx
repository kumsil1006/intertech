import React from 'react';
import { GlobalStyles } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

import * as styles from './index.css';

const globalStyle = {
  'html, body': {
    'fontFamily': ['Roboto', '"Noto Sans KR"'].join(','),
    'fontWeight': '600',
    'margin': 0
  },
  'a': {
    'textDecoration': 'none'
  }
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ContentsWrapper = styled.div`
  position: absolute;
  top: 100px;
`;

const App = () => {
  return (
    <Wrapper className="App">
      <GlobalStyles styles={globalStyle} />
      <NavigationBar />
      <ContentsWrapper>
        <Outlet />
        <Footer />
      </ContentsWrapper>
    </Wrapper>
  );
};

export default App;
