import {useQuery} from "@tanstack/react-query";
import {requestBusinessProjects} from "../api/businessProject";

function BusinessProjectsList() {
  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects())
  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestBusinessProject.isError) {
    return <span>Error: {requestBusinessProject.error.message}</span>
  }
  return (
    <div>
      
    </div>
  )
}

export default BusinessProjectsList
