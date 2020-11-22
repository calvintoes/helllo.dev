import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  height: 715px;
  width: 411px;
  background-color: #fff;
  transition: all 0.4s;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 650px;
    width: 365px;
  }
`

export const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;


  img {
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
`

export const Body = styled.div`
  margin-top: 400px;
  h1 {
    font-size: 30px;
    color: ${colors.textBlack}
  }

  p {
    color: #1e1e1e;
    width: 100%;
    margin-top: 0.5rem;
  }

  button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin-top: 350px;
  }
`
