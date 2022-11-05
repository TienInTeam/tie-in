import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';

function StudentProjectDetails({ studentProject, team}) {
  const { image, logo_url, project_name, category, start_date, end_date, location, institution, description, project_link, business_model, development, design, management, others, additional_info } = studentProject;
  // const { team_name, studentTitle, linkedIn, email } = team;
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1);
  }
  return (
    <div className="student-project-details">
      <div className="icon back-icon" onClick={onBack}><BackIcon /></div>
      <div className="title">
        <img src={logo_url} alt="project's logo" />
        <h1>{project_name}</h1>
      <p>{category}</p>
      </div>
      <div className="subtitle">
        <div>
          <h3>Duration</h3>
          <p>{start_date}</p>
          <p>{end_date}</p>
        </div>
        <div>
          <h3>Location</h3>
        <p>{location}</p>
        </div>
        <div>
          <h3>Institution</h3>
          <p>{institution}</p>
        </div>
      </div>
      {image?
      image.map((image,index) => {return(<img src={image} alt="project's image" key={index} />)})
      : ""
      }
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Business Plan</h3>
      <p>{business_model}</p>
      <h3>Product</h3>
      <a href={project_link}>{project_link}</a>
      <h3>Technology</h3>
      <p>DEVELOPMENT:</p>
      <p>{development}</p>
      <p>DESIGN:</p>
      <p>{design}</p>
      <p>MANAGEMENT:</p>
      <p>{management}</p>
      <p>OTHERS:</p>
      <p>{others}</p>
      <h3>Additional Information</h3>
      <p>{additional_info}</p>
      {/* <h3>Team {team_name} contact:</h3>
      <h3>{team_name}</h3>
      {/* <h3>{studentTitle}</h3> */}
      {/* <a href={linkedIn}>{linkedIn}</a> */}
      {/* <a href={email}>{email}</a> */} 
    </div>
  );
}

export default StudentProjectDetails;
