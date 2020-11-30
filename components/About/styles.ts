import styled from "styled-components";
import { colors } from "../../styles/constants/colors";
import { breakpoints } from "../../styles/constants/utils";

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

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
    img {
      border-radius: 0%;
      height: 230px;
    }
  }
`;

const BlueSquare = styled.div<{
  height: number;
  width: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}>`
  position: absolute;
  height: ${(props) => props.height}vh;
  width: ${(props) => props.width}vw;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  background-color: rgba(28,115,241, 0.47);

  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    bottom: ${props => props.bottom}px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    display: none;
  }

`;

const ImageWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    width: 110vw;
    overflow: hidden;
    height: auto;
  }
`

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
  MissionSteps,
  BlueSquare,
  MissionText,
  ImageWrap
};
