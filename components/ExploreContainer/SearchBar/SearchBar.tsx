import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Input, Wrapper } from './styles';
import PoweredBy from '../PoweredBy/PoweredBy';

interface SearchBarProps {
  currentRefinement: string;
  refine: (prop: string) => void;
}

const SearchBar = ({ currentRefinement, refine }: SearchBarProps) => {
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <Wrapper>
      <form>
        <Input
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          placeholder="Websites"
          onKeyDown={e => handleKeyDown(e)}
        />
        <PoweredBy />
      </form>
    </Wrapper>
  );
};

export default connectSearchBox(SearchBar);
