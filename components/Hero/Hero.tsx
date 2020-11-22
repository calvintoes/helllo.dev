import React from 'react';
import { Wrapper, Title, Subtitle, ButtonWrap, AboutLink, BlueCircle } from './styles';
import { Button } from '../../styles/components/buttons';
import Link from 'next/link';
import Ticker from '../Ticker/Ticker';
import Image from 'next/image';


const Hero = () => {
  return (
    <>
      <BlueCircle />
      <Wrapper>
        <Title>
          Start Your Coding Journey <br />
          <em>The Right Way.</em>
        </Title>
        <Subtitle>
          Search based on your interest to discover the different branches of programming that you can get into.
        </Subtitle>
        <ButtonWrap>
          <Link href="/explore">
            <Button>
              Explore
            </Button>
          </Link>
          <AboutLink>
            <Link href="/about">
              About
            </Link>
            <Image src="/assets/icons/chevron-right.svg" height={16} width={16} />
          </AboutLink>
        </ButtonWrap>
      </Wrapper>
      <Ticker />
    </>
  )
}

export default Hero;