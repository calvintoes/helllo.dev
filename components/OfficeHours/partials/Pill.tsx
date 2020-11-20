import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';

const Wrapper = styled.a<{ active: boolean }>`
  height: 40px;
  padding: 0.5rem 0.75rem;
  margin: 0 2rem;
  background-color: ${props => props.active && colors.green};
  color: ${props => props.active ? '#111' : colors.textBlack} ;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
`

interface PillProps {
  filterName: string;
  active: string;
  onClick: (e: any) => void;
}

const Pill = ({ filterName , active, onClick }: PillProps) => {
  return (
    <Wrapper active={!!active} onClick={onClick}>
      {filterName}
    </Wrapper>
  )
};

export default Pill;
