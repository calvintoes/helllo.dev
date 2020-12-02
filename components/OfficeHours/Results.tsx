import React, { ReactElement, useState } from 'react';
import { PeopleWrap, ResultWrap } from './styles';
import Card from './Cards/Card';
import FilterBar from './FilterBar';

interface People {
  name: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

interface ResultsProp {
  data: People[];
}

const Results = ({ data }: ResultsProp): ReactElement => {
  const [filter, setFilter] = useState('all');

  const peopleProps = {
    handleFilter(tag: string) {
      setFilter(tag);
    },
  };

  const filteredList = () => {
    if (filter === 'Student' || filter === 'Professional') {
      return data
        .filter(p => p.tag === filter)
        .map((person: People) => {
          const { name } = person;
          return <Card key={name} {...person} />;
        });
    } else {
      return data.map((person: People) => {
        const { name } = person;
        return <Card key={name} {...person} />;
      });
    }
  };

  return (
    <ResultWrap>
      <FilterBar {...peopleProps} />
      <PeopleWrap>{filteredList()}</PeopleWrap>
    </ResultWrap>
  );
};

export default Results;
