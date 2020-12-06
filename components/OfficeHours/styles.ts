import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const PeopleWrap = styled.div`
  margin: 1rem auto 5rem auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`;

export const HeroWrapper = styled.div`
  position: relative;
  margin: 2rem 5rem;
  h1 {
    font-size: 55px;
    color: ${colors.textBlack};
  }

  p {
    color: #1e1e1e;
    width: 440px;
    font-size: 18px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 8rem 0 2rem 0;

    h1 {
      font-size: 48px;
    }
    p {
      font-size: 15px;
      width: 92%;
    }
  }
`;

export const FilterWrap = styled.div`
  height: 65px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 95%;
  }
`;

export const ResultWrap = styled.section`
  max-width: calc(1440px - 8rem);
  margin: 0 auto;
`;

export const CompanyWrapper = styled.div`
  width: 95%;
  height: 380px;
  position: absolute;
  overflow: hidden;
  margin: 0 2rem;
  top: 7rem;
  left: 0;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin: 0;
    width: 100%;
    height: 325px;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    height: 275px;
    top: 5rem;
  }
`;

interface Sizes {
  lg: IMGLocation;
  md: IMGLocation;
  sm: IMGLocation;
}

interface IMGLocation {
  top?: string | undefined;
  right?: string | undefined;
  bottom?: string | undefined;
  left?: string | undefined;
  height: string;
}

export const LogoWrap = styled.div<{
  sizes: Sizes;
}>`
  position: absolute;
  top: ${props => props.sizes.lg.top};
  right: ${props => props.sizes.lg.right};
  bottom: ${props => props.sizes.lg.bottom};
  left: ${props => props.sizes.lg.left};

  img {
    height: ${props => props.sizes.lg.height};
    width: auto;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    top: ${props => props.sizes.md.top};
    right: ${props => props.sizes.md.right};
    bottom: ${props => props.sizes.md.bottom};
    left: ${props => props.sizes.md.left};

    img {
      height: ${props => props.sizes.md.height};
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    position: absolute;
    top: ${props => props.sizes.sm.top};
    right: ${props => props.sizes.sm.right};
    bottom: ${props => props.sizes.sm.bottom};
    left: ${props => props.sizes.sm.left};

    img {
      height: ${props => props.sizes.sm.height};
    }
  }
`;
