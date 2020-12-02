import React from 'react';
import { Yellow, Green, BigText, BlueWrap } from './styles';

const WordRow = () => {
  return (
    <BlueWrap>
      <BigText>
        <h2>
          You know <Yellow>why</Yellow> you want to code
        </h2>
        <h2>
          We&apos;ll show you <Green>where</Green> to start
        </h2>
      </BigText>
    </BlueWrap>
  );
};

export default WordRow;
