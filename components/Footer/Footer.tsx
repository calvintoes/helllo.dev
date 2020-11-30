import React, { FC, ReactElement } from 'react';
import { SkewSmall, SkewWrapper, Skew } from './styles';

const Footer: FC = (): ReactElement => {
  return (
    <SkewWrapper>
      <Skew>
        <SkewSmall>
          Designed and Developed by{' '}
          <a
            href="https://calvintoes.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white' }}
          >
            calvintoes
          </a>
        </SkewSmall>
      </Skew>
    </SkewWrapper>
  );
};

export default Footer;
