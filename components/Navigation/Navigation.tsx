import React from 'react';
import { Wrapper, Logo, Links } from './styles';
import ActiveLink from '../ActiveLink/ActiveLink';
import Link  from 'next/link';
import { useRouter } from 'next/router';

const activeStyle = {
  borderBottom: 'solid 2px #468FF9',
  fontWeight: 700,
}

const Navigation = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/">
        <Logo>
          helllo
        </Logo>
      </Link>
      <Links>
        <ActiveLink href="/explore" style={router.pathname === "/explore" && activeStyle}>Explore</ActiveLink>
        <ActiveLink href="/office-hours" style={router.pathname === "/office-hours" && activeStyle}>Office Hours</ActiveLink>
        <ActiveLink href="/contact" style={router.pathname === "contact" && activeStyle}>Contact</ActiveLink>
      </Links>
    </Wrapper>
  )
};

export default Navigation;

