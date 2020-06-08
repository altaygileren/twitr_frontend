import React from 'react'
import { Alert } from 'react-bootstrap';

export default function Errors({ message }) {
  return (
    <div className="error-div">
      <Alert variant='danger'>
        {message}
      </Alert>
    </div>
  )
}
