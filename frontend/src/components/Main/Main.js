import React from 'react';

const Main = (props) => {
    const posts = props.posts.map((post) => {
        return (
            <li key={post.id} onClick={() => props.getSinglePostHandler(post.id)}>
                {post.title}
            </li>
        );
    });
    return (
      <>
        <ul className="posts-list">
            {posts}
        </ul>
      </>
    );
};

export default Main;
