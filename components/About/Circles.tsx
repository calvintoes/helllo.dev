import React, { ReactElement } from 'react';
import {
  AboutCircle1,
  AboutCircle2,
  AboutCircle3,
  AboutCircle4,
  AboutCircle5,
  AboutCircle6,
  Another5,
  Another6,
} from './styles';
import {
  ABOUTCIRCLE1,
  ABOUTCIRCLE2,
  ABOUTCIRCLE3,
  ABOUTCIRCLE4,
  ABOUTCIRCLE5,
  ABOUTCIRCLE6,
} from '../../assets/';

const Circles = (): ReactElement => {
  return (
    <div className="svg-circles">
      <AboutCircle1>
        <img src={ABOUTCIRCLE1} alt="circle svg icon" />
      </AboutCircle1>
      <AboutCircle2>
        <img src={ABOUTCIRCLE2} alt="circle svg icon" />
      </AboutCircle2>
      <AboutCircle3>
        <img src={ABOUTCIRCLE3} alt="circle svg icon" />
      </AboutCircle3>
      <AboutCircle4>
        <img src={ABOUTCIRCLE4} alt="circle svg icon" />
      </AboutCircle4>
      <AboutCircle5>
        <img src={ABOUTCIRCLE5} alt="circle svg icon" />
      </AboutCircle5>
      <AboutCircle6>
        <img src={ABOUTCIRCLE6} alt="circle svg icon" />
      </AboutCircle6>
      <Another5>
        <img src={ABOUTCIRCLE5} alt="circle svg icon" />
      </Another5>
      <Another6>
        <img src={ABOUTCIRCLE6} alt="circle svg icon" />
      </Another6>
    </div>
  );
};

export default Circles;
