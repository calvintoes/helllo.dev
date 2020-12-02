import React from 'react';
import { Bold, GreenWrap, WhiteTriangle } from './styles';
import { Button } from '../../styles/components/buttons';
import Link from 'next/link';

const ActionRow = () => {
  return (
    <GreenWrap>
      <h1>
        Start your coding journey,
        <br />
        <Bold>the right way.</Bold>
      </h1>
      <Link href="/explore">
        <Button>Start now</Button>
      </Link>
      <WhiteTriangle />
    </GreenWrap>
  );
};

export default ActionRow;
