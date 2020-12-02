import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.25);
  height: 350px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
    /* background-color: ${colors.darkGray}; */
    transition: all 0.25s ease-in;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 300px;
    width: 350px;
    padding: 1rem;
    margin: 0.25rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 0.25rem 0;
    height: 200px;
  }
`;

export const Title = styled.h1`
  width: 320px;
  font-size: 34px;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  line-height: 2.5rem;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    width: 100%;
  }
  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin-bottom: 0;
  }
`;

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
    transition: all 0.4s;
  }

  p:hover + div {
    transition: all 0.4s ease-in;
    transform: translateX(6px);
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;
export const Text = styled.div`
  margin-bottom: 1rem;
`;
