import React from 'react';
import { Wrapper, Title, Subtitle, Text } from './styles';
import { connectHits } from 'react-instantsearch-dom';
import { RIGHT_ARROW } from '../../../assets/icons';


const Card = ({ name }: any) => {
  return (
    <Wrapper>
      <Text>
        <Title>{name}</Title>
        <Subtitle>
          <p>See More</p>
          <img src={RIGHT_ARROW} alt="right chevron"/>
        </Subtitle>
      </Text>
    </Wrapper>
  );
};

export default connectHits(Card);