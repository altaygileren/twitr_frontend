import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const Progressbar = ({ progress }) => {
  return (
    <div>
      <ProgressBar animated now={progress} />
    </div>
  )
}

export default Progressbar;