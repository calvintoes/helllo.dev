import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Anchor } from './styles';
import Link from 'next/link';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <Anchor active={router.pathname === href}>{children}</Anchor>
    </Link>
  );
};

export default ActiveLink;
