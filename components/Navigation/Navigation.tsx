import React, { ReactElement } from 'react';
import { Wrapper, Logo, Links } from './styles';
import ActiveLink from '../ActiveLink/ActiveLink';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = (): ReactElement => {
  return (
    <Wrapper>
      <Link href="/">
        <Logo>
          <Image src="/assets/icons/LogoWord.svg" height={60} width={130} />
        </Logo>
      </Link>
      <Links>
        <ActiveLink href="/explore">Explore</ActiveLink>
        <ActiveLink href="/office-hours">Office Hours</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
      </Links>
    </Wrapper>
  );
};

export default Navigation;
