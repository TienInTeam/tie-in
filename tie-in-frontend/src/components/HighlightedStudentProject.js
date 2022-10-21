import React from 'react'
import Button from './Button';

function HighlightedStudentProject({ studentProject, onSeeMore }) {
  const {name, description, institution, category, location, logo} = studentProject;
  return (
    <div>
      <h2>{name}</h2>
      <h2>Description</h2>
      <p>{description}</p>
      <h2>Institution</h2>
      <p>{institution}</p>
      <h2>Category</h2>
      <p>{category}</p>
      <h2>Location</h2>
      <p>{location}</p>
      <img src={logo} alt="project's logo" />
      <Button onClick={onSeeMore} />
    </div>
  );
}

export default HighlightedStudentProject;
