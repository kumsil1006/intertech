import gasFire from '@images/home4_1.jpg';
import gasFlame from '@images/gas_flame.jpg';
import flame from '@images/flame.jpg';
import fryer from '@images/fryer.jpg';
import pot from '@images/pot.jpg';
import deepFryer from '@images/deep-fryer.jpg';
import frits from '@images/frits.jpg';
import cyber from '@images/cyber.jpg';

import IGImage from '@images/IG 사진.jpg';
import IGDesign from '@images/IG 도면.jpg';
import IGSpec from '@images/IG-사양.jpg';

import IGBImage from '@images/igb1.jpg';
import IGBDesign from '@images/IGB 도면.jpg';
import IGBSpec from '@images/IGB-사양.jpg';

import IOImage from '@images/io1.jpg';
import IODesign from '@images/IO 도면.jpg';
import IOSpec from '@images/IO-사양.jpg';

import IgmImage from '@images/ibm1.jpg';
import IgmDesign from '@images/IGM 도면.jpg';
import IGMSpec from '@images/IGM-사양.jpg';

import 솔레노이드1 from '@images/솔레노이드1.jpg';
import 솔레노이드2 from '@images/솔레노이드2.jpg';
import 솔레노이드3 from '@images/솔레노이드3.jpg';

import ControllerImage from '@images/컨트롤러1.jpg';

import 방폭1 from '@images/방폭1.jpg';
import 방폭2 from '@images/방폭2.jpg';
import 방폭3 from '@images/방폭3.jpg';

import 컨트롤러사양 from '@images/컨트롤러-사양.jpg';
import 인덕션사양 from '@images/인덕션-사양.jpg';
import 인덕션사진 from '@images/인덕션.png';
import 방폭사양 from '@images/방폭-사양.jpg';

import kitchen from '@images/kitchen.jpg';

const 점화장치 = {
  categoryName: '점화장치',
  mainImageList: [IOImage, IGImage, IGBImage, IgmImage],
  leftImageList: [gasFlame, gasFire, pot],
  subCategory: [{
    name: 'IO 시리즈',
    imageList: [IOImage, IODesign, IOSpec],
  },
  {
    name: 'IG 시리즈',
    imageList: [IGImage, IGDesign, IGSpec],
  },
  {
    name: 'IGB 시리즈',
    imageList: [IGBImage, IGBDesign, IGBSpec],
  },
  {
    name: 'IGM 시리즈',
    imageList: [IgmImage, IgmDesign, IGMSpec],
  },
  ],
};

const 솔레노이드 = {
  categoryName: '솔레노이드',
  mainImageList: [방폭1, 솔레노이드1, 솔레노이드2, 솔레노이드3],
  leftImageList: [fryer, frits, deepFryer],
  subCategory: [{
    name: '방폭솔레노이드',
    imageList: [방폭1, 방폭사양]
  },
  {
    name: '가스밸브',
    imageList: [솔레노이드2],
  },
  {
    name: '솔레노이드 코일',
    imageList: [솔레노이드3],
  },
  {
    name: '밸브 및 코일',
    imageList: [솔레노이드1],
  },
  ],
};

const 컨트롤러 = {
  categoryName: '컨트롤러',
  mainImageList: [ControllerImage],
  leftImageList: [cyber, flame],
  imageList: [ControllerImage, 컨트롤러사양],
  subCategory: undefined
};

const 인덕션 = {
  categoryName: '인덕션',
  mainImageList: [인덕션사진],
  leftImageList: [kitchen],
  imageList: [인덕션사진, 인덕션사양],
  subCategory: undefined
};

export const productList = [점화장치, 솔레노이드, 컨트롤러, 인덕션];