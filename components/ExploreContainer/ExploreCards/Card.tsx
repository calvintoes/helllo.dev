import React from 'react';
import { Wrapper, Title, Subtitle, Text } from './styles';
import { connectHits } from 'react-instantsearch-dom';
import Image from 'next/image';

const Card = ({ name }: any) => {
  return (
    <Wrapper>
      <Text>
        <Title>{name}</Title>
        <Subtitle>
          <p>See More</p>
          <Image src="/assets/icons/chevron-right.svg" alt="right chevron" height={24} width={24} />
        </Subtitle>
      </Text>
    </Wrapper>
  );
};

export default connectHits(Card);
