import React from 'react'
import Button from './Button';

function StudentProjectPreview({ studentProject, onSeeMore, onEdit }) {
  const { logo, title, institution, description, category, location } = studentProject;

  return (
    <div>
      <img src={logo} alt="project's logo" />
      <h2>{title}</h2>
      <h3>Institution</h3>
      <p>{institution}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Category</h3>
      <p>{category}</p>
      <h3>Location</h3>
      <p>{location}</p>
      <Button onClick={onSeeMore} />
      <Button onClick={onEdit} />
    </div>
  );
}

export default StudentProjectPreview;
