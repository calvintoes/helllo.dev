import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const IndexWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Home = () => {
  console.log('home')
  return (
    <Layout title="Start Coding the Right Way!">
      <IndexWrapper>
        <Hero />
        <Footer />
      </IndexWrapper>
    </Layout>
  )
}

export default Home;