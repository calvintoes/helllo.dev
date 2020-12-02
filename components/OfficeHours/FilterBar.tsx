import React, { ReactElement, useState } from 'react';
import { FilterWrap } from './styles';
import Pill from './partials/Pill';
interface FilterBarProps {
  handleFilter: (tag: string) => void;
}

const FilterBar = ({ handleFilter }: FilterBarProps): ReactElement => {
  const [all, setAll] = useState('active');
  const [student, setStudent] = useState('');
  const [professional, setProfessional] = useState('');

  const handleOnClick = (e: any) => {
    handleFilter(e.target.innerHTML);

    if (e.target.innerHTML === 'All') {
      setAll('active');
      setStudent('');
      setProfessional('');
    } else if (e.target.innerHTML === 'Student') {
      setStudent('active');
      setAll('');
      setProfessional('');
    } else {
      setProfessional('active');
      setStudent('');
      setAll('');
    }
  };

  return (
    <FilterWrap>
      <Pill filterName={'All'} onClick={e => handleOnClick(e)} active={all} />
      <Pill filterName={'Student'} onClick={e => handleOnClick(e)} active={student} />
      <Pill filterName={'Professional'} onClick={e => handleOnClick(e)} active={professional} />
    </FilterWrap>
  );
};

export default FilterBar;
