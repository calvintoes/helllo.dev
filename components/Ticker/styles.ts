import styled from "styled-components";
import { colors } from "../../styles/constants/colors";

export const Wrapper = styled.div`
  margin: 2rem 0;

`;


export const Word = styled.p`
  color: ${colors.gray};
  font-size: 18px;
  width: 100%;
  transition: all 0.25s ease-out;
  margin: 0 2rem;

  &:hover {
    transform: scale(1.2);
    cursor: default;
    color: ${colors.black};
  }
`;
