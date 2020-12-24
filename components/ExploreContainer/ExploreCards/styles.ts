import styled from 'styled-components';
import { breakpoints } from '../../../styles/constants/utils';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  border-radius: 10px;
  height: 350px;
  cursor: pointer;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e0f0ff 99.48%);
  overflow: hidden;

  .background-image {
    z-index: -1;
    object-fit: cover;
    filter: grayscale(100%);
  }

  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fafafa 99.48%);
    transition: background 0.3s ease-in;

    .background-image {
      transform: scale(1.05);
      transition: all 0.25s ease-in-out;
      filter: grayscale(0);
    }
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
  width: 300px;
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
  z-index: 1;
`;
