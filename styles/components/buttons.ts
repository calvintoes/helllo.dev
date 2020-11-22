import styled from "styled-components";
import { colors } from "../constants/colors";
import { breakpoints } from '../constants/utils';

export const Button = styled.button`
  background-color: ${colors.yellow};
  border-radius: 12px;
  border: none;
  margin: 0.5rem 0;
  max-width: 200px;
  padding: 1rem 3rem;
  font-size: 20px;
  cursor: pointer;
  color: ${colors.textBlack};
  font-weight: 700;

  &:hover {
    background-color: ${colors.yellowClicked};
  }

  &:active {
    background-color: ${colors.yellowClicked};
    color: #362F2F;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {

  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {

  }
`;

export const CardButton = styled(Button)`
  max-width: 170px;
  padding: 0 2rem;
  height: 50px;
  cursor: pointer;
  color: #5C5553;
`