import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';


export const Title = styled.h1`
  font-size: 55px;
  letter-spacing: 1px;
  width: 530px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
    width: 350px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: calc(1440px + 10rem);
  margin: 12rem 12rem 5rem 12rem;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 4rem 0;
  }
`

export const Subtitle = styled.p`
  font-size: 22px;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 1rem 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-top: 2rem;
  }
`
export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 350px;

`

export const AboutLink = styled.div`
  display: flex;

  a {
    margin: 0 0.5rem 0 3rem;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }

  a:hover + div {
    transition: all 0.4s ease-out;
    transform: translateX(3px);
  }
`

export const BlueCircle = styled.div`
  position: absolute;
  top: -150px;
  right: -100px;
  width: 800px;
  height: 800px;
  border-radius: 100%;
  z-index: -1;
  background-color: ${colors.primaryBlue};

  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: -100px;
    right: -400px;
    width: 600px;
    height: 600px;
  }
`