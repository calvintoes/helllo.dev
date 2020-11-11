import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import IconRow from '../components/Banners/IconRow';
import WordRow from '../components/Banners/WordRow';
import Instructions from '../components/Instructions/Instructions';
import ActionRow from '../components/Banners/ActionRow';
import Footer from '../components/Footer/Footer';

const Home = () => {
  console.log('home')
  return (
    <Layout title="Start Coding the Right Way!">
      <Hero />
      <IconRow />
      <WordRow />
      <Instructions />
      <ActionRow />
      <Footer />
    </Layout>
  )
}

export default Home;