import React from 'react'
import { Container } from '../../styles/components/layout';
import { HeroWrapper } from './styles';

const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <h1>Office Hours</h1>
        <p>
          Schedule a call to chat with current students or industry professionals to learn
          more about the branch of programming you’re looking into.
        </p>
      </HeroWrapper>
    </Container>
  )
};

export default Hero;
