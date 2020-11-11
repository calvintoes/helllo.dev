import React from 'react';
import { Small, Wrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Small>
        Designed and Developed by {" "}
        <a href="https://calvintoes.com" target="_blank" rel="noreferrer">
          calvintoes
      </a>
      </Small>
    </Wrapper>
  )
};

export default Footer;