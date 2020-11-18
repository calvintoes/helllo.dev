import styled from "styled-components";
import { colors } from "../../styles/constants/colors";


export const Anchor = styled.a<{ active: boolean }>`
  font-weight: ${props => props.active && 700};
  color: ${props => props.active && colors.primaryBlue}
`;
