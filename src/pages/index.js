import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam repellat, omnis dolorum minus aut possimus necessitatibus provident reprehenderit voluptatem eius.</h2>
      <p>Need a dev? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage;