import React from 'react';
import { SkewSmall, SkewWrapper } from './styles';

const Footer = () => {
  return (
    <SkewWrapper>
      <SkewSmall>
        Designed and Developed by {" "}
        <a href="https://calvintoes.com" target="_blank" rel="noreferrer">
          calvintoes
      </a>
      </SkewSmall>
    </SkewWrapper>
  )
};

export default Footer;