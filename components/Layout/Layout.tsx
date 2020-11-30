import React, { ReactElement, ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import Head from 'next/head';
import { GlobalStyles } from '../../styles/base.styles';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import PlainFooter from '../Footer/PlainFooter';
import styled from 'styled-components';
interface LayoutProps {
  children: ReactNode[] | ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
  console.log('%cDesigned and Developed by Calvin To', 'font-size: large');
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main >
        <GlobalStyles />
        <Navigation />
        {children}
        {isIndexPage ? <Footer /> : <PlainFooter />}
      </main>
    </>
  );
};

export default Layout;
