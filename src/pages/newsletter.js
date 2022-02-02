import React from 'react';
import Layout from '../components/Layout';

const Newsletter = () => {
  return (
      <Layout>
          <section className='newsletter-page'>
            <div className="page-center">
              <h2>Receive the latest blog release in your inbox</h2>
              <h4>A new story is released every month</h4>
              <form
                className='contact-form'
                name='contact-form'
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/success"
              >
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="contact-form"/>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  className='form-control'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  className='form-control'
                />
                <button type='submit' className='btn form-control submit-btn'>
                  Subscribe
                </button>
              </form>
            </div>
          </section>
      </Layout>
  )
};

export default Newsletter;
