import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';

export const Anchor = styled.a<{ active: boolean; mobile: boolean | undefined }>`
  font-weight: ${props => props.active && 700};
  color: ${props => props.active && colors.primaryBlue};
  margin: ${props => props.mobile && '1rem 0'};
  font-size: ${props => props.mobile && '24px'};
`;
