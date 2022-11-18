import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { requestBusinessProjects, requestBusinessProjectsByQuery } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
  const [filter, setFilter] = useState([]);
  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(), {
    onError: (error) => {
      alert(error.message);
    }
  });

  const requestFilteredBusinessProject = useQuery(["businessProject", filter], () => requestBusinessProjectsByQuery(filter), {
    onError: (error) => {
      alert(error.message);
    }
  });

  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  const onCheckStatus = () => {
    alert("Check status is clicked")
  }
  const onChange = (value) => {
    setFilter(value)
  }
  return (
    <div className="grid-container">
      <SideMenu />
      <div>
      <Searchbar onChange={onChange}/>
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
        
}

export default BusinessProjectsList;
