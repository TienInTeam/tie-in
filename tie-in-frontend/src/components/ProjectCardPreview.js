import { useMutation } from "@tanstack/react-query";
import Button from './Button';

function ProjectCardPreview({ studentProject, onSeeMore}) {
  const saveProject = useMutation(["businessProject"], () => saveBusinessProject({
    "id": 76,
    "title": title,
    "instituition": institution,
    "description": description,
    "category": category,
    "location": location
}), {
    onSuccess: () => {
    },
    onError: () => {
        alert("Something went wrong, please try again.");
    }
});

  const { logo, title, institution, description, category, location } = studentProject;
  return (
    <div className="project-card">
      <img src={logo} alt="logo's image" />
      <h2>{title}</h2>
      <h3>Instituition</h3>
      <p>{institution}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Category</h3>
      <p>{category}</p>
      <h3>Location</h3>
      <p>{location}</p>
      <Button onClick={onSeeMore} />
    </div>
  )
}

export default ProjectCardPreview