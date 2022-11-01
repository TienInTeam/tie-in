import { useMutation } from "@tanstack/react-query";
import StudentProjectPreview from "./StudentProjectPreview";

function ProjectCardPreview() {
  const readProject = useMutation(["studentProject"], () => getStudentProject({
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

  return (
    <div className="project-card">
     <StudentProjectPreview logo={logo} title={title} description={description} category={category} location={location} />
    </div>
  )
}

export default ProjectCardPreview