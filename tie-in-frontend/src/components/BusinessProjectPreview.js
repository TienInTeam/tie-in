import React from 'react';
import Button from './Button';

function BusinessProjectPreview({ businessProject, onSeeMore, onCheckStatus }) {
  const { status, logo, company_name, description, team_member, dueDate, category, location } = businessProject;
  console.log(Boolean(businessProject.status));
  return (
    <div className="business-project-preview">
      <div className="title-container">
        <img src={logo} alt="project's logo" />
        <h2>{company_name}</h2>
        <p>{status ? "You have already applied" : ""}</p>
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
          {category ? category.map((cat, index) => { return (<div key={index} className="category">{cat}</div>) }) : <p>-</p>}      </div>
        <div className="button-container">
          <h3>Location</h3>
          <p>{location}</p>
          <Button label={"See More"} variant={"primary"} onClick={onSeeMore} />
          {status ? 
          <Button label={"Check Status"} variant={"secondary"} onClick={onCheckStatus} />
           : <p>salam</p>
           }

        </div>
      </div>
    </div >
  )
}

export default BusinessProjectPreview;
