import React from 'react'
import Button from './Button';

function ApplicationCard({ companyProjectName, onClose, team, status }) {
  const {name, image} = team;
  return (
    <div className="application-card">
      <h3>Name</h3>
      <p>{companyProjectName}</p>
      <h3>Applicant</h3>
      <p>{name}</p>
      <img src={image} alt="student's image" />
      <h3>Status</h3>
      <p>{status}</p>

      <Button onClick={onClose} />
    </div>
  )
}

export default ApplicationCard