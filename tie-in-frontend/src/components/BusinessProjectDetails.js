import React from 'react';
import Button from './Button';
import { ReactComponent as FileIcon } from '../assets/icons/others/file-icon.svg';



function BusinessProjectDetails({ businessProject, business, onApply }) {
  const { name, additional_file_url, location, description, budget, team_size, team_requirements, start_date, end_date, subjects, category, technology, additional_field, projectTitle, links, summary, file } = businessProject;
  const { logo, company_name } = business;

  const renderAdditionalFiles = () => {
    if (!additional_file_url) {
      return null;
    }
    return additional_file_url.map((files, index) =>
        <a key={index} href={files}><FileIcon /> <span>{files.split('/').pop()}</span></a>
    )
  }

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
        </div>
        <div className="request-details">
          <p>Team members: <span>{team_size}</span></p>
          <p>Team requirement: <span>{team_requirements}</span></p>
          <p>Project Duration: <span>{start_date} to {end_date}</span> </p>
          <p>Estimated Budget: <span>{budget}</span></p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="additional-info">
          <h3>Additional Information</h3>
          <p>{additional_field ? additional_field : "No additional data available"}</p>
        </div>
        <div className='additional-files'>
          <h3>Additional Files</h3>
          {renderAdditionalFiles()}
        </div>
        <div className="links">
          <h3>Links</h3>
          {links ? <a href={links}>{links}</a> : <p>No links available</p>}

        </div>
      </div>
      <div className="business-request-footer">
        <Button label={"Apply"} variant={"primary"} onClick={onApply} />
      </div>
    </div>
  )
}

export default BusinessProjectDetails;
