import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias hic necessitatibus, illum corrupti in unde praesentium! Voluptatum accusamus odit tempora maiores excepturi dicta ducimus iure fugiat ullam consequatur cupiditate laudantium aliquid animi mollitia, ratione ipsa labore vero. Blanditiis, excepturi odio?</p>
      <p>Link to twitter <a href='https://twitter.com' target='_blank' rel="noopener noreferrer">Here!</a></p>
    </Layout>
  )
}

export default ContactPage;