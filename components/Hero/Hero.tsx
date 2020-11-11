import React from 'react';
import { Wrapper, Title, Span, Subtitle } from './styles';
import { Button } from '../../styles/components/buttons';
import Link  from 'next/link';
import Ticker from '../Ticker/Ticker';


const Hero = () => {
  return (
    <>
      <Wrapper>
        <Title>
          The{" "}
          <Span>Code</Span>
          {" "}is Your Oyster
        </Title>
          <Subtitle>
            Helllo helps you find the track to start your journey the right way.
        </Subtitle>
        <Link href="/explore">
          <Button>
            Explore
          </Button>
        </Link>
      </Wrapper>
      <Ticker />
    </>
  )
}

export default Hero;