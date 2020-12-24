import React, { ReactElement } from 'react';
import { Container } from '../../styles/components/layout';
import { Wrapper, Body } from './styles';

const description = `helllo.dev was born from a late night discussion about how we chose the majors we had in
college. We realized that the average computer science student would spend at most the first two years of
college to figure out what they want to do with coding and those two years would determine a very
important pivot in their life. So wouldn’t it be nice to have something to help “expedite”
that process or at least increase awareness to the different possibilities.`;

const Hero = (): ReactElement => {
  return (
    <Container>
      <Wrapper>
        <h1>About</h1>
      </Wrapper>
      <Body>
        <h3>Hi there 👋</h3>
        <p>{description}</p>
        <p>
          If you would like to contribute, please reach out to me
          <a href="https://calendly.com/calvinto" target="_blank" rel="noreferrer">
            {' '}
            here
          </a>
          .
        </p>
      </Body>
    </Container>
  );
};

export default Hero;
