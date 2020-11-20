import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0 2rem;
`

export const Logo = styled.h1`
  color: ${colors.logoBlue};
  font-size: 36px;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 1rem;
    font-size: 18px;


    @media only screen and (max-width: ${breakpoints.tablet}) {
      margin: 0 0.75rem;
      font-size: 16px;
    }
  }



`
