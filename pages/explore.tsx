import React from 'react';
import Layout from '../components/Layout/Layout';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import Hero from '../components/ExploreContainer/Hero';
import PlainFooter from '../components/Footer/PlainFooter';

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
        <PlainFooter />
      </InstantSearch>
    </Layout>
  )
};



export default Explore;