import React from 'react'
import Comment from './single.comment';

const Showcomments = ({ comments }) => {
  return (
    <div>
      {
        comments.map((comment) => (
          <div>
            <Comment comment={comment} />
          </div>
        ))
      }
    </div>
  )
}

export default Showcomments;