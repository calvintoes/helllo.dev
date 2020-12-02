import React from 'react';
import { Container } from '../../styles/components/layout';
import Image from 'next/image';
import { Row, Icons } from './styles';

const IconRow = () => {
  return (
    <Container>
      <Row>
        <Icons>
          <Image src="/assets/questions.svg" alt="question mark svg" height="100%" width="100%" />
          <p>Starting can be confusing.</p>
        </Icons>
        <Icons>
          <Image
            src="/assets/select_option.svg"
            alt="person in front of six squares svg"
            height="100%"
            width="100%"
          />
          <p>There ARE many options.</p>
        </Icons>
        <Icons>
          <Image
            src="/assets/select_option2.svg"
            alt="choosing between options svg"
            height="100%"
            width="100%"
          />
          <p>but, which one is the right one?</p>
        </Icons>
      </Row>
    </Container>
  );
};

export default IconRow;
