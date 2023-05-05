import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: calc(100vw - 60px);
  height: 300px;
  background-color: #545454;
  color: #FAFAFA;
  font-weight: 400;
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 10px;
  margin-top: 100px;

  a {
    color: #FAFAFA;
  }
`;

const Title = styled.h2``;

const TextHeader = styled.span`
  width: 50px;
  font-weight: 600;
`;

const TextContents = styled.span`
  font-weight: 300;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>INTER TECH CO.,LTD</Title>
      </Link>
      <TextWrapper>
        <TextHeader>E-Mail</TextHeader>
        <TextContents>itc0530@naver.com</TextContents>
      </TextWrapper>
      <TextWrapper>
        <TextHeader>Address</TextHeader>
        <TextContents>인천광역시 미추홀구 염전로201번길 88</TextContents>
        <TextContents>(88, Yeomjeon-ro 201beon-gil, Michuhol-gu, Incheon, KOREA)</TextContents>
      </TextWrapper>
      <TextWrapper>
        <TextHeader>Phone</TextHeader>
        <TextContents>032. 832. 0530</TextContents>
      </TextWrapper>
      <TextWrapper>
        <TextContents>©2023 by 인터텍</TextContents>
      </TextWrapper>
    </Wrapper>
  );
};

export default Footer;