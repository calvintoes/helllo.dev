import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const PeopleWrap = styled.div`
  margin: 1rem auto 5rem auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`

export const HeroWrapper = styled.div`
  margin: 2rem 5rem;
  h1 {
    font-size: 55px;
    color: ${colors.textBlack};
  }

  p {
    color: #1E1E1E;
    width: 540px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 5rem 0rem;
    margin-bottom: 2rem;

    h1 {
      font-size: 48px;
    }
    p {
      font-size: 15px;
      width: 92%;
    }
  }
`

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

`

export const ResultWrap = styled.div`
  max-width: calc(1440px - 8rem);
  margin: 0 auto;
`