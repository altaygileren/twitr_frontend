import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { Button } from 'react-bootstrap';
import Alltwits from '../Twits/all.twits';

const Editprofile = () => {

  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
        setEmail(user.email);
        setUsername(user.username);
        setFirstName(user.firstName);
        setLastName(user.lastName);
    }
    loadUser();
  }, []);

if (!user) {
  return <Alltwits />
}

  return (
    <div>
      {email}
      {firstName}
      {/* <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>    
           c     
            


            
           <Form.Control
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name" />
        </Form.Group>
      </Form> */}
      <Button variant="primary">Update Profile</Button>
    </div>
  )
}

export default Editprofile;