import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const ErrorPage = () => {
  return (
    <Layout>
      <section className='error-page'>
        <div className="page-center">
          <span>404</span>
          <h3>This page cannot be found</h3>
          <Link to='/' className='btn'>
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  )
};

export default ErrorPage;
