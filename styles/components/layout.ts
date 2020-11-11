import styled from 'styled-components';
import { breakpoints } from '../constants/utils';

export const Container = styled.section`
  margin: 6rem auto;
  padding: 2rem 1rem;
  max-width: 1440px;
  width: 100%;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
    margin: 4rem auto;
  }

`

