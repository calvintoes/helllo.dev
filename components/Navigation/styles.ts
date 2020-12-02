import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    padding: 0 1rem;
  }
`;

export const MobileWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.a`
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`;

export const MobileLogo = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${colors.primaryBlue};
`;

export const Links = styled.div<{ size?: string; footer?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 1rem;
    font-size: ${props => props.size || '18px'};

    @media only screen and (max-width: ${breakpoints.tablet}) {
      margin: 0 0.75rem;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 1rem 0;
    flex-direction: ${props => props.footer && 'column'};
    align-items: flex-start;

    a {
      margin: 0.25rem 0;
    }
  }
`;
