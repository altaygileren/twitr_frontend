import React from 'react'
import { Form } from 'react-bootstrap';
import Title from '../../../utils/Title';
import '../auth.css';

export default function Step1({
  currentStep,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  passwordMatch,
  setPasswordMatch
}) {
  if (currentStep !== 1) return null;

  return (
    <div>
      <Title title={'Step 1'} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
          />

        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            value={passwordMatch}
            name="passwordMatch"
            onChange={(e) => setPasswordMatch(e.target.value)}
            placeholder="Confirm Password" />
        </Form.Group>
      </Form>
    </div>
  )
}
