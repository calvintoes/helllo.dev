import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    flex-direction: column;
  }
`;

export const Icons = styled.div`
  text-align: center;
  width: 33vw;
  margin: 0 3rem;

  &:nth-child(2n + 1) {
    p {
      margin-top: 10px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
  p {
    font-size: 24px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 0 2rem;

    img {
      width: 200px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 4rem auto;
    width: 300px;

    p {
      font-size: 18px;
    }
  }
`;

export const BlueWrap = styled.section`
  background-color: ${colors.primaryBlue};
  height: 640px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 500px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    padding: 0 1rem;
  }
`;

export const BigText = styled.div`
  text-align: center;
  width: 100%;

  h2 {
    font-size: 64px;
    margin: 4rem 0;
    word-spacing: 5px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 42px;
    }
  }
  @media only screen and (max-width: ${breakpoints.phone}) {
    h2 {
      font-size: 36px;
    }
  }
`;

export const Yellow = styled.span`
  color: ${colors.yellow};
  font-size: 75px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 50px;
  }

  @media only screen and (max-width: ${breakpoints.phone}) {
    font-size: 46px;
  }
`;

export const Green = styled(Yellow)`
  color: ${colors.green};
`;

export const GreenWrap = styled.section`
  background-color: ${colors.green};
  height: 360px;
  width: 100%;
  padding: 4rem 10rem;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 54px;
    font-weight: 500;
    line-height: 1.6em;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 3rem;

    h1 {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 280px;
    padding: 1.5rem;
    h1 {
      font-size: 30px;
    }
  }
`;
export const Bold = styled.span`
  font-size: 54px;
  font-weight: 700;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 46px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 36px;
  }
`;

export const WhiteTriangle = styled.div`
  position: absolute;
  bottom: -316px;
  right: -65px;
  height: 400px;
  width: 600px;
  background-color: #fff;
  transform: rotate(-15deg);

  @media only screen and (max-width: ${breakpoints.tablet}) {
    right: -200px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    right: -400px;
  }
`;
