import React, { useState } from 'react';
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

const Results = ({ data }: ResultsProp) => {

  const [filter, setFilter] = useState('all');

  const peopleProps = {
    data,
    handleFilter(tag: string) {
      setFilter(tag);
    }
  };

  const filteredList = () => {

    let list;

    if (filter === "Student" || filter === "Professional") {
      list = data.filter(p => p.tag === filter).map((person: any) => {
        const { name } = person;
        return (
          <Card key={name} {...person} />
        )
      })
    } else {
      list = data.map((person: any) => {
        const { name } = person;
        return (
          <Card key={name} {...person} />
        )
      })
    }

    return list;
  };

  return (
    <ResultWrap>
      <FilterBar {...peopleProps} />
      <PeopleWrap>
        {filteredList()}
      </PeopleWrap>
    </ResultWrap>
  )
}

export default Results;
