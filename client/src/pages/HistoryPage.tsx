import styled from '@emotion/styled';
import React from 'react';

import architecture from '@images/architecture.jpg';

const Wrapper = styled.div`
  display: flex;
  max-width: 100vw;
  overflow: hidden;
  gap: 40px;
  align-items: center;
`;

const Image = styled.img`
  overflow: hidden;
  max-width: 60vw;
`;

const TextWrapper = styled.div`
  flex-grow: 2;
`;

const Title = styled.h1``;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Line = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Date = styled.span`
  font-weight: 800;
  font-size: 14px;
`;
const Contents = styled.span`
  font-weight: 300;
  font-size: 12px;
`;

const HistoryPage = () => {
  return (
    <Wrapper>
      <Image src={architecture} />
      <TextWrapper>
        <Title>INTERTECH HISTORY</Title>
        <ContentsWrapper>
          <Line><Date>2001. 08</Date><Contents>인터텍 설립</Contents></Line>
          <Line><Date>2001. 09</Date><Contents>디지털 제어식 GAS용 취사 및 안전장치 개발</Contents></Line>
          <Line><Date>2001. 10</Date><Contents>GAS 및 공기압용 SOLENOID VALVE 개발</Contents></Line>
          <Line><Date>2002. 03</Date><Contents>냉매조절기용 SOLENOID 개발</Contents></Line>
          <Line><Date>2002.07</Date><Contents>3단 속도제어용 SOLENOID VALVE 개발</Contents></Line>
          <Line><Date>2003.08</Date><Contents>가스 및 오일 점화장치 개발</Contents></Line>
          <Line><Date>2007.08</Date><Contents>PID제어식 가스 온도 조절장치 개발</Contents></Line>
          <Line><Date>2011.03</Date><Contents>ISO9001,14001취득</Contents></Line>
          <Line><Date>2015.09</Date><Contents>인터텍주식회사 법인 전환</Contents></Line>
          <Line><Date>2017.01</Date><Contents>방폭 안전인증 취득</Contents></Line>
          <Line><Date>2020.03</Date><Contents>인덕션 쿠커 개발</Contents></Line>
        </ContentsWrapper>
      </TextWrapper>
    </Wrapper>
  );

};

export default HistoryPage;