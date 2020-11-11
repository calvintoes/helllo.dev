import styled from "styled-components";
import { breakpoints } from '../../styles/constants/utils';

export const Wrapper = styled.div`
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 36px;
  }

  h3 {
    font-size: 54px;
    font-weight: 500;
    margin: 4rem 0;
    word-spacing: 5px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 20px;
    }
  }

`;

export const BigText = styled.span`
  font-size: 88px;
  letter-spacing: 2px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 64px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 36px;
  }

`;

export const Image = styled.div`
  max-width: 600px;
  height: auto;
  margin: 8rem auto;

  @media only screen and (max-width: ${breakpoints.phone}) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    max-width: 500px;
    margin: 0 auto;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    p {
      max-width: 340px;
    }
  }
`;
