import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import './twits.css';
import Commenttwit from './comment.twit';
import Showcomments from './show.comments';

const Singletwit = ({ twit }) => {

  const [showComments, setShowComments] = useState(false);
  const [singleTwit, setSingleTwit] = useState(twit);

  const clicked = () => {
    setShowComments(!showComments)
  }
  return (
    <Card className="single-twit-card" key={singleTwit._id}>
      <Card.Body>
        <Card.Title>{singleTwit.user ? (singleTwit.username) : (null)}</Card.Title>
        <Card.Text className="twit-body">
          {singleTwit.twit}
          <br />
          <span className="time-twit">
            {moment(singleTwit.date).format('lll')}
          </span>
        </Card.Text>
        {
          showComments ? (<Showcomments comments={singleTwit.comments} />) : (null)
        }
        {
          singleTwit.comments ? (
            <Button onClick={clicked} variant="primary">
              {
                showComments ? ('Hide comments') : ('View comments')
              }
            </Button>
          ) : (null)
        }
        <Commenttwit
          setSingleTwit={setSingleTwit}
          twit={singleTwit} />
      </Card.Body>
    </Card>
  )
}

export default Singletwit;