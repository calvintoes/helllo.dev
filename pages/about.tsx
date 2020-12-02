import React from 'react';
import Layout from '../components/Layout/Layout';
import PlainFooter from '../components/Footer/PlainFooter';
import Hero from '../components/About/Hero';
import Mission from '../components/About/Mission';

const About = () => {
  return (
    <Layout title="Helllo | About">
      <Hero />
      <Mission />
    </Layout>
  );
};

export default About;
