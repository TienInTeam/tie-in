import {useQuery} from "@tanstack/react-query";
import {requestStudentProjects} from "../api/studentProject";

function StudentProjectCard() {
  const requestStudentProject = useQuery([ "studentProject"], () => requestStudentProjects())
  if (requestStudentProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestStudentProject.isError) {
    return <span>Error: {requestStudentProject.error.message}</span>
  }
  return (
    <div>
      
    </div>
  )
}

export default StudentProjectCard
