import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Home = () => {
  console.log('home');
  return (
    <Layout title="Start Coding the Right Way!">
      <Hero />
    </Layout>
  );
};

export default Home;
