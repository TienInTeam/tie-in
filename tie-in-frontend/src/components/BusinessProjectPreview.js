import React from 'react';
import Button from './Button';

function BusinessProjectPreview({ businessProject, onSeeMore, onEdit }) {
  const { logo, title, description, teamRequirement, dueDate, category, location } = businessProject;
  return (
    <div>
       <img src={logo} alt="project's logo" />
      <h2>{title}</h2>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Team Requirement</h3>
      <p>{teamRequirement}</p>
      <h3>Due date</h3>
      <p>{dueDate}</p>
      <h3>Category</h3>
      <p>{category}</p>
      <h3>Location</h3>
      <p>{location}</p>

      <Button onClick={onSeeMore} />
      <Button onClick={onEdit} />
    </div>
  )
}

export default BusinessProjectPreview;
