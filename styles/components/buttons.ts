import styled from 'styled-components';
import { colors } from '../constants/colors';
import { breakpoints } from '../constants/utils';

export const Button = styled.button`
  background-color: ${colors.primaryBlue};
  border-radius: 12px;
  border: none;
  margin: 0.5rem 0;
  width: 180px;
  padding: 1rem 0.5rem;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: ${colors.blueClicked};
  }

  &:active {
    background-color: ${colors.blueClicked};
    color: #362f2f;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 0.75rem 2.5rem;
    font-size: 18px;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
  }
`;

export const YellowButton = styled(Button)`
  background-color: ${colors.yellow};
  &:hover {
    background-color: ${colors.yellowClicked};
  }
  &:active {
    background-color: ${colors.yellowClicked};
  }
`;

export const GreenButton = styled(Button)`
  background-color: ${colors.green};
  &:hover {
    background-color: ${colors.greenClicked};
  }
  &:active {
    background-color: ${colors.greenClicked};
  }
`;
