import styled from '@emotion/styled';
import React from 'react';

import smart from '@images/smart.jpg';

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  margin-inline: 10px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Contents = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: #080808;
`;

const Image = styled.img`
  max-width: 65%;
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <Image src={smart} />
      <div>
        <Title>INTER TECH</Title>
        <ContentsWrapper>
          <Contents>지속적인 성장과 발전할 수 있도록 많은 협조와 후원을 보내주신</Contents>
          <Contents>여러분께 저희 인터텍주식회사를 대신하여 깊이 감사 드립니다.</Contents>
          <Contents>저희는 가스기구 점화 및 제어와 방폭형 솔레노이드 제품을</Contents>
          <Contents>제작하는 업체로서 각종 가스용 기구에 적용되고 있고</Contents>
          <Contents>가스사고 예방과 안전을 최우선으로 하여 생산하고 있습니다.</Contents>
          <Contents>또한 생산되는 모든 부품들은 “고객에게 최고의 품질을”이라는</Contents>
          <Contents>경영이념으로 선진기업을 목표로 고객과 함께 성장할 수 있도록 최선을 다하겠습니다.</Contents>
        </ContentsWrapper>
      </div>
    </Wrapper>
  );
};

export default AboutPage;