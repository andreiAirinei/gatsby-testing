import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit odio minus impedit eum. Sequi adipisci reprehenderit vero optio culpa at molestias molestiae qui similique sed! Fugiat expedita nisi iste totam?</p>
      <p>Need a dev? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage;