import { useQuery } from "@tanstack/react-query";
import { requestBusinessProjects } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";


function BusinessProjectsList() {
  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects())
  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }
  if (requestBusinessProject.isError) {
    return <span>Error: {requestBusinessProject.error.message}</span>
  }
  const onSeeMore = () => {
    alert("see more is clicked")
  }
// console.log(businessProject);
  return (
    <div>
      <div>
        {requestBusinessProject.data.map((business, index) => (
          <BusinessProjectPreview businessProject={business} key={index} onSeeMore={onSeeMore} />
        ))}
      </div>
    </div>
  )
}

export default BusinessProjectsList;
