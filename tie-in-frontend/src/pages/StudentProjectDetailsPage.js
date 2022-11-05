import {useQuery} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {requestStudentProject} from "../api/studentProject";
import StudentProjectDetails from "../components/StudentProjectDetails";


function StudentProjectDetailsPage() {
  let params = useParams();
  const requestStudentProjectById = useQuery(["studentProject"], () => requestStudentProject(params.id));
  if (requestStudentProjectById.isLoading) {
    return <span>Loading...</span>
  }

  if (requestStudentProjectById.isError) {
    return <span>Error: {requestStudentProjectById.error.message}</span>
  }
  
  return (
    <div className="student-projects-details">
      <div>
            <StudentProjectDetails studentProject={requestStudentProjectById.data} />
      </div>
    </div>
  )
}

export default StudentProjectDetailsPage;
