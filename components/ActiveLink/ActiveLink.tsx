import React, { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Anchor } from './styles';
import Link from 'next/link';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
  mobile?: boolean;
}

const ActiveLink = ({ children, href, mobile }: ActiveLinkProps): ReactElement => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <Anchor mobile={mobile} active={router.pathname === href}>
        {children}
      </Anchor>
    </Link>
  );
};

export default ActiveLink;
