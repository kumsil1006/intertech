import electronic from '@images/home1.png';
import gasFire from '@images/home4_1.png';

import IG from '@pdf/IG 도면.pdf';
import IGSpec from '@pdf/IG 사양.pdf';
import IGImage from '@images/IG 사진.jpg';
import IGB from '@images/IGB-도면_PNG.png';
import IGBSpec from '@images/igb-사양.png';
import IGBImage from '@images/igb1.jpg';
import IO from '@images/IO-도면.png';
import IOSpec from '@images/IO-사양.png';
import IOImage from '@images/io1.jpg';
import IgmImage from '@images/ibm1.jpg';
import 솔레노이드1 from '@images/솔레노이드1.jpg';
import 솔레노이드2 from '@images/솔레노이드2.jpg';
import 솔레노이드3 from '@images/솔레노이드3.jpg';
import ControllerImage from '@images/컨트롤러1.jpg';

import 방폭1 from '@images/방폭1.jpg';
import 방폭2 from '@images/방폭2.jpg';
import 방폭3 from '@images/방폭3.jpg';

const 점화장치 = {
  categoryName: '점화장치',
  mainImageList: [IOImage, IGImage, IGBImage, IgmImage],
  subCategory: [{
    name: 'I/O 시리즈',
    leftImageList: [electronic, gasFire],
    productImageList: [IOImage, IO, IOSpec]
  },
  {
    name: 'IG 시리즈',
    imageList: [IGImage, IG, IGSpec, IGImage]
  },
  {
    name: 'IGB 시리즈',
    imageList: [IGBImage, IGB, IGBSpec]
  },
  {
    name: 'IGM 시리즈',
    imageList: [IgmImage]
  },
  ],
};

const 솔레노이드 = {
  categoryName: '솔레노이드',
  mainImageList: [솔레노이드1, 솔레노이드2, 솔레노이드3],
  subCategory: [{
    name: '방폭솔레노이드',
    leftImageList: [],
    productImageList: [솔레노이드1, 솔레노이드2, 솔레노이드3]
  },
  {
    name: '가스밸브',
    leftImageList: [],
    productImageList: []
  },
  {
    name: '솔레노이드 코일',
    leftImageList: [],
    productImageList: []
  },
  {
    name: '밸브 및 코일',
    leftImageList: [],
    productImageList: []
  },
  ],
};

const 컨트롤러 = {
  categoryName: '컨트롤러',
  mainImageList: [ControllerImage],
  leftImageList: [],
  productImageList: []
};

const 인덕션 = {
  categoryName: '인덕션',
  mainImageList: [IGImage],
  leftImageList: [],
  productImageList: []
};

export const productList = [점화장치, 솔레노이드, 컨트롤러, 인덕션];