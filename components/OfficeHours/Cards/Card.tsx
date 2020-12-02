import React, { ReactElement } from 'react';
import { Wrapper, ImgWrap, Body } from './styles';
import { YellowButton } from '../../../styles/components/buttons';
import Image from 'next/image';

interface CardProps {
  image: string;
  name: string;
  description: string;
  title: string;
}

const Card = ({ image, name, title, description }: CardProps): ReactElement => {
  return (
    <Wrapper>
      <ImgWrap>
        <Image src={`/assets/images/${image}`} alt="" height={400} width={411} />
      </ImgWrap>
      <Body>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <p>{description}</p>
        <YellowButton>Schedule</YellowButton>
      </Body>
    </Wrapper>
  );
};

export default Card;
