import styled from "styled-components";
import { colors } from "../constants/colors";
import { breakpoints } from '../constants/utils';

export const Button = styled.button`
  background-color: ${colors.yellow};
  border-radius: 12px;
  border: none;
  margin: 0.5rem auto;
  max-width: 200px;
  padding: 1rem 3rem;
  font-size: 20px;
  box-shadow: 0 5px 15px 0 ${colors.yellow};
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px 0 ${colors.yellow};
    transform: translateY(2px);
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {

  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {

  }
`;
