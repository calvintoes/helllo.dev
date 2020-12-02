import React, { ReactElement } from 'react';
import { Title, HitWrapper, SearchWrapper } from './styles';
import { Container } from '../../styles/components/layout';
import { Hits } from 'react-instantsearch-dom';
import Card from './ExploreCards/Card';
import SearchBar from './SearchBar/SearchBar';

interface HitProps {
  hit: Record<string, unknown>;
}

const Hero = (): ReactElement => {
  const Hit = ({ hit }: HitProps) => <Card {...hit} />;

  return (
    <Container>
      <Title>I am interested in ...</Title>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <HitWrapper>
        <Hits hitComponent={Hit} />
      </HitWrapper>
    </Container>
  )
};

export default Hero;