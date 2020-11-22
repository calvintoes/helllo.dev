import styled from "styled-components";
import { colors } from "../../styles/constants/colors";
import { breakpoints } from "../../styles/constants/utils";

export const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 97vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0 1.5rem;
  z-index: 99;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 96vw;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    width: 94vw;
    margin: 0 1rem;
  }
`;

export const Logo = styled.h1`
  color: ${colors.primaryBlue};
  font-size: 36px;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`;

export const Links = styled.div<{ size?: string,  footer?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 1rem;
    font-size: ${(props) => props.size || "18px"};

    @media only screen and (max-width: ${breakpoints.tablet}) {
      margin: 0 0.75rem;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    margin: 1rem 0;
    flex-direction: ${props => props.footer && 'column'};
    align-items: flex-start;

    a {
      margin: 0.25rem 0;
    }
  }
`;
