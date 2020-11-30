import React from 'react';
import { Small, PlainWrapper, HorizLine, FooterBody } from './styles';
import Link from 'next/link';
import { Links } from '../Navigation/styles';
import { useWindowSize } from '../../utils/utils';

const PlainFooter = () => {
  const size = useWindowSize();
  const showDiv = size.width! <= 414 && (<h3>Quick Links</h3>);

  return (
    <PlainWrapper>
      <HorizLine />
      <FooterBody>
        <Small>
          Designed and Developed by <br />
          <a
            href="https://calvintoes.com"
            target="_blank"
            rel="noreferrer"
          >
            calvintoes
        </a>
        </Small>
        <Links size="14px" footer>
          { showDiv }
          <Link href="/explore">Explore</Link>
          <Link href="/office-hours">Office Hours</Link>
          <Link href="/about">About</Link>
        </Links>
      </FooterBody>
    </PlainWrapper>
  );
};

export default PlainFooter;