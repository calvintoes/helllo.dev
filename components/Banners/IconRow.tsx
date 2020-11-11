import React from 'react';
import { QUESTIONS, SELECT_OPTION, SELECT_OPTION2 } from '../../assets/images';
import { Container } from '../../styles/components/layout';
import { Row, Icons } from './styles';

const IconRow = () => {
  return (
    <Container>
      <Row>
        <Icons>
          <img src={QUESTIONS} alt="question mark svg" />
          <p>Starting can be confusing.</p>
        </Icons>
        <Icons>
          <img src={SELECT_OPTION} alt="person in front of six squares svg" />
          <p>There ARE many options.</p>
        </Icons>
        <Icons>
          <img src={SELECT_OPTION2} alt="choosing between options svg" />
          <p>but, which one is the right one?</p>
        </Icons>
      </Row>
    </Container>
  )
};

export default IconRow;