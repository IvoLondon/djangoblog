import React from 'react'

const Main = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <li key={post.id} onClick={() => props.getSinglePostHandler(post.id)}>
          {post.title}
      </li>
    )
  })
  return (
      <div>
        <ul>
            {posts}
        </ul>
    </div>
  )
}

export default Main
