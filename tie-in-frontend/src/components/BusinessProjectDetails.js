import React from 'react';
import Button from './Button';
import { ReactComponent as FileIcon } from '../assets/icons/others/attach-icon.svg';



function BusinessProjectDetails({ businessProject, business, onApply }) {
  const { name, additiona_file_url, location, description, budget, team_size, team_requirements, start_date, end_date, subjects, category, technology, additional_field, projectTitle, links, summary, file } = businessProject;
  const { logo, company_name } = business;

  return (
    <div className="business-project-details">
      <div className="business-request-header">
        <div className="company-branding">
          <div className="company-logo"><img src={logo} alt="company's logo" /></div>
          <h2>{company_name}</h2>
        </div>
        <p>{location}</p>
      </div>
      <div className="business-request-body">
        <div className="request-body-top">
          <h2>{name}</h2>
          {additiona_file_url ? <p>{<a href={additiona_file_url}><FileIcon /> <span>File (additional information)</span></a>}</p> : <></>}
        </div>
        <p>Team members: <span>{team_size}</span></p>
        <p>Team requirement: <span>{team_requirements}</span></p>
        <p>Project Duration: <span>{start_date} to {end_date}</span> </p>
        <p>Estimated Budget: <span>{budget}</span></p>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Additional Field Text</h3>
        <p>{additional_field ? additional_field : "No additional data available"}</p>
        <h3>Links</h3>
        <a href={links}>{links}</a>
      </div>
      <div className="business-request-footer">
        <Button label={"Apply"} variant={"primary"} onClick={onApply} />
      </div>
    </div>
  )
}

export default BusinessProjectDetails;
