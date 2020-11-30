import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const SkewWrapper = styled.footer`
  height: 120px;
  width: 100%;
  bottom: 0;
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 100px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 80px;
  }
`;

export const Skew = styled.div`
  height: 200px;
  width: 105%;
  background-color: ${colors.primaryBlue};
  transform: rotate(-3deg);
  margin-top: 60px;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    transform: rotate(-3.5deg);
    height: 150px;
    margin-top: 60px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 80px;
    margin-top: 45px;
  }
`;

export const Small = styled.p`
  color: #222222;

  a {
    color: ${colors.primaryBlue};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 16px;
  }
`;

export const SkewSmall = styled(Small)`
  position: absolute;
  top: 0.75rem;
  right: 10rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    right: 4rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    top: 4px;
    right: 2rem;
    font-size: 14px;
  }
`;

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
`;

export const HorizLine = styled.hr`
  color: #7a7a7a;
  border: 1px solid;
  width: 100%;
`;

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
`;
