import React from 'react';
import { Form } from 'react-bootstrap';

const Step1 = ({
  username,
  setUsername,
  password,
  setPassword
}) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Step1;