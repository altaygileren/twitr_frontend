import React, { useContext, useState } from 'react';
import Title from '../../utils/Title';
import { Form, Button } from 'react-bootstrap';
import { TwitContext } from '../../utils/TwitContext';
import { UserContext } from '../../utils/UserContext';
import axios from 'axios';
import { getToken } from '../../utils/index';

const Createtwit = () => {

  const { response, setResponse } = useContext(TwitContext);
  const { user, setUser } = useContext(UserContext);
  const [twit, setTwit] = useState();

  const addTwit = async () => {
    let newTwit = {
      twit: twit,
      user: user._id,
      username: user.username
    }
    let newUserPost = await axios.post(`${process.env.REACT_APP_BASE}/api/posts`, newTwit, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getToken()
      }
    })
    setResponse(twits => [newUserPost.data, ...twits])
    setTwit('')
  }

  return (
    <div className="create-twit-div">
      <Title title={"What's on your mind?"} />
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control onChange={(e) => setTwit(e.target.value)} value={twit} name="twit" as="textarea" rows="3" />
      </Form.Group>
      <Button onClick={addTwit}>Submit</Button>
    </div>
  )
}

export default Createtwit;