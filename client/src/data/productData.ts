import gasFire from '@images/home4_1.jpg';
import gasFlame from '@images/gas_flame.jpg';
import flame from '@images/flame.jpg';
import fryer from '@images/fryer.jpg';
import pot from '@images/pot.jpg';
import deepFryer from '@images/deep-fryer.jpg';
import frits from '@images/frits.jpg';
import cyber from '@images/cyber.jpg';

import IGImage from '@images/ig.jpg';
import IGDesign from '@images/IG_design.jpg';
import IGSpec from '@images/IG_TABLE.jpg';

import IGBImage from '@images/igb.jpg';
import IGBDesign from '@images/IGB_design.jpg';
import IGBSpec from '@images/IGB_TABLE.jpg';

import IOImage from '@images/io.jpg';
import IODesign from '@images/IO_design.jpg';
import IOSpec from '@images/IO_TABLE.jpg';

import IgmImage from '@images/ibm1.jpg';
import IgmDesign from '@images/IGM_design.jpg';
import IGMSpec from '@images/IGM_TABLE.jpg';

import 솔레노이드1 from '@images/solenoid1.jpg';
import 솔레노이드2 from '@images/solenoid2.jpg';
import 솔레노이드3 from '@images/solenoid3.jpg';
import 솔레노이드4 from '@images/solenoid4.jpg';

import ControllerImage from '@images/controller.jpg';

import 방폭1 from '@images/bangpok1.jpg';
import 방폭사양 from '@images/bangpok_TABLE.jpg';
import 방폭 from '@images/bangpok.jpg';

import 컨트롤러사양 from '@images/CTR_TABLE.jpg';

import kitchen from '@images/kitchen.jpg';

import 인덕션사진 from '@images/induction.png';
import 인덕션사양 from '@images/induction_TABLE.jpg';
import induction_4x4 from '@images/induction_4x4.png';
import induction_5x5 from '@images/induction_5x5.png';
import induction_big from '@images/induction_big.png';
import induction_small from '@images/induction_small.png';

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
  mainImageList: [방폭, 솔레노이드1, 솔레노이드2, 솔레노이드3, 솔레노이드4],
  leftImageList: [fryer, frits, deepFryer],
  subCategory: [{
    name: '방폭솔레노이드',
    imageList: [방폭, 방폭사양]
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
  leftImageList: [ induction_big, induction_small, kitchen, induction_4x4, induction_5x5],
  imageList: [인덕션사진, 인덕션사양],
  subCategory: undefined
};

export const productList = [점화장치, 솔레노이드, 컨트롤러, 인덕션];