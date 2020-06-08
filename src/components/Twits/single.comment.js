import React from 'react';
import './twits.css';
import moment from 'moment';

export default function Singlecomment({ comment }) {
  return (
    <div className="single-comment-div">
      <b>{comment.username}</b>
      <br />
      {comment.comment}
      <br />
      {moment(comment.date).format('lll')}
      <hr />
    </div>
  )
}
