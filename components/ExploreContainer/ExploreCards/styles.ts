import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  margin: 0.75rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  height: 450px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
    background-color: ${colors.darkGray};
    transition: all 0.35s ease-in;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 300px;
    padding: 1rem;
  }
`

export const Title = styled.h1`
  width: 320px;
  font-size: 36px;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    width: 180px;
  }
`

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  p {
    margin-right: 0.15rem;
  }

  img {
    height: 18px;
    width: auto;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
export const Text = styled.div`
  margin-bottom: 1rem;
`