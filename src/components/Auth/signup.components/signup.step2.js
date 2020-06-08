import React from 'react'
import Title from '../../../utils/Title';
import { Form } from 'react-bootstrap';

export default function Step2({
  currentStep,
  firstName,
  lastName,
  setFirstname,
  setLastname
}) {
  if (currentStep !== 2) { return null }
  return (
    <div>
      <Title title={'Step 2'} />
      <Form>
        <Form.Group controlId="formBasicUser">
          <Form.Label>First name</Form.Label>
          <Form.Control
            value={firstName}
            name="firstName"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicUser">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            value={lastName}
            name="lastName"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last name"
          />
        </Form.Group>
      </Form>
    </div>
  )
}
