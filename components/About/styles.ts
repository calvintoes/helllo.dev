import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

const Wrapper = styled.div`
  margin: 2rem 5rem;
  margin-bottom: 0;

  h1 {
    font-size: 55px;
    color: ${colors.textBlack};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 3rem 2rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 5rem 1rem;
    margin-top: 8rem;
  }
`;

const Body = styled.div`
  margin: 5rem;
  font-size: 18px;
  line-height: 2rem;

  p {
    margin: 2rem 0;
  }
  a {
    color: ${colors.primaryBlue};
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 4rem 2rem;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 4rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 88px;
  text-align: center;
  color: ${colors.textBlack};
  margin-bottom: 5rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 68px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 50px;
    margin-bottom: 2rem;
  }
`;

const MissionSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 8rem 5rem;

  img {
    border-radius: 10px;
    object-fit: cover;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 8rem 2rem;
    align-items: center;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    flex-direction: column;
    margin: 6rem 0;

    img {
      border-radius: 0%;
      height: 230px;
    }
  }
`;

const MissionWrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    ${MissionSteps}:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

const AboutCircle = styled.div`
  position: absolute;
`;

const AboutCircle1 = styled(AboutCircle)`
  top: 0;
  left: 3rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    left: 0;
  }
`;

const AboutCircle2 = styled(AboutCircle)`
  top: -7rem;
  left: 8rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    left: 4rem;
  }
`;

const AboutCircle3 = styled(AboutCircle)`
  top: 33rem;
  right: 0;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: 20rem;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    top: 24rem;
  }
`;

const AboutCircle4 = styled(AboutCircle)`
  bottom: -8rem;
  left: 14rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    bottom: -4rem;
  }
`;

const AboutCircle5 = styled(AboutCircle)`
  top: 19rem;
  right: 0rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: 11rem;
  }
`;

const AboutCircle6 = styled(AboutCircle)`
  top: 16rem;
  left: 15rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: 10rem;
    left: 5rem;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    top: -3rem;
    left: 2rem;
  }
`;

const Another5 = styled(AboutCircle)`
  bottom: -6rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    bottom: -3rem;
  }
`;
const Another6 = styled(AboutCircle)`
  right: 15rem;
  top: 18rem;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: 14rem;
    right: 10rem;
  }
`;

const MissionText = styled.div`
  margin-top: -1.5rem;
  h2 {
    font-weight: 500;
    margin: 1rem 0;
  }

  p {
    width: 330px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 0;
    p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    h2 {
      font-size: 26px;
    }
  }
`;

export {
  Wrapper,
  Body,
  Title,
  MissionWrapper,
  MissionSteps,
  MissionText,
  AboutCircle1,
  AboutCircle2,
  AboutCircle3,
  AboutCircle4,
  AboutCircle5,
  AboutCircle6,
  Another5,
  Another6,
};
