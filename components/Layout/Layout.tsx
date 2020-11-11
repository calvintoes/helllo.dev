import React, { ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import Head from 'next/head';
import { GlobalStyles } from '../../styles/base.styles';

interface LayoutProps {
  children: ReactNode[] | ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  console.log("%cDesigned and Developed by Calvin To", "font-size: large");

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <GlobalStyles />
        <Navigation />
        {children}
      </main>
    </>
  )
};

export default Layout;