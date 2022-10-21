import React from 'react'
import Button from './Button'

function StudentProjectDetails({ studentProject, team, onEdit }) {
  const { logo, title, verification, category, duration, location, institution, description, product, planUpload } = studentProject;
  const { image, name, studentTitle, linkedIn, email } = team;

  return (
    <div className="student-project-detail">
      <img src={logo} alt="project's logo" />
      <h1>{title}</h1>
      <p>{verification}</p>
      <p>{category}</p>
      <h3>Duration</h3>
      <p>{duration}</p>
      <h3>Location</h3>
      <p>{location}</p>
      <h3>Institution</h3>
      <p>{institution}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Product</h3>
      <a href={product}>{product}</a>
      <h3>Business Plan</h3>
      <input type="file" id="myFile" name="filename" />
      <Button onClick={planUpload} />
      <img src={image} alt="student's image" />
      <h3>{name}</h3>
      <h3>{studentTitle}</h3>
      <a href={linkedIn}>{linkedIn}</a>
      <a href={email}>{email}</a>
      <Button onClick={onEdit} />
    </div>
  );
}

export default StudentProjectDetails;
