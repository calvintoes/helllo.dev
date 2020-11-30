import React from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout/Layout';
import Hero from '../components/OfficeHours/Hero';
import Results from '../components/OfficeHours/Results';
import PlainFooter from '../components/Footer/PlainFooter';

const OfficeHours = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('./api/people', fetcher);
  console.log(data);

  return (
    <Layout title="Helllo | Office Hours">
      <Hero />
      { error && <div>Error loading, Please try again.</div>}
      { data ? <Results data={data} /> : <div>Loading...</div>}
    </Layout>
  )
};

export default OfficeHours;