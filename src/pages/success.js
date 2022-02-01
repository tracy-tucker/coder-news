import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const Success = () => {
  return (
      <Layout>
        <section className='success-page'>
          <div className='page-center'>
            <h2>Submission success!</h2>
            <Link to='/' className='btn'>
              Back Home
            </Link>
          </div>
        </section>
      </Layout>
  )
};

export default Success;
