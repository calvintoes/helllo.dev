import React from 'react';
import { PeopleWrap } from './styles';
import Card from './Cards/Card';
import { Container } from '../../styles/components/layout';

const Results = ({ data }: { data: Array<Object> }) => {
  console.log(data);


  return (
    <Container>
      <PeopleWrap>
        {
          data.map((person: any) => {
            const { name } = person;
            return (
              <Card key={name} {...person} />
            )
          })
        }
      </PeopleWrap>
    </Container>
  )
}

export default Results;
