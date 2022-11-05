import {useQuery} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {requestStudentProject} from "../api/studentProject";

function StudentProjectDetails() {
  let params = useParams()
  const requestStudentProjects = useQuery(["studentProject"], () => requestStudentProject(params))
  if (requestStudentProjects.isLoading) {
    return <span>Loading...</span>
  }

  if (requestStudentProjects.isError) {
    return <span>Error: {requestStudentProjects.error.message}</span>
  }

  return (
    <div className="student-projects-details">
      <div>
            <StudentProjectDetails />
      </div>
    </div>
  )
}

export default StudentProjectDetails
