import React from 'react'
import Button from './Button'

function PreviousProjectCard({ projectName, onSeeDetails}) {
  return (
    <div className="previous-project-card">
    <h2>{projectName}</h2>

    <Button onClick={onSeeDetails} />
    </div>
  )
}

export default PreviousProjectCard