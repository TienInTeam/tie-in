import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { requestBusinessProjects, requestBusinessProjectsByQuery } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
  const [filter, setFilter] = useState([]);

  const requestFilteredBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(filter),
    {
      select: (businessProject) => (businessProject
        .filter(businessProject => businessProject.category.includes(filter[0]))
        // .filter(businessProject => businessProject.team_size === filter[1])
        // .filter(businessProject => businessProject.location.includes(filter[2]))
      )

      // (businessProject.filter((businessProject) => 
      // (businessProject.category.includes(filter[0])) || (businessProject.team_size === filter[1])) || (businessProject.location.includes(filter[2]))
      // ))

    },
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  if (requestFilteredBusinessProject.isLoading) {
    return <span>Loading...</span>
  }
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
    setFilter(filter => [...filter, value]);
  }
  console.log(filter[1]);

  return (
    <div className="grid-container">
      <SideMenu />
      <div>
        <Searchbar onSelectChange={onChange} />
        {filter.length ? requestFilteredBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        ) :
          requestBusinessProject.data.map((business, index) =>
            <BusinessProjectPreview
              businessProject={business}
              key={index}
              onSeeMore={onSeeMore}
              onCheckStatus={onCheckStatus}
            />
          )
        }
      </div>
    </div>

  );


}

export default BusinessProjectsList;
