import React from 'react'
import Button from './Button';

function HighlightedStudentProject({ studentProject, onSeeMore }) {
  const {name, description, institution, category, location, logo} = studentProject;
  return (
    <div className={"highlightStudentProject"}>
      <h2>{name}</h2>
      <h4>Description</h4>
      <p>{description}</p>
      <h4>Institution</h4>
      <p>{institution}</p>
      <h4>Category</h4>
      <p>{category}</p>
      <h4>Location</h4>
      <p>{location}</p>
      <img src={logo} alt="project's logo" />
      <Button label={"See More"} onClick={onSeeMore} />
    </div>
  );
}

export default HighlightedStudentProject;
