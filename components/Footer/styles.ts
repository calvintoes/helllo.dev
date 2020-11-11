import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const Wrapper = styled.footer`
  height: 200px;
  width: 100%;
  position: relative;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 150px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 80px;
  }
`

export const Small = styled.p`
  color: ${colors.darkGray};
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 42vw;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    left: 32vw;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    left: 20vw;
    font-size: 14px;
  }
`