import React from 'react';
import Layout from '../components/Layout/Layout';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import Hero from '../components/ExploreContainer/Hero';
import Footer from '../components/Footer/Footer';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALOGLIA_API_KEY!
);


const Explore = () => {
  console.log('explore');

  return (
    <Layout title="Find the Right Coding Path For You">
      <InstantSearch searchClient={client} indexName="dev_PROG_BRANCHES">
        <Hero />
        <Footer />
      </InstantSearch>
    </Layout>
  )
};



export default Explore;