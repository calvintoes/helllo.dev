import React, { ReactElement } from 'react';
import { Container } from '../../styles/components/layout';
import { HeroWrapper } from './styles';
import CompanyLogos from './partials/CompanyLogos';

const Hero = (): ReactElement => {
  return (
    <Container>
      <CompanyLogos />
      <HeroWrapper>
        <h1>Office Hours</h1>
        <p>
          Schedule a call to chat! Here are students and full time developers who would love to help
          you with choosing the best path.
        </p>
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
