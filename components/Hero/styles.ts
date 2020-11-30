import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const HeroWrapper = styled.div`
  padding: 0 1rem;
  max-width: calc(1440px + 10rem);
  margin: 10rem auto;
  margin-bottom: 4rem;
  text-align: center;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 8rem auto;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 0 auto;
    margin-top: 5rem;
  }
`;

export const CTAWrapper = styled.div`
  max-width: 300px;
  padding: 1rem;
  margin-top: 4rem;

  h2 {
    color: #272727;
    font-size: 36px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 4rem;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    flex-direction: column;
    margin: 0;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 65px;
  letter-spacing: 1px;
  margin: 0 auto;
  width: 80%;
  position: relative;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  max-width: 280px;
  margin: 0.5rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-top: 2rem;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 15px;
    margin-top: 1rem;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  top: -4rem;
  left: 3rem;
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    top: -2rem;
    left: 0;
    z-index: -1;
  }
`;
