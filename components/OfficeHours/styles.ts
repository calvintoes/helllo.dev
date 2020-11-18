import styled from 'styled-components';
import { colors } from '../../styles/constants/colors';
import { breakpoints } from '../../styles/constants/utils';

export const PeopleWrap = styled.div`
  margin: 4rem auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`