import React from 'react';
import Post from './Post';

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
          </div>
      </section>
  )
};

export default Posts;
