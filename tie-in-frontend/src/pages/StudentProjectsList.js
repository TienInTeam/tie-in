import { useQuery } from "@tanstack/react-query";
import { requestStudentProjects } from "../api/studentProject";
import StudentProjectPreview from "../components/StudentProjectPreview";

function StudentProjectsList() {
  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    })

  if (requestStudentProject.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  return (
    <div className="student-projects-list">
      <div>
        {requestStudentProject.data.map((student, index) => (
          <StudentProjectPreview studentProject={student} key={index} onSeeMore={onSeeMore} />
        ))}
      </div>
    </div>
  )
}

export default StudentProjectsList;
