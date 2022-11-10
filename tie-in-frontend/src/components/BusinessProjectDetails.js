import React from 'react';
import Button from './Button'

function BusinessProjectDetails({ businessProject, onApply }) {
  const { name, location, logo ,description,budget,team_size, team_requirements,start_date, end_date, subjects, category, technology , additional_field, projectTitle,  links, summary,file } = businessProject;


  return (
    <div className="business-project-details">
      <img src={logo} alt="company's logo" />
      <div className="business-request-header">
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
      <h2>Team Size</h2>
      <p>{team_size}</p>
      <h2>{projectTitle}</h2>
      <p>Team requirement:</p>
      <p>{team_requirements}</p>
      {/* <p>Project Duration {startDate ?  startDate: "Ongoing"}</p> */}
      <p>Project start date:</p>
      <p>{start_date}</p>
      <p>Project end date:</p>
      <p>{end_date}</p>
      <p>Estimated Budget:</p>
      <p>{budget}</p>
      <h3>Summary</h3>
      <p>{summary}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Links</h3>
      <h3>Additional Field Text</h3>
      <p>{additional_field}</p>
      <h3>Links</h3>
      <a href={links}>{links}</a>
      <Button label={"Apply"} variant={"primary"} onClick={onApply} />
    </div>
  )
}

export default BusinessProjectDetails;
