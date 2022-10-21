import React from 'react'
import Button from './Button'

function BusinessProjectDetails({businessProject, onApply}) {
  const {name, logo, location, projectTitle, teamMembers, teamRequirement, startDate, endDate, budget, projectLocation, summary, fieldText, link} = businessProject
  return (
    <div className="business-project-details">
      <img src={logo} alt="company's logo" />
      <h2>{name}</h2>
      <p>{location}</p>
      <h2>{projectTitle}</h2>
      <p>Team members:</p>
      <p>{teamMembers}</p>
      <p>Team tequirement:</p>
      <p>{teamRequirement}</p>
      <p>Project start date:</p>
      <p>{startDate}</p>
      <p>Project end date:</p>
      <p>{endDate}</p>
      <p>Estimated Budget:</p>
      <p>{budget}</p>
      <p>Location:</p>
      <p>{projectLocation}</p>

      <h3>Summary</h3>
      <p>{summary}</p>
      <h3>Additional Field Text</h3>
      <p>{fieldText}</p>
      <h3>Links</h3>
      <a href={link}>{link}</a>



      <Button onClick={onApply} />
    </div>
  )
}

export default BusinessProjectDetails