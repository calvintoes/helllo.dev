import styled from "styled-components";
import { breakpoints } from "../../styles/constants/utils";

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 500;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 36px;
  }
`;

export const HitWrapper = styled.div`
  margin: 4rem 0;

  .ais-Hits-list {
    list-style: none;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    li {
      justify-self: stretch;
    }

  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);

  }

`;

export const SearchWrapper = styled.div`
  margin: 4rem 0;

`;
