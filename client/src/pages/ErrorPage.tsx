import styled from '@emotion/styled';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Wrapper = styled.div``;
const Title = styled.h1``;
const Contents = styled.p``;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  
  return (
    <Wrapper>
      <Title>문제가 발생했습니다.</Title>
      <Contents>페이지를 불러오는 중 문제가 발생했습니다. 관리자에게 문의해주세요</Contents>
      <Link to='/'>
        홈으로 돌아가기
      </Link>
    </Wrapper>
  );

};

export default ErrorPage;