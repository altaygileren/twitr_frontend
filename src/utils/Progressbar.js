import React from 'react'
import { ProgressBar } from 'react-bootstrap';

export default function Progressbar({ progress }) {
  return (
    <div>
      <ProgressBar animated now={progress} />
    </div>
  )
}
