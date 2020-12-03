import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import Head from 'next/head';
import { GlobalStyles } from '../../styles/base.styles';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import PlainFooter from '../Footer/PlainFooter';
interface LayoutProps {
  children: ReactNode[] | ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
  console.log('%cDesigned and Developed by Calvin To', 'font-size: large');
  const [isMobile, setMobile] = useState(false);
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  useEffect(() => {
    if (window.innerWidth < 416) {
      setMobile(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isMobile ? <MobileNavigation /> : <Navigation />}
      <main>
        <GlobalStyles />
        {children}
        {isIndexPage ? <Footer /> : <PlainFooter />}
      </main>
    </>
  );
};

export default Layout;
