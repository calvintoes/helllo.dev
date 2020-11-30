import styled from 'styled-components';
import { breakpoints } from '../../styles/constants/utils';

export const Wrapper = styled.div`
  margin: 1rem 0;

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    display: none;
  }
`;

export const Word = styled.p`
  color: #898989;
  font-size: 20px;
  width: 100%;
  transition: transform 0.25s ease-out;
  margin: 0 2rem;

  &:hover {
    transform: scale(1.2);
    cursor: default;
    color: #90beff;
  }
`;
