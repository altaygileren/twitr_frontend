import React from 'react'
import { Alert } from 'react-bootstrap';

const Errors = ({ message }) => {
  return (
    <div className="error-div">
      <Alert variant='danger'>
        {message}
      </Alert>
    </div>
  )
}

export default Errors;