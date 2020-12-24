import styled from 'styled-components';
import { breakpoints } from '../../styles/constants/utils';
import { colors } from '../../styles/constants/colors';

export const Title = styled.h1`
  margin-top: 5rem;
  font-size: 50px;
  text-align: center;
  font-weight: 700;
  color: ${colors.textBlack};

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 36px;
    margin-top: 8rem;
  }
`;

export const HitWrapper = styled.div`
  margin: 4rem auto;
  max-width: 1024px;

  .ais-Hits {
    &-list {
      list-style: none;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, 330px);
      grid-gap: 1rem;

      li {
        justify-self: stretch;
      }
    }
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    .ais-Hits-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    .ais-Hits-list {
      flex-direction: column;
      grid-gap: 0;
      width: 100%;
    }
  }
`;

export const SearchWrapper = styled.div`
  margin: 4rem 0;
`;
