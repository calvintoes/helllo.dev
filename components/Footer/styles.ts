import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const SkewWrapper = styled.footer`
  height: 200px;
  width: 105%;
  position: relative;
  background-color: #fff;
  transform: rotate(-3.5deg);
  margin-top: 10.5rem;
  margin-left: 0.25rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 150px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 80px;
  }
`

export const Small = styled.p`
  color: ${colors.textBlack};

  a {
    color: ${colors.primaryBlue}
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 16px;
  }
`

export const SkewSmall = styled(Small)`
  position: absolute;
  top: 0.75rem;
  right: 10rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    left: 32vw;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    left: 20vw;
    font-size: 14px;
  }
`

export const PlainWrapper = styled.footer`
  height: 130px;
  width: 100%;
  padding: 2rem 4rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 14px;
  }
`

export const HorizLine = styled.hr`
  color: #7A7A7A;
  border: 1px solid;
  width: 100%;
`

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    padding: 0.5rem;
    flex-direction: column;
  }
`