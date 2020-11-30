import React, { ReactElement } from 'react';
import { HeroWrapper, Title, Subtitle, ButtonWrap, CTAWrapper, ImageWrap } from './styles';
import { Button, GreenButton } from '../../styles/components/buttons';
import { colors } from '../../styles/constants/colors';
import Link from 'next/link';
import Ticker from '../Ticker/Ticker';
import Image from 'next/image';

const Hero = (): ReactElement => {
  return (
    <>
      <HeroWrapper>
        <Title>
          <ImageWrap>
            <Image src="/assets/icons/Circles.svg" height={80} width={80} />
          </ImageWrap>
          Start Your Coding Journey <br />
          <em style={{ color: colors.primaryBlue }}>The Right Way.</em>
        </Title>
        <ButtonWrap>
          <CTAWrapper>
            <h2>Explore</h2>
            <Subtitle>
              Discover the different branches of programming that you can get into.
            </Subtitle>
            <Link href="/explore">
              <Button>Start Now</Button>
            </Link>
          </CTAWrapper>
          <CTAWrapper>
            <h2>Connect</h2>
            <Subtitle>Connect with students or industry professionals to learn more.</Subtitle>
            <Link href="/office-hours">
              <GreenButton>Schedule A Call</GreenButton>
            </Link>
          </CTAWrapper>
        </ButtonWrap>
      </HeroWrapper>
      <Ticker />
    </>
  );
};

export default Hero;
