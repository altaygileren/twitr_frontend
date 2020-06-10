import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { getToken } from '../../utils';
import './twits.css';

const Commenttwit = ({ twit, setSingleTwit }) => {
  const [comment, setComment] = useState('');

  const addComment = async (e) => {
    e.preventDefault();
    const newComment = {
      user: twit.user,
      username: twit.username,
      comment: comment,
      twit: twit._id
    }
    let postComment = await axios.post(`${process.env.REACT_APP_BASE}/api/comments`, newComment, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getToken()
      }
    })
    setSingleTwit({ ...twit, comments: [...twit.comments, postComment.data] })
    setComment('');
  }
  return (
    <div className="comment-div">
      <Form inline>
        <Form.Control
          className="commentInput mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Comment"
          as="textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          onClick={addComment}
          type="submit"
          className="mb-2">
          Submit
  </Button>
      </Form>
    </div>
  )
}

export default Commenttwit;