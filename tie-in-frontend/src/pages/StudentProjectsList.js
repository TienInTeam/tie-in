import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { requestStudentProjects } from "../api/studentProject";
import StudentProjectPreview from "../components/StudentProjectPreview";

function StudentProjectsList() {
  const navigate = useNavigate();
  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects())
  if (requestStudentProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestStudentProject.isError) {
    return <span>Error: {requestStudentProject.error.message}</span>
  }

  const onSeeMore = (id) => {
    navigate(`/studentprojectdetails/${id+1}`);
    console.log(id);
  }
  return (
    <div className="student-projects-list">
      <div>
        {requestStudentProject.data.map((student, index) => (
          <StudentProjectPreview studentProject={student} key={index} onSeeMore={() => onSeeMore(index)} />
        ))}
      </div>
    </div>
  )
}

export default StudentProjectsList;
