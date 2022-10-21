import React from 'react'

function RequestStatusCard({ logo, projectTitle, team, status, onClose }) {
  const { teamName, image, name } = team;
  return (
    <div className="request-status-card">
      <img src={logo} alt="project's logo" />
      <h2>{projectTitle}</h2>
      <h2>Team</h2>
      <h3>{teamName}</h3>
      <img src={image} alt="student's image" />
      <p>{name}</p>
      <h2>Status</h2>
      <p>{status}</p>
      <Button onClick={onClose} />
    </div>
  )
}

export default RequestStatusCard
