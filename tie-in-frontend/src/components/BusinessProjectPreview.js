import React from 'react';
import Button from './Button';

function BusinessProjectPreview({ businessProject, onSeeMore }) {
  const { logo, company_name, description, team_member, dueDate, category, location } = businessProject;
  return (
    <div className="business-project-preview">
      <div className="title-container">
       <img src={logo} alt="project's logo" />
      <h2>{company_name}</h2>
      </div>
      <div className="body-container">
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div>
        <h3>Team Member</h3>
        <p>{team_member}</p>
        <h3>Due date</h3>
        <p>{dueDate}</p>
      </div>
      <div>
        <h3>Category</h3>
        <p>{category}</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>{location}</p>
        <Button label={"SeeMore"} variant={"button"} onClick={onSeeMore} />
      </div>
      </div>
    </div>
  )
}

export default BusinessProjectPreview;
