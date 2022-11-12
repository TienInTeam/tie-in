import React from 'react'
import Button from './Button';

function StudentProjectPreview({ studentProject, onSeeMore }) {
  const { logo, name, institution, description, category, location } = studentProject;

  return (
    <div className="student-project-preview">
      <div className="title-container">
        <img src={logo} alt="project's logo" />
        <h2>{name}</h2>
      </div>
      <div className="body-container">
        <div>
          <h3>Institution</h3>
          <p>{institution}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div>
          <h3>Category</h3>
          {category ? category.map((cat, index) => {return(<div className="category" key={index}>{cat}</div>)}) : <p>-</p>}
        </div>
        <div>
          <h3>Location</h3>
          <p>{location}</p>˚
        </div>
        <Button label={"See More"} variant={"primary"} onClick={onSeeMore} />
      </div>
    </div>
  );
}

export default StudentProjectPreview;
