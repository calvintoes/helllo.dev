import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/constants/colors';
import { breakpoints } from '../../../styles/constants/utils';

const Wrapper = styled.a<{ active: boolean }>`
  height: 40px;
  padding: 0.5rem 1.5rem;
  margin: 0 2rem;
  background-color: ${props => props.active && colors.green};
  color: ${props => props.active ? '#111' : colors.textBlack} ;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background-color 0.45s;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    padding: 0.25rem 1rem;
    height: 32px;
    margin: 0 1rem;
  }

  @media only screen and (max-width: ${breakpoints.phoneL}) {
    font-size: 15px;
  }
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
