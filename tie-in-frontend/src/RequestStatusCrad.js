import React from 'react'
import Button from './Button';

function RequestStatusCrad({ logo, projectTitle, team, onApprove, onClose}) {

  const {teamName, image, name} = team;
  return (
    <div className="request-status-card">
    <img src={logo} alt="project's logo" />
    <h2>{projectTitle}</h2>
    <h3>{teamName}</h3>
    <img src={image} alt="student's image" />
    <p>{name}</p>

    <Button onClick={onApprove} />
    <Button onClick={onClose} />
    </div>
  )
}

export default RequestStatusCrad