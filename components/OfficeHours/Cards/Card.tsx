import React from 'react';
import { Wrapper, ImgWrap, Body } from './styles';
import { CardButton, YellowButton } from '../../../styles/components/buttons';
import Image from 'next/image';

interface CardProps {
  image: string;
  name: string;
  description: string;
}

const Card = ({ image, name, description }: CardProps ) => {
  return (
    <Wrapper>
      <ImgWrap>
        <Image src={`/assets/images/${image}`} alt="" height={400} width={411} />
      </ImgWrap>
      <Body>
        <h1>{name}</h1>
        <p>{description}</p>
        <YellowButton>Schedule</YellowButton>
      </Body>
    </Wrapper>
  )
};

export default Card;