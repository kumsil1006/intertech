import styled from '@emotion/styled';
import React, {memo} from 'react';

interface Props {
  imageSrcList: Array<string>;
  time: number;
}

const Image = styled.img`
  max-width: 100%;
  max-height: 180px;
`;

const ItemMainImage = ({imageSrcList, time} : Props) => {
  const index = time % imageSrcList.length;
  return <Image src={imageSrcList[index]} />;
};

export default memo(ItemMainImage);