import React from 'react';
import { Container } from '../../styles/components/layout';
import { Wrapper, BigText, Image } from './styles';
import { SEARCH, RESULTS } from '../../assets/images';
import Fade from 'react-reveal';

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
          <Image>
            <img src={SEARCH} alt="search bar svg" />
            <p>Type in something that you're interested in</p>
          </Image>
        </Fade>
        <Fade right duration={500} distance="80px">
          <Image>
            <img src={RESULTS} alt="results page svg" />
            <p>Look through the results for the different branches of programming you can go into.</p>
          </Image>
        </Fade>
      </Wrapper>
    </Container>
  );
};

export default Instructions;