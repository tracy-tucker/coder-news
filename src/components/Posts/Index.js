import React from 'react';
import Post from './Post';
import Banner from '../Banner';

const Posts = ({ posts }) => {
  return (
      <section className='posts'>
          <h3 className='posts-title'>This is the Post title</h3>
          <div className="posts-center">
              {/* posts column */}
              <article>
                  {posts.map(post => {
                      return <Post key={post.id} {...post} />
                  })}
              </article>
              {/* banner column */}
              <article>
                  <Banner />
              </article>
          </div>
      </section>
  )
};

export default Posts;
