import React from 'react';
import { Container } from '../../styles/components/layout';
import { Wrapper, BigText, ImageWrap } from './styles';
import Fade from 'react-reveal';
import Image from 'next/image';

const Instructions = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Helllo works in two simple steps:</h2>
        <h3>
          <BigText>Search</BigText>
          {" "}and{" "}
          <BigText>Explore</BigText>
        </h3>
        <Fade left duration={500} distance="80px">
          <ImageWrap>
            <Image src="/assets/search.svg" alt="search bar svg" height="100%" width="100%" />
            <p>Type in something that you're interested in</p>
          </ImageWrap>
        </Fade>
        <Fade right duration={500} distance="80px">
          <ImageWrap>
            <Image src="/assets/results.svg" alt="results page svg" height="100%" width="100%" />
            <p>Look through the results for the different branches of programming you can go into.</p>
          </ImageWrap>
        </Fade>
      </Wrapper>
    </Container>
  );
};

export default Instructions;