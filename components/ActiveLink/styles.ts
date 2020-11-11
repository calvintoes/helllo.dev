import styled from "styled-components";
import { colors } from "../../styles/constants/colors";

const borderStyle = `3px solid ${colors.primaryBlue}`;

export const Anchor = styled.a<{ active: boolean }>`
  font-weight: ${props => props.active && 700};
  border-bottom: ${props => props.active && borderStyle}
`;
