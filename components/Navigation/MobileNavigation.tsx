import React, { ReactElement } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ActiveLink from '../ActiveLink/ActiveLink';
import { MobileWrapper, MobileLogo } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '../../styles/constants/colors';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '1rem',
    top: '1rem',
  },
  bmBurgerBars: {
    background: colors.gray,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#000',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#EEEEEE',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

const MobileNavigation = (): ReactElement => {
  return (
    <MobileWrapper>
      <MobileLogo>helllo.dev</MobileLogo>
      <Menu right styles={styles}>
        <Link href="/">
          <Image src="/assets/icons/Logo.svg" height={100} width={100} />
        </Link>
        <ActiveLink mobile href="/explore">
          Explore
        </ActiveLink>
        <ActiveLink mobile href="/office-hours">
          Office Hours
        </ActiveLink>
        <ActiveLink mobile href="/about">
          About
        </ActiveLink>
      </Menu>
    </MobileWrapper>
  );
};

export default MobileNavigation;
