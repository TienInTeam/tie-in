import React from 'react'
import Button from "./Button";

function HighlightedBusinessProject({ businessProject, onSeeMore}) {
  const { name, description, members, dueDate, location} = businessProject;

  return (
    <div>
        <h2>{name}</h2>
        <h2>Description</h2>
        <p>{description}</p>
        <h2>Members Requirement</h2>
        <p>{members}</p>
        <h2>Due Date</h2>
        <p>{dueDate}</p>
        <h2>Location</h2>
        <p>{location}</p>
        <Button onClick={onSeeMore} />
    </div>
  );
}

export default HighlightedBusinessProject;
