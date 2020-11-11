import styled from 'styled-components';
import { breakpoints } from '../../styles/constants/utils';


export const Title = styled.h1`
  font-size: 88px;
  letter-spacing: -2px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 62px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 1024px;
  margin: 12rem auto;
  text-align: center;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 4rem auto;
  }
`

export const Span = styled.span`
  font-family: 'Source Code Pro', monospace;
  letter-spacing: -2px;
  font-weight: 500;
`

export const Subtitle = styled.p`
  font-size: 24px;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 1rem auto;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-top: 2rem;
  }
`
