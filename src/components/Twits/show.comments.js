import React from 'react'
import Comment from './single.comment';

export default function Showcomments({ comments }) {
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
