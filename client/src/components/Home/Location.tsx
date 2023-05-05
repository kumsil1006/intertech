import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
`;

const Map = styled.div`
  width:100%;
  height:400px;
`;


const Location = () => {
  const [latitude, setLatitude] = useState<number>(37.4768643148544);
  const [longitude, setLogitude] = useState<number>(126.669204093815);


  useEffect(() => {
    const location = new naver.maps.LatLng(latitude, longitude);
    //지도 그리기
    const map = new naver.maps.Map('map', {
      center: location,
      zoomControl: true,   // 줌 설정
      zoom: 15,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    //마커 설정
    const marker = new naver.maps.Marker({
      map,
      position: location, //마커 좌표
    });

  }, [latitude, longitude]);
  
  return (
    <>
      <Title>Company Location</Title>
      <Map id="map" />
    </>
  );
};

export default Location;