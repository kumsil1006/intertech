import React, { PropsWithChildren, memo } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';

interface Props {
  imageList: Array<string>;
  height?: string;
  width?: string;
}

const Image = styled.img`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  max-width: 100%;
  background-size: contain;
`;

const CommonCarousel = ({ imageList, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Carousel>
      {imageList.map(src => <Paper key={src}>
        <Image src={src} alt='intertech' {...props}/>
        {children}
      </Paper>)}
    </Carousel>
  );
};

export default memo(CommonCarousel);