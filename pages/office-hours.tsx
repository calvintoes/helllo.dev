import React, { ReactElement } from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout/Layout';
import Hero from '../components/OfficeHours/Hero';
import Results from '../components/OfficeHours/Results';
import LoadingResults from '../components/shared/LoadingResults';

const OfficeHours = (): ReactElement => {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error } = useSWR('./api/people', fetcher);

  return (
    <Layout title="Helllo | Office Hours">
      <Hero />
      {error && <div>Error loading, Please try again.</div>}
      {data ? <Results data={data} /> : <LoadingResults />}
    </Layout>
  );
};

export default OfficeHours;
